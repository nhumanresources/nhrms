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
