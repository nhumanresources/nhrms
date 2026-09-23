import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.24.2";

const LeadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^(?:(?:\+91)|0)?[6-9]\d{9}$/),
  organisationName: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(254),
});

type ZohoToken = { value: string; apiDomain: string; expiresAt: number };
let cachedZohoToken: ZohoToken | null = null;

const jsonResponse = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
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
  const [firstName, ...remaining] = fullName.trim().split(/\s+/);
  return { firstName, lastName: remaining.length > 0 ? remaining.join(" ") : firstName };
};
const safeProviderError = (status: number, body: string) =>
  `Bigin request failed (${status}): ${body.slice(0, 600)}`;

async function getZohoToken(forceRefresh = false): Promise<ZohoToken> {
  if (!forceRefresh && cachedZohoToken && cachedZohoToken.expiresAt > Date.now() + 120_000) return cachedZohoToken;

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

async function biginRequest(path: string, init: RequestInit, retryOnUnauthorized = true): Promise<unknown> {
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

const extractRecordId = (result: unknown) => {
  const data = (result as { data?: Array<{ details?: { id?: string }; id?: string }> }).data;
  return data?.[0]?.details?.id ?? data?.[0]?.id;
};

async function upsertAccount(organisationName: string) {
  const result = await biginRequest("/Accounts/upsert", {
    method: "POST",
    body: JSON.stringify({ data: [{ Account_Name: organisationName }], duplicate_check_fields: ["Account_Name"] }),
  });
  const accountId = extractRecordId(result);
  if (!accountId) throw new Error("Bigin did not return an Account record ID");
  return accountId;
}

async function syncToBigin(lead: z.infer<typeof LeadSchema>) {
  // Alternative integration point: a linked Lovable Zoho CRM connector could replace
  // this Self Client transport if its gateway is confirmed to support Bigin modules.
  const { firstName, lastName } = splitName(lead.fullName);
  const accountId = await upsertAccount(lead.organisationName);
  const timestamp = new Date().toISOString();
  const result = await biginRequest("/Contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      data: [{
        First_Name: firstName,
        Last_Name: lastName,
        Email: lead.email.toLowerCase(),
        Mobile: normalizePhone(lead.phone),
        Account_Name: { id: accountId },
        Description: `Lead source: EPF Wage Ceiling Advisory (15k to 25k) — ${timestamp}`,
      }],
      duplicate_check_fields: ["Email"],
    }),
  });
  const contactId = extractRecordId(result);
  if (!contactId) throw new Error("Bigin did not return a Contact record ID");
  await biginRequest(
    `/Contacts/${encodeURIComponent(contactId)}/actions/add_tags?tag_names=${encodeURIComponent("EPF Advisory Lead")}`,
    { method: "POST", body: JSON.stringify({}) },
  );
  return contactId;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return jsonResponse({ error: "Method not allowed" }, 405);
  let payload: unknown;
  try { payload = await req.json(); } catch { return jsonResponse({ error: "Invalid request body" }, 400); }
  const parsed = LeadSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonResponse({ error: "Please check the highlighted fields", fields: parsed.error.flatten().fieldErrors }, 400);
  }

  const lead = parsed.data;
  const serviceClient = createClient(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false },
  });
  const { data: storedLead, error: storageError } = await serviceClient.from("leads_epf_advisory").upsert({
    full_name: lead.fullName,
    phone: lead.phone,
    phone_normalized: normalizePhone(lead.phone),
    organisation_name: lead.organisationName,
    email: lead.email,
    email_normalized: lead.email.toLowerCase(),
    updated_at: new Date().toISOString(),
    crm_sync_status: "pending",
    crm_sync_error: null,
  }, { onConflict: "email_normalized" }).select("id").single();

  if (storageError || !storedLead) {
    console.error("EPF lead storage failed", storageError?.code);
    return jsonResponse({ error: "We could not save your details. Please try again." }, 500);
  }
  try {
    const contactId = await syncToBigin(lead);
    await serviceClient.from("leads_epf_advisory").update({
      crm_sync_status: "synced", crm_record_id: contactId,
      crm_last_attempt_at: new Date().toISOString(), crm_sync_error: null,
    }).eq("id", storedLead.id);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown CRM sync failure";
    console.error("EPF lead CRM sync failed", message);
    await serviceClient.from("leads_epf_advisory").update({
      crm_sync_status: "failed", crm_last_attempt_at: new Date().toISOString(), crm_sync_error: message.slice(0, 1000),
    }).eq("id", storedLead.id);
  }
  return jsonResponse({ success: true });
});