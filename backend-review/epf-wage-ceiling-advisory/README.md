# Review and activation notes

This folder is deliberately excluded from the site build. Nothing here is active yet.

After approval:

1. Apply `create_leads_epf_advisory.sql` through the Lovable Cloud migration workflow.
2. Move `submit-epf-advisory-lead.ts` to `supabase/functions/submit-epf-advisory-lead/index.ts` so the managed function can deploy.
3. Configure `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, `ZOHO_ACCOUNTS_DOMAIN`, and `ZOHO_API_DOMAIN` as backend secrets.
4. Confirm that Email is a unique field for Bigin Contacts and that the Self Client has Bigin Contacts, Accounts, and tag write access.
5. Supply the advisory PDF and select email delivery or a gated private download before enabling the form publicly.
