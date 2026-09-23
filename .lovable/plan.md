# EPF Wage Ceiling Advisory Lead Campaign

## Goal
Add a branded, gated campaign page at `/epf-wage-ceiling-advisory` that captures qualified leads, preserves every submission in Lovable Cloud, and attempts a deduplicated Zoho Bigin Contacts sync without risking lead loss.

## Page experience
- Build a standalone responsive page using the existing nHRMS navy, warm-orange, cream, Plus Jakarta Sans, and Inter system.
- Reuse the nHRMS wordmark treatment, “An RYT Group Firm” suffix, primary navigation style, and footer language.
- Present the supplied employer briefing eyebrow, headline, ₹15,000 → ₹25,000 figure, effective-date subhead, four impact statistics, and the complete “What’s inside” teaser.
- Keep the report gated behind a four-field form: Full Name, Phone Number, Organisation Name, and Personal Gmail Address.
- Add accessible labels, per-field inline errors, loading/disabled submission state, server-error state, and the requested success state: “You’re all set — the PDF is on its way”.
- Validate only format: name and organisation at least 2 trimmed characters, standard email syntax, and Indian mobile numbers with optional `+91` or `0` prefix and a 10-digit number beginning 6–9.
- Add page-specific title, description, canonical URL, Open Graph metadata, and Twitter card metadata.

## Durable lead storage
- Add a migration for `public.leads_epf_advisory` containing the submitted fields, normalized email/phone, submission timestamp, CRM sync status, CRM record ID, last sync attempt, and safe error details.
- Grant table access only to `service_role`, enable RLS, and expose no anonymous table access; public submissions will pass only through the validated function.
- Use an email uniqueness constraint and conflict update so repeated submissions remain deduplicated while retaining the latest submitted details.

## Submission function and Bigin sync
- Add a public `submit-epf-advisory-lead` function with CORS handling and matching server-side validation.
- Store the lead first, then attempt Bigin sync. CRM failure will never roll back or discard the stored lead; it will mark the row `failed` for later retry.
- Split Full Name on the first space; when there is no space, use the first name as the last name as requested.
- Refresh Zoho OAuth through the configured accounts domain, use the API domain returned by Zoho when available, and cache the short-lived access token in the warm function instance until shortly before expiry. Retry once after a 401; this avoids excessive refreshes and Zoho’s refresh-token rate limit.
- Use Bigin’s native Contacts upsert endpoint with `duplicate_check_fields: ["Email"]`, then persist the returned record ID. Email should be configured as unique in Bigin for reliable native deduplication.
- Resolve the organisation against Bigin Accounts, create it when missing, and pass its ID into the Contact’s `Account_Name` lookup. Bigin’s official documentation does not confirm that a plain account-name string auto-creates an Account, so this safer flow delivers the requested outcome explicitly.
- Add `EPF Advisory Lead` through Bigin’s separate tag action after upsert, and map the timestamped lead-source description.
- Add a code comment at the Bigin client boundary showing where the generic Zoho CRM connector could replace Self Client OAuth later. It will not be linked or used now because no Zoho CRM workspace connection is currently available.
- Return a successful gated response once durable storage succeeds, even if Bigin is temporarily unavailable.

## PDF delivery dependency
- No advisory PDF or transactional email connection is currently available in the project. I will build the gate and submission flow, but I will not pretend to deliver a missing file.
- Please provide the final PDF and confirm whether “on its way” means email delivery or an immediate private download after submission. The chosen delivery step can then be connected without changing the lead capture design.

## Credentials and deployment
- The required `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`, `ZOHO_ACCOUNTS_DOMAIN`, and `ZOHO_API_DOMAIN` secrets are not currently configured.
- After the code is ready, add those five values in Project Settings → Secrets. Suggested India domains are `https://accounts.zoho.in` and `https://www.zohoapis.in`; the exact values must match the Self Client’s data centre. The Self Client needs Bigin Contacts/Accounts write access and tag access; native email search is not required when using upsert.
- Do not publish the site, run the database migration, or deploy the function in this task. Everything will remain staged for review.

## Verification
- Run the project’s existing build and confirm the new route is included in `dist`.
- Test desktop and mobile layouts, all client validation cases, keyboard focus, and success/error transitions with a mocked function response.
- Review the migration and function statically for grants, RLS, CORS, server validation, durable-write-before-sync ordering, and redaction of credentials/errors.
