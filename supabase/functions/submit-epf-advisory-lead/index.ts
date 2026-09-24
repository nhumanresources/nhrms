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

async function syncToBigin(lead: Lead) {
  const { firstName, lastName } = splitName(lead.fullName);
  const timestamp = new Date().toISOString();
  const accountId = await upsertAccount(lead.organisationName);
  const ownerId = await findOwnerId(BIGIN_OWNER_EMAIL);

  const contactPayload: Record<string, unknown> = {
    First_Name: firstName,
    Last_Name: lastName,
    Email: lead.email.toLowerCase(),
    Mobile: normalizePhone(lead.phone),
    Account_Name: { id: accountId },
    Description:
      `Lead source: EPF Wage Ceiling Advisory (15k to 25k) — ${timestamp}. ` +
      `Consent given for research and collaboration use.`,
  };
  if (ownerId) contactPayload.Owner = { id: ownerId };

  const contactResult = await biginRequest("/Contacts/upsert", {
    method: "POST",
    body: JSON.stringify({ data: [contactPayload], duplicate_check_fields: ["Email"] }),
  });
  const contactId = extractRecordId(contactResult);
  if (!contactId) throw new Error("Bigin did not return a Contact record ID");

  await biginRequest(
    `/Contacts/${encodeURIComponent(contactId)}/actions/add_tags`,
    {
      method: "POST",
      body: JSON.stringify({ tags: LEAD_TAGS.map((name) => ({ name })) }),
    },
  );

  let dealId: string | undefined;
  try {
    const { pipeline, stage } = await findPipelineStage();
    const dealPayload: Record<string, unknown> = {
      Deal_Name: `${lead.organisationName} — EPF Advisory`,
      Account_Name: { id: accountId },
      Contact_Name: { id: contactId },
      Description: `EPF Wage Ceiling Advisory lead (${timestamp}). Research & collaboration consent given.`,
    };
    if (pipeline) dealPayload.Pipeline = pipeline;
    if (stage) dealPayload.Stage = stage;
    if (ownerId) dealPayload.Owner = { id: ownerId };
    const dealResult = await biginRequest("/Pipelines", {
      method: "POST",
      body: JSON.stringify({ data: [dealPayload] }),
    });
    dealId = extractRecordId(dealResult);
  } catch (error) {
    console.error("Bigin pipeline deal creation failed", error instanceof Error ? error.message : error);
  }

  return { contactId, dealId };
}

const bytesToBase64 = (bytes: Uint8Array) => {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
};

async function createDownloadUrl(serviceClient: ReturnType<typeof createClient>) {
  const { data, error } = await serviceClient.storage
    .from(ADVISORY_BUCKET)
    .createSignedUrl(ADVISORY_PATH, 600);
  if (error || !data?.signedUrl) throw new Error("Could not create the private advisory link");
  return data.signedUrl;
}

async function emailAdvisory(
  serviceClient: ReturnType<typeof createClient>,
  lead: Lead,
  downloadUrl: string,
) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  const fromEmail = Deno.env.get("EPF_ADVISORY_FROM_EMAIL");
  if (!apiKey || !fromEmail) return "skipped";

  const { data: pdf, error } = await serviceClient.storage.from(ADVISORY_BUCKET).download(ADVISORY_PATH);
  if (error || !pdf) throw new Error("Could not load the advisory for email delivery");
  const pdfBytes = new Uint8Array(await pdf.arrayBuffer());
  const safeName = lead.fullName.replace(/[<>&"']/g, "");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: fromEmail,
      to: [lead.email.toLowerCase()],
      reply_to: "krishna@nhrms.com",
      subject: "Your EPF Wage Ceiling Revision employer briefing",
      html:
        `<p>Hello ${safeName},</p>` +
        `<p>Thank you for requesting the nHRMS employer briefing on the EPF wage ceiling revision.</p>` +
        `<p>Your PDF is attached. You can also <a href="${downloadUrl}">download it securely for the next 10 minutes</a>.</p>` +
        `<p>Regards,<br>nHRMS · An RYT Group Firm</p>`,
      attachments: [{
        filename: "EPF_Wage_Ceiling_15k_to_25k_nHRMS_RYT.pdf",
        content: bytesToBase64(pdfBytes),
      }],
    }),
  });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Advisory email failed (${response.status}): ${body.slice(0, 400)}`);
  }
  return "sent";
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid request body" }, 400);
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

  const serviceClient = createClient(
    requireEnv("SUPABASE_URL"),
    requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } },
  );

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
      crm_sync_status: "pending",
      crm_sync_error: null,
      delivery_status: "pending",
      delivery_error: null,
    }, { onConflict: "email_normalized" })
    .select("id")
    .single();

  if (storageError || !storedLead) {
    console.error("EPF lead storage failed", storageError?.message);
    return jsonResponse({ error: "We could not save your details. Please try again." }, 500);
  }

  try {
    const { contactId, dealId } = await syncToBigin(lead);
    await serviceClient.from("leads_epf_advisory").update({
      crm_sync_status: "synced",
      crm_record_id: contactId,
      crm_deal_id: dealId ?? null,
      crm_last_attempt_at: new Date().toISOString(),
      crm_sync_error: null,
    }).eq("id", storedLead.id);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown CRM sync failure";
    console.error("EPF lead CRM sync failed", message);
    await serviceClient.from("leads_epf_advisory").update({
      crm_sync_status: "failed",
      crm_last_attempt_at: new Date().toISOString(),
      crm_sync_error: message.slice(0, 1000),
    }).eq("id", storedLead.id);
  }

  let downloadUrl: string;
  try {
    downloadUrl = await createDownloadUrl(serviceClient);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown delivery failure";
    console.error("EPF advisory link failed", message);
    await serviceClient.from("leads_epf_advisory").update({
      delivery_status: "failed",
      delivery_last_attempt_at: new Date().toISOString(),
      delivery_error: message.slice(0, 1000),
    }).eq("id", storedLead.id);
    return jsonResponse(
      { error: "Your details were saved, but the advisory could not be delivered. Please try again." },
      502,
    );
  }

  let deliveryStatus = "link_only";
  let deliveryError: string | null = null;
  try {
    const result = await emailAdvisory(serviceClient, lead, downloadUrl);
    deliveryStatus = result === "sent" ? "sent" : "link_only";
  } catch (error) {
    deliveryError = error instanceof Error ? error.message : "Unknown email failure";
    console.error("EPF advisory email failed", deliveryError);
    deliveryStatus = "email_failed";
  }

  await serviceClient.from("leads_epf_advisory").update({
    delivery_status: deliveryStatus,
    delivery_last_attempt_at: new Date().toISOString(),
    delivery_error: deliveryError?.slice(0, 1000) ?? null,
  }).eq("id", storedLead.id);

  return jsonResponse({
    success: true,
    downloadUrl,
    downloadExpiresInSeconds: 600,
    emailed: deliveryStatus === "sent",
  });
});
