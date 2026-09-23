CREATE TABLE public.leads_epf_advisory (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  phone_normalized text NOT NULL,
  organisation_name text NOT NULL,
  email text NOT NULL,
  email_normalized text NOT NULL UNIQUE,
  submitted_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  crm_sync_status text NOT NULL DEFAULT 'pending',
  crm_record_id text,
  crm_last_attempt_at timestamp with time zone,
  crm_sync_error text
);

GRANT ALL ON public.leads_epf_advisory TO service_role;

ALTER TABLE public.leads_epf_advisory ENABLE ROW LEVEL SECURITY;
