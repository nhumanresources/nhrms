# Roadmap

- [x] Build the branded EPF Wage Ceiling Advisory landing page and gated form.
- [x] Stage the durable lead table migration for review without applying it.
- [x] Stage the validated Bigin sync function for review without deploying it.
- [x] Add the final advisory PDF and stage both email attachment delivery and a 10-minute private download.
- [x] Apply the leads_epf_advisory migration and deploy the submit-epf-advisory-lead function.
- [x] Update form: Official Email Address field, research & collaboration consent checkbox, terms section.
- [x] Add Bigin Collaboration pipeline deal + assignee routing to the sync function.
- [ ] Save Zoho Self Client secrets (ZOHO_CLIENT_ID/SECRET/REFRESH_TOKEN/ACCOUNTS_DOMAIN/API_DOMAIN) — user provided values.
- [ ] Re-test form end to end with Bigin sync; verify contact, tags and pipeline deal land in Bigin.
- [ ] Zoho Campaigns half: user provided ZOHO_CAMPAIGNS_API_DOMAIN + list key ("EPF Advisory Leads", ID 377232000000127001) — save secrets, add Campaigns sync to edge function, redeploy, test.
- [ ] Save all 7 updated Zoho secrets via secure form (user must submit the form).
- [x] Fix Bigin sync: tags created first via /settings/tags, add_tags non-fatal for Contacts + Pipelines, missing-secrets pre-check with clear logging. Deployed and verified (contact sync OK).
- [x] Email delivery moved to Zoho Campaigns autoresponder (Resend removed).
- [x] Hardening: Campaigns listsubscribe (non-fatal), Resend removed, per-step status columns, admin "retry" action re-runs only failed steps, long-lived PDF at /files/dde613fcb92ccc2520fa40c3659da951/ (live; published Sep 28).
- [ ] Add ZOHO_CAMPAIGNS_API_DOMAIN + ZOHO_CAMPAIGNS_LIST_KEY secrets (user).
- [ ] Regenerate Zoho refresh token with Bigin pipelines + Campaigns contact scopes (user).
- [x] Saved ZOHO_CAMPAIGNS_API_DOMAIN + ZOHO_CAMPAIGNS_LIST_KEY; Campaigns listsubscribe now working for both leads.
- [x] One-time grant exchange: ZOHO_GRANT_CODE -> refresh token stored server-side (zoho_oauth_state), used in place of the old secret.
- [ ] BLOCKER: current grant scope lacks ZohoBigin.modules.ALL — Bigin contact/deal sync fails with 401. User must regenerate the Self Client grant code with ZohoBigin.modules.ALL + ZohoCampaigns.contact.ALL (or CREATE/UPDATE/READ) and share it.

- [x] Banner scroll lines: make all gradient lines solid orange (user, Sep 28)

## Website audit (Sep 28, 2026)
- [x] P1: Reconcile statistics — canonical 1,000+ Leaders Placed Globally, 423 Clients Across 14 Countries, 16+ Years, 423+ Enterprise Engagements.
- [x] P1: Remove stale 2025 internship dates (June 2025 -> June 8, 2026; "Applications opening: Sept 2025" -> rolling 2026 intake).
- [x] P1: Navigation audit — all internal routes resolve; added footer "Free Tools & Resources" group linking compliance audit, readiness check, compliance calendar, EPF advisory, Maharashtra wages.
- [x] P1: Legal review — privacy/terms/cookies dated 28 Sep 2026, DPDP Act 2023 referenced, consent withdrawal route added.
- [x] P1: Removed unverifiable "Zero penalties" compliance claim.
- [x] P2: Academy integrated into lead gen — free compliance audit CTAs on /academy and /academy/resources.
- [x] P2: Readiness assessment now funnels into the Free HR Compliance Audit booking instead of a raw mailto.
- [ ] P2: Case studies need real, verifiable proof points (client size, sector, timeline, savings) and named testimonials — BLOCKED: awaiting real data from user.
- [ ] P2: Dedicated industry landing pages (manufacturing, logistics, retail, hospitality, healthcare) — not started, larger build.
- [ ] P3: Blog/research relaunch (2026 calendar), nurture journeys, quarterly governance — not started.
