import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.24.2";

const LeadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^(?:(?:\+91)|0)?[6-9]\d{9}$/),
  organisationName: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
  consent: z.literal(true),
});

type Lead = z.infer<typeof LeadSchema>;
type ZohoToken = { value: string; apiDomain: string; expiresAt: number };

const ADVISORY_BUCKET = Deno.env.get("EPF_ADVISORY_BUCKET") ?? "epf-advisory";
const ADVISORY_PATH = Deno.env.get("EPF_ADVISORY_PATH") ?? "EPF_Wage_Ceiling_15k_to_25k_nHRMS_RYT.pdf";
const BIGIN_PIPELINE = Deno.env.get("BIGIN_PIPELINE_NAME") ?? "Collaboration";
const BIGIN_OWNER_EMAIL = Deno.env.get("BIGIN_OWNER_EMAIL") ?? "";
const LEAD_TAGS = ["EPF Advisory Lead", "Collaboration"];

const REQUIRED_ZOHO_SECRETS = [
  "ZOHO_CLIENT_ID",
  "ZOHO_CLIENT_SECRET",
  "ZOHO_REFRESH_TOKEN",
  "ZOHO_ACCOUNTS_DOMAIN",
  "ZOHO_API_DOMAIN",
];

const missingZohoSecrets = () =>
  REQUIRED_ZOHO_SECRETS.filter((name) => !Deno.env.get(name));

let cachedZohoToken: ZohoToken | null = null;

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const requireEnv = (name: string) => {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing required configuration: ${name}`);
  return value;
};

const normalizePhone = (phone: string) => phone.replace(/^(?:\+91|0)/, "");
const splitName = (fullName: string) => {
  const [firstName, ...rest] = fullName.trim().split(/\s+/);
  return { firstName, lastName: rest.length > 0 ? rest.join(" ") : firstName };
};
const safeProviderError = (status: number, body: string) =>
  `Bigin request failed (${status}): ${body.slice(0, 600)}`;

// Alternative integration point: a linked Lovable Zoho CRM connector could replace this
// Self Client OAuth transport once its gateway is confirmed to expose Bigin modules.
async function getZohoToken(forceRefresh = false): Promise<ZohoToken> {
  if (!forceRefresh && cachedZohoToken && cachedZohoToken.expiresAt > Date.now() + 120_000) {
    return cachedZohoToken;
  }
  const accountsDomain = requireEnv("ZOHO_ACCOUNTS_DOMAIN").replace(/\/$/, "");
  const configuredApiDomain = requireEnv("ZOHO_API_DOMAIN").replace(/\/$/, "");
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: requireEnv("ZOHO_CLIENT_ID"),
    client_secret: requireEnv("ZOHO_CLIENT_SECRET"),
    refresh_token: requireEnv("ZOHO_REFRESH_TOKEN"),
  });
  const response = await fetch(`${accountsDomain}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const body = await response.text();
  if (!response.ok) throw new Error(safeProviderError(response.status, body));
  const parsed = JSON.parse(body) as { access_token?: string; api_domain?: string; expires_in?: number };
  if (!parsed.access_token) throw new Error("Zoho token response did not include an access token");
  cachedZohoToken = {
    value: parsed.access_token,
    apiDomain: (parsed.api_domain || configuredApiDomain).replace(/\/$/, ""),
    expiresAt: Date.now() + (parsed.expires_in ?? 3600) * 1000,
  };
  return cachedZohoToken;
}

async function biginRequest(path: string, init: RequestInit, retryOnUnauthorized = true): Promise<any> {
  const token = await getZohoToken(!retryOnUnauthorized);
  const response = await fetch(`${token.apiDomain}/bigin/v2${path}`, {
    ...init,
    headers: {
      Authorization: `Zoho-oauthtoken ${token.value}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  if (response.status === 401 && retryOnUnauthorized) {
    cachedZohoToken = null;
    return biginRequest(path, init, false);
  }
  const body = await response.text();
  if (!response.ok) throw new Error(safeProviderError(response.status, body));
  return body ? JSON.parse(body) : {};
}

const extractRecordId = (result: any): string | undefined =>
  result?.data?.[0]?.details?.id ?? result?.data?.[0]?.id;

async function findOwnerId(email: string): Promise<string | undefined> {
  if (!email) return undefined;
  try {
    const result = await biginRequest(`/users?type=ActiveUsers`, { method: "GET" });
    const match = (result?.users ?? []).find(
      (user: { email?: string; id?: string }) => user.email?.toLowerCase() === email.toLowerCase(),
    );
    return match?.id;
  } catch (error) {
    console.error("Bigin owner lookup failed", error instanceof Error ? error.message : error);
    return undefined;
  }
}

async function findPipelineStage(): Promise<{ pipeline?: string; stage?: string }> {
  try {
    const result = await biginRequest(
      `/settings/pipeline?layout_id=&module=Pipelines`,
      { method: "GET" },
    );
    const pipelines = result?.pipeline ?? [];
    const match =
      pipelines.find((p: { display_value?: string }) =>
        p.display_value?.toLowerCase() === BIGIN_PIPELINE.toLowerCase()
      ) ?? pipelines[0];
    const stage = match?.maps?.[0]?.display_value;
    return { pipeline: match?.display_value, stage };
  } catch (error) {
    console.error("Bigin pipeline lookup failed", error instanceof Error ? error.message : error);
    return {};
  }
}

async function upsertAccount(organisationName: string) {
  const result = await biginRequest("/Accounts/upsert", {
    method: "POST",
    body: JSON.stringify({
      data: [{ Account_Name: organisationName }],
      duplicate_check_fields: ["Account_Name"],
    }),
  });
  const accountId = extractRecordId(result);
  if (!accountId) throw new Error("Bigin did not return an Account record ID");
  return accountId;
}

// Tagging is best-effort: tags are created first (Bigin rejects add_tags for
// unknown tags), and any tag failure is logged without blocking the sync.
async function ensureTags(module: string) {
  await biginRequest(`/settings/tags?module=${encodeURIComponent(module)}`, {
    method: "POST",
    body: JSON.stringify({ tags: LEAD_TAGS.map((name) => ({ name })) }),
  });
}

async function addTagsToRecord(module: string, recordId: string) {
  try {
    await ensureTags(module);
  } catch (error) {
    console.error(
      `Bigin tag creation failed for ${module}`,
      error instanceof Error ? error.message : error,
    );
  }
  try {
    await biginRequest(
      `/${module}/${encodeURIComponent(recordId)}/actions/add_tags`,
      {
        method: "POST",
        body: JSON.stringify({ tags: LEAD_TAGS.map((name) => ({ name })) }),
      },
    );
  } catch (error) {
    console.error(
      `Bigin add_tags failed for ${module} ${recordId}`,
      error instanceof Error ? error.message : error,
    );
  }
}

type StepStatus = "synced" | "failed" | "skipped";
type LeadRow = {
  id: string; full_name: string; phone: string; organisation_name: string; email: string;
  crm_account_id: string | null; crm_record_id: string | null;
  bigin_contact_status: string; bigin_deal_status: string; campaigns_status: string;
};

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e)).slice(0, 1000);

async function syncBiginContact(row: LeadRow) {
  const { firstName, lastName } = splitName(row.full_name);
  const accountId = await upsertAccount(row.organisation_name);
  const ownerId = await findOwnerId(BIGIN_OWNER_EMAIL);
  const contactPayload: Record<string, unknown> = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: row.email.toLowerCase(),
    Mobile: normalizePhone(row.phone),
    Account_Name: { id: accountId },
    Description:
      `Lead source: EPF Wage Ceiling Advisory (15k to 25k) — ${new Date().toISOString()}. ` +
      `Consent given for research and collaboration use.`,
  };
  if (ownerId) contactPayload.Owner = { id: ownerId };
  const contactResult = await biginRequest("/Contacts/upsert", {
    method: "POST",
    body: JSON.stringify({ data: [contactPayload], duplicate_check_fields: ["Email"] }),
  });
  const contactId = extractRecordId(contactResult);
  if (!contactId) throw new Error("Bigin did not return a Contact record ID");
  await addTagsToRecord("Contacts", contactId);
  return { accountId, contactId };
}

async function syncBiginDeal(row: LeadRow, accountId: string, contactId: string) {
  const ownerId = await findOwnerId(BIGIN_OWNER_EMAIL);
  const { pipeline, stage } = await findPipelineStage();
  const dealPayload: Record<string, unknown> = {
    Deal_Name: `${row.organisation_name} — EPF Advisory`,
    Account_Name: { id: accountId },
    Contact_Name: { id: contactId },
    Description: `EPF Wage Ceiling Advisory lead (${new Date().toISOString()}). Research & collaboration consent given.`,
  };
  if (pipeline) dealPayload.Pipeline = pipeline;
  if (stage) dealPayload.Stage = stage;
  if (ownerId) dealPayload.Owner = { id: ownerId };
  const dealResult = await biginRequest("/Pipelines", {
    method: "POST",
    body: JSON.stringify({ data: [dealPayload] }),
  });
  const dealId = extractRecordId(dealResult);
  if (!dealId) throw new Error("Bigin did not return a Pipeline deal ID");
  await addTagsToRecord("Pipelines", dealId);
  return dealId;
}

// Zoho Campaigns: adds the lead to the "EPF Advisory Leads" list. The list's
// autoresponder sends the follow-up email (Lovable sends no email itself).
async function syncCampaigns(row: LeadRow, retry = true): Promise<void> {
  const domain = requireEnv("ZOHO_CAMPAIGNS_API_DOMAIN").replace(/\/$/, "");
  const listKey = requireEnv("ZOHO_CAMPAIGNS_LIST_KEY");
  const token = await getZohoToken(!retry);
  const { firstName, lastName } = splitName(row.full_name);
  const contactinfo = JSON.stringify({
    "First Name": firstName,
    "Last Name": lastName,
    "Contact Email": row.email.toLowerCase(),
    "Company Name": row.organisation_name,
    "Phone": normalizePhone(row.phone),
  });
  const params = new URLSearchParams({ resfmt: "JSON", listkey: listKey, contactinfo, source: "EPF Advisory Landing Page" });
  const response = await fetch(`${domain}/api/v1.1/json/listsubscribe?${params}`, {
    method: "POST",
    headers: { Authorization: `Zoho-oauthtoken ${token.value}` },
  });
  if (response.status === 401 && retry) {
    cachedZohoToken = null;
    return syncCampaigns(row, false);
  }
  const body = await response.text();
  let parsed: any = {};
  try { parsed = JSON.parse(body); } catch { /* non-JSON */ }
  if (!response.ok || parsed?.status === "error") {
    throw new Error(`Zoho Campaigns listsubscribe failed (${response.status}): ${body.slice(0, 600)}`);
  }
  console.log("Zoho Campaigns listsubscribe OK", parsed?.message ?? parsed?.code ?? "");
}

// Runs every integration step that isn't already "synced". Each step is
// independent and non-fatal; results are written per step to the lead row.
async function runIntegrations(serviceClient: ReturnType<typeof createClient>, row: LeadRow) {
  const now = () => new Date().toISOString();
  const update: Record<string, unknown> = {};
  const missing = missingZohoSecrets();
  let accountId = row.crm_account_id;
  let contactId = row.crm_record_id;

  if (row.bigin_contact_status !== "synced" || !contactId || !accountId) {
    if (missing.length) {
      const msg = `Missing required secrets: ${missing.join(", ")}`;
      console.error(`Bigin sync skipped — ${msg}`);
      Object.assign(update, { bigin_contact_status: "failed", bigin_contact_error: msg });
    } else {
      try {
        ({ accountId, contactId } = await syncBiginContact(row));
        Object.assign(update, {
          bigin_contact_status: "synced", bigin_contact_error: null,
          crm_account_id: accountId, crm_record_id: contactId,
        });
        console.log("Bigin contact synced", contactId);
      } catch (e) {
        console.error("Bigin contact sync failed", errMsg(e));
        Object.assign(update, { bigin_contact_status: "failed", bigin_contact_error: errMsg(e) });
        contactId = null;
      }
    }
    update.crm_last_attempt_at = now();
  }

  if (row.bigin_deal_status !== "synced") {
    if (!contactId || !accountId) {
      Object.assign(update, { bigin_deal_status: "failed", bigin_deal_error: "Waiting on Bigin contact sync" });
    } else {
      try {
        const dealId = await syncBiginDeal(row, accountId, contactId);
        Object.assign(update, { bigin_deal_status: "synced", bigin_deal_error: null, crm_deal_id: dealId });
        console.log("Bigin deal created", dealId);
      } catch (e) {
        console.error("Bigin deal creation failed", errMsg(e));
        Object.assign(update, { bigin_deal_status: "failed", bigin_deal_error: errMsg(e) });
      }
    }
  }

  if (row.campaigns_status !== "synced") {
    const missingCampaigns = [...missing, "ZOHO_CAMPAIGNS_API_DOMAIN", "ZOHO_CAMPAIGNS_LIST_KEY"]
      .filter((n, i, a) => a.indexOf(n) === i && !Deno.env.get(n));
    if (missingCampaigns.length) {
      const msg = `Missing required secrets: ${missingCampaigns.join(", ")}`;
      console.error(`Zoho Campaigns sync skipped — ${msg}`);
      Object.assign(update, { campaigns_status: "failed", campaigns_error: msg });
    } else {
      try {
        await syncCampaigns(row);
        Object.assign(update, { campaigns_status: "synced", campaigns_error: null });
      } catch (e) {
        console.error("Zoho Campaigns sync failed", errMsg(e));
        Object.assign(update, { campaigns_status: "failed", campaigns_error: errMsg(e) });
      }
    }
    update.campaigns_last_attempt_at = now();
  }

  const contactOk = (update.bigin_contact_status ?? row.bigin_contact_status) === "synced";
  const dealOk = (update.bigin_deal_status ?? row.bigin_deal_status) === "synced";
  update.crm_sync_status = contactOk && dealOk ? "synced" : contactOk ? "partial" : "failed";
  update.crm_sync_error = (update.bigin_contact_error ?? update.bigin_deal_error ?? null) as string | null;

  if (Object.keys(update).length) {
    await serviceClient.from("leads_epf_advisory").update(update).eq("id", row.id);
  }
  return update;
}

const LEAD_COLUMNS =
  "id, full_name, phone, organisation_name, email, crm_account_id, crm_record_id, bigin_contact_status, bigin_deal_status, campaigns_status";

async function createDownloadUrl(serviceClient: ReturnType<typeof createClient>) {
  const { data, error } = await serviceClient.storage
    .from(ADVISORY_BUCKET)
    .createSignedUrl(ADVISORY_PATH, 600);
  if (error || !data?.signedUrl) throw new Error("Could not create the private advisory link");
  return data.signedUrl;
}

// "Retry failed integrations": admin-only. Re-runs only the steps that are not
// yet synced for each lead (or a single lead when leadId is given).
async function handleRetry(req: Request, serviceClient: ReturnType<typeof createClient>, leadId?: string) {
  const authHeader = req.headers.get("Authorization") ?? "";
  const userClient = createClient(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_ANON_KEY"), {
    global: { headers: { Authorization: authHeader } },
    auth: { persistSession: false },
  });
  const { data: userData } = await userClient.auth.getUser();
  if (!userData?.user) return jsonResponse({ error: "Sign in required" }, 401);
  const { data: isAdmin } = await serviceClient.rpc("has_role", { _user_id: userData.user.id, _role: "admin" });
  if (!isAdmin) return jsonResponse({ error: "Admins only" }, 403);

  let query = serviceClient.from("leads_epf_advisory").select(LEAD_COLUMNS)
    .or("bigin_contact_status.neq.synced,bigin_deal_status.neq.synced,campaigns_status.neq.synced")
    .limit(50);
  if (leadId) query = query.eq("id", leadId);
  const { data: rows, error } = await query;
  if (error) return jsonResponse({ error: error.message }, 500);

  const results = [];
  for (const row of (rows ?? []) as LeadRow[]) {
    results.push({ id: row.id, ...(await runIntegrations(serviceClient, row)) });
  }
  return jsonResponse({ success: true, retried: results.length, results });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  let payload: any;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid request body" }, 400);
  }

  const serviceClient = createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } },
  );

  if (payload?.action === "retry") {
    const leadId = typeof payload.leadId === "string" ? payload.leadId : undefined;
    return handleRetry(req, serviceClient, leadId);
  }

  const parsed = LeadSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonResponse(
      { error: "Please check the highlighted fields", fields: parsed.error.flatten().fieldErrors },
      400,
    );
  }
  const lead = parsed.data;
  const now = new Date().toISOString();

  const { data: storedLead, error: storageError } = await serviceClient
    .from("leads_epf_advisory")
    .upsert({
      full_name: lead.fullName,
      phone: lead.phone,
      phone_normalized: normalizePhone(lead.phone),
      organisation_name: lead.organisationName,
      email: lead.email,
      email_normalized: lead.email.toLowerCase(),
      consent_given: true,
      consent_at: now,
      updated_at: now,
      db_status: "saved",
      crm_sync_status: "pending",
      crm_sync_error: null,
      delivery_status: "pending",
      delivery_error: null,
    }, { onConflict: "email_normalized" })
    .select(LEAD_COLUMNS)
    .single();

  if (storageError || !storedLead) {
    console.error("EPF lead storage failed", storageError?.message);
    return jsonResponse({ error: "We could not save your details. Please try again." }, 500);
  }

  // A resubmission re-runs only the steps not already synced for this email.
  try {
    await runIntegrations(serviceClient, storedLead as LeadRow);
  } catch (e) {
    console.error("EPF integrations crashed (non-fatal)", errMsg(e));
  }

  let downloadUrl: string;
  try {
    downloadUrl = await createDownloadUrl(serviceClient);
  } catch (error) {
    const message = errMsg(error);
    console.error("EPF advisory link failed", message);
    await serviceClient.from("leads_epf_advisory").update({
      delivery_status: "failed",
      delivery_last_attempt_at: new Date().toISOString(),
      delivery_error: message,
    }).eq("id", storedLead.id);
    return jsonResponse(
      { error: "Your details were saved, but the advisory could not be delivered. Please try again." },
      502,
    );
  }

  // Email is handled by the Zoho Campaigns autoresponder — no email is sent here.
  await serviceClient.from("leads_epf_advisory").update({
    delivery_status: "link_only",
    delivery_last_attempt_at: new Date().toISOString(),
    delivery_error: null,
  }).eq("id", storedLead.id);

  return jsonResponse({
    success: true,
    downloadUrl,
    downloadExpiresInSeconds: 600,
    emailed: false,
  });
});
