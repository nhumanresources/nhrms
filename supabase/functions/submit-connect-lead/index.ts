import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.24.2";

declare const EdgeRuntime: { waitUntil(p: Promise<unknown>): void };

const SERVICES: Record<string, { label: string; tag: string }> = {
  chro: { label: "Fractional CHRO", tag: "Fractional CHRO" },
  hrtech: { label: "HR Tech & HRMS Implementation", tag: "HR Tech" },
  "labour-codes": { label: "Labour Codes Advisory", tag: "Labour Codes" },
  "executive-search": { label: "Global Executive Search", tag: "Executive Search" },
  compliance: { label: "Statutory & POSH Compliance", tag: "Compliance" },
  "not-sure": { label: "Not sure yet", tag: "Not sure" },
};
const SIZES = ["1–50", "51–200", "201–500", "501–1000", "1000+"];

// Strip HTML/control characters (sanitising, same approach as other lead functions).
const clean = (v: string) => v.replace(/<[^>]*>/g, "").replace(/[\u0000-\u001F\u007F]/g, " ").trim();
const opt = (max: number) => z.string().max(max).optional().nullable().transform((v) => (v ? clean(v) || null : null));

const Schema = z.object({
  fullName: z.string().trim().min(2).max(120).transform(clean),
  email: z.string().trim().email().max(254).transform((v) => v.toLowerCase()),
  mobile: z.string().trim().regex(/^\+\d{1,4}[\s-]?\d[\d\s-]{5,15}$/, "Include country code, e.g. +91 98765 43210"),
  company: z.string().trim().min(2).max(160).transform(clean),
  designation: opt(120),
  companySize: z.enum(SIZES as [string, ...string[]]).optional().nullable(),
  service: z.enum(Object.keys(SERVICES) as [string, ...string[]]),
  message: opt(2000),
  consent: z.literal(true),
  utm_source: opt(200), utm_medium: opt(200), utm_campaign: opt(200), utm_content: opt(200),
  referrer: opt(500),
});

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

const ACCOUNTS = "https://accounts.zoho.in";
const API = "https://www.zohoapis.in/bigin/v2";
let token: { value: string; exp: number } | null = null;

async function getToken(force = false) {
  if (!force && token && token.exp > Date.now() + 60_000) return token.value;
  const id = Deno.env.get("ZOHO_BIGIN_CLIENT_ID"), secret = Deno.env.get("ZOHO_BIGIN_CLIENT_SECRET"), rt = Deno.env.get("ZOHO_BIGIN_REFRESH_TOKEN");
  const missing = [!id && "ZOHO_BIGIN_CLIENT_ID", !secret && "ZOHO_BIGIN_CLIENT_SECRET", !rt && "ZOHO_BIGIN_REFRESH_TOKEN"].filter(Boolean);
  if (missing.length) throw new Error(`Missing secrets: ${missing.join(", ")}`);
  const q = new URLSearchParams({ refresh_token: rt!, client_id: id!, client_secret: secret!, grant_type: "refresh_token" });
  const r = await fetch(`${ACCOUNTS}/oauth/v2/token?${q}`, { method: "POST" });
  const b = await r.json().catch(() => ({}));
  if (!r.ok || !b.access_token) throw new Error(`Zoho token error (${r.status}): ${b.error ?? "no access_token"}`);
  token = { value: b.access_token, exp: Date.now() + (b.expires_in ?? 3600) * 1000 };
  return token.value;
}

async function bigin(path: string, body: unknown, retry = true): Promise<any> {
  const r = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { Authorization: `Zoho-oauthtoken ${await getToken(!retry)}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (r.status === 401 && retry) { token = null; return bigin(path, body, false); }
  const text = await r.text();
  if (!r.ok) throw new Error(`Bigin ${path} (${r.status}): ${text.slice(0, 500)}`);
  const parsed = text ? JSON.parse(text) : {};
  const row = parsed?.data?.[0];
  if (row && row.status === "error") throw new Error(`Bigin ${path}: ${JSON.stringify(row).slice(0, 500)}`);
  return parsed;
}
const recId = (r: any) => r?.data?.[0]?.details?.id as string | undefined;

async function syncToBigin(sb: ReturnType<typeof createClient>, rowId: string, l: z.infer<typeof Schema>) {
  try {
    const svc = SERVICES[l.service];
    const [first, ...rest] = l.fullName.split(/\s+/);
    const lastName = rest.length ? rest.join(" ") : first;
    const description = [
      `Service: ${svc.label}`, `Company size: ${l.companySize ?? "-"}`, `Message: ${l.message ?? "-"}`,
      `utm_source: ${l.utm_source ?? "-"}`, `utm_medium: ${l.utm_medium ?? "-"}`,
      `utm_campaign: ${l.utm_campaign ?? "-"}`, `utm_content: ${l.utm_content ?? "-"}`, `Referrer: ${l.referrer ?? "-"}`,
      `Submitted via nhrms.com/connect at ${new Date().toISOString()}`,
    ].join("\n");

    const accountId = recId(await bigin("/Accounts/upsert", { data: [{ Account_Name: l.company }], duplicate_check_fields: ["Account_Name"] }));
    if (!accountId) throw new Error("No Account id returned");
    const contactId = recId(await bigin("/Contacts/upsert", {
      data: [{ First_Name: rest.length ? first : undefined, Last_Name: lastName, Email: l.email, Mobile: l.mobile,
        Title: l.designation ?? undefined, Account_Name: { id: accountId }, Description: description }],
      duplicate_check_fields: ["Email"],
    }));
    if (!contactId) throw new Error("No Contact id returned");
    await sb.from("connect_leads").update({ bigin_contact_id: contactId }).eq("id", rowId);

    const dealId = recId(await bigin("/Pipelines", { data: [{
      Deal_Name: `${svc.label} – ${l.company} (LinkedIn)`, Layout: { id: "1412819000000000173" },
      Sub_Pipeline: "Sales Pipeline Standard", Stage: "Qualification",
      Contact_Name: { id: contactId }, Account_Name: { id: accountId }, Description: description,
    }] }));

    let tagError: string | null = null;
    try {
      const sourceTag = (l.utm_source ?? "linkedin").toLowerCase() === "linkedin" ? "LinkedIn Banner" : "Website";
      await bigin("/Contacts/actions/add_tags", { ids: [contactId], tags: [{ name: sourceTag }, { name: svc.tag }] });
    } catch (e) { tagError = `Tagging failed: ${(e as Error).message}`; console.warn(tagError); }

    await sb.from("connect_leads").update({ bigin_contact_id: contactId, bigin_deal_id: dealId ?? null, bigin_sync_error: tagError }).eq("id", rowId);
    console.log("Connect lead synced", rowId, contactId, dealId);
  } catch (e) {
    const msg = (e as Error).message.slice(0, 1000);
    console.error("Connect lead Bigin sync failed", msg);
    await sb.from("connect_leads").update({ bigin_sync_error: msg }).eq("id", rowId);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);
  let payload: unknown;
  try { payload = await req.json(); } catch { return json({ error: "Invalid request body" }, 400); }
  const parsed = Schema.safeParse(payload);
  if (!parsed.success) return json({ error: "Please check the highlighted fields", fields: parsed.error.flatten().fieldErrors }, 400);
  const l = parsed.data;
  if (!l.utm_source) l.utm_source = "linkedin";

  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "unknown";

  // IP rate limit: max 5 submissions per IP per hour.
  const since = new Date(Date.now() - 3600_000).toISOString();
  const { count } = await sb.from("connect_leads").select("id", { count: "exact", head: true }).eq("ip_address", ip).gte("created_at", since);
  if ((count ?? 0) >= 5) return json({ error: "Too many submissions. Please try again later." }, 429);

  const { data: row, error } = await sb.from("connect_leads").insert({
    full_name: l.fullName, email: l.email, mobile: l.mobile, company: l.company, designation: l.designation,
    company_size: l.companySize ?? null, service: SERVICES[l.service].label, message: l.message, consent: true,
    utm_source: l.utm_source, utm_medium: l.utm_medium, utm_campaign: l.utm_campaign, utm_content: l.utm_content,
    referrer: l.referrer, ip_address: ip,
  }).select("id").single();
  if (error || !row) { console.error("Connect lead insert failed", error?.code); return json({ error: "We couldn't save your details. Please try again." }, 500); }

  EdgeRuntime.waitUntil(syncToBigin(sb, row.id, l));
  return json({ success: true });
});
