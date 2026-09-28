ALTER TABLE public.leads_epf_advisory
  ADD COLUMN IF NOT EXISTS db_status text NOT NULL DEFAULT 'saved',
  ADD COLUMN IF NOT EXISTS crm_account_id text,
  ADD COLUMN IF NOT EXISTS bigin_contact_status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS bigin_contact_error text,
  ADD COLUMN IF NOT EXISTS bigin_deal_status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS bigin_deal_error text,
  ADD COLUMN IF NOT EXISTS campaigns_status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS campaigns_error text,
  ADD COLUMN IF NOT EXISTS campaigns_last_attempt_at timestamptz;