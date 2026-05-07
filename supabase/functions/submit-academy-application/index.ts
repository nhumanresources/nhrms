import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const TO_EMAIL = "krishna@nhrms.com";
const CC_EMAIL = "sambradhi.hegde@nhrms.in";

function escapeHtml(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(app: Record<string, any>): string {
  const rows = [
    ["Cohort", app.cohort],
    ["Name", `${app.first_name} ${app.last_name}`],
    ["Email", app.email],
    ["Phone", app.phone],
    ["City", app.city],
    ["LinkedIn", app.linkedin],
    ["Degree", app.degree],
    ["Year of Passing", app.pass_year],
    ["Experience", app.experience],
    ["Current Role", app.current_job_role],
    ["Employer", app.employer],
    ["Industry", app.industry],
    ["HR Functions", (app.hr_functions || []).join(", ")],
    ["HRMS Tools", (app.hrms_tools || []).join(", ")],
    ["Excel Skill", app.excel_skill],
    ["Stats Knowledge", app.stat_knowledge],
    ["Why this programme", app.why_programme],
    ["Strength", app.strength],
    ["Bangalore Confirmation", app.location_confirm],
    ["Notice Period", app.notice],
    ["Referral", app.referral],
    ["Referrer Name", app.ref_name],
    ["Resume", app.resume_url ? `<a href="${escapeHtml(app.resume_url)}">Download</a>` : "Not uploaded"],
  ]
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:200px">${escapeHtml(
          k
        )}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${
          k === "Resume" ? v : escapeHtml(v)
        }</td></tr>`
    )
    .join("");

  return `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;color:#111">
    <h2 style="color:#ea580c">New nHRMS Academy Application — ${escapeHtml(app.cohort)}</h2>
    <p>Submitted on ${escapeHtml(new Date(app.created_at).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))} IST</p>
    <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>
    <p style="margin-top:16px;color:#6b7280;font-size:12px">Application ID: ${escapeHtml(app.id)}</p>
  </body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const formData = await req.formData();
    const get = (k: string) => (formData.get(k)?.toString() || "").trim() || null;
    const getAll = (k: string) =>
      formData.getAll(k).map((v) => v.toString()).filter(Boolean);

    // Basic validation
    const required = ["fname", "lname", "email", "phone", "city"];
    for (const f of required) {
      if (!get(f)) {
        return new Response(JSON.stringify({ error: `${f} is required` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      null;
    const ua = req.headers.get("user-agent") || null;

    // Resume upload
    let resume_url: string | null = null;
    const resumeFile = formData.get("resume") as File | null;
    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > 5 * 1024 * 1024) {
        return new Response(JSON.stringify({ error: "Resume must be under 5MB" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const ext = resumeFile.name.split(".").pop()?.toLowerCase() || "pdf";
      const safeName = `${get("fname")}-${get("lname")}`.replace(/[^a-zA-Z0-9]+/g, "-");
      const path = `summer-2026/${Date.now()}-${safeName}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("academy-resumes")
        .upload(path, resumeFile, {
          contentType: resumeFile.type || "application/octet-stream",
          upsert: false,
        });
      if (!upErr) {
        const { data: pub } = supabase.storage.from("academy-resumes").getPublicUrl(path);
        resume_url = pub.publicUrl;
      } else {
        console.error("Resume upload failed:", upErr);
      }
    }

    const payload = {
      cohort: "Summer 2026",
      first_name: get("fname"),
      last_name: get("lname"),
      email: get("email"),
      phone: get("phone"),
      city: get("city"),
      linkedin: get("linkedin"),
      degree: get("degree"),
      pass_year: get("passyear"),
      experience: get("exp"),
      current_job_role: get("current_role"),
      employer: get("employer"),
      industry: get("industry"),
      hr_functions: getAll("hrfn"),
      hrms_tools: getAll("hrms"),
      excel_skill: get("excel_skill"),
      stat_knowledge: get("stat_knowledge"),
      why_programme: get("why"),
      strength: get("strength"),
      location_confirm: get("location_confirm"),
      notice: get("notice"),
      referral: get("referral"),
      ref_name: get("ref_name"),
      resume_url,
      consent: !!get("consent"),
      ip_address: ip,
      user_agent: ua,
    };

    const { data: inserted, error: insErr } = await supabase
      .from("academy_applications")
      .insert(payload)
      .select()
      .single();

    if (insErr) {
      console.error("Insert failed:", insErr);
      return new Response(JSON.stringify({ error: "Failed to save application" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Mirror to FormSubmit (existing email pipeline)
    let emailSent = false;
    let emailError: string | null = null;
    try {
      const fs = new FormData();
      fs.append("_subject", `nHRMS Academy Summer 2026 Application — ${payload.first_name} ${payload.last_name}`);
      fs.append("_cc", CC_EMAIL);
      fs.append("_captcha", "false");
      fs.append("_template", "table");
      fs.append("_replyto", payload.email || "");
      // Flat fields
      for (const [k, v] of Object.entries(payload)) {
        if (Array.isArray(v)) fs.append(k, v.join(", "));
        else if (v !== null && v !== undefined) fs.append(k, String(v));
      }
      if (resume_url) fs.append("Resume URL", resume_url);
      fs.append("Application ID", inserted.id);

      const r = await fetch(`https://formsubmit.co/ajax/${TO_EMAIL}`, {
        method: "POST",
        body: fs,
      });
      emailSent = r.ok;
      if (!r.ok) emailError = `FormSubmit ${r.status}`;
    } catch (e) {
      emailError = (e as Error).message;
    }

    await supabase
      .from("academy_applications")
      .update({ email_sent: emailSent, email_error: emailError })
      .eq("id", inserted.id);

    return new Response(
      JSON.stringify({ success: true, id: inserted.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Unexpected error:", e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
