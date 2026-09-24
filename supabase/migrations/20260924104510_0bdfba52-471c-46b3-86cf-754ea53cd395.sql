CREATE TABLE public.leads_epf_advisory (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name text NOT NULL,
  phone text NOT NULL,
  phone_normalized text NOT NULL,
  organisation_name text NOT NULL,
  email text NOT NULL,
  email_normalized text NOT NULL UNIQUE,
  consent_given boolean NOT NULL DEFAULT false,
  consent_at timestamp with time zone,
  crm_sync_status text NOT NULL DEFAULT 'pending',
  crm_record_id text,
  crm_deal_id text,
  crm_last_attempt_at timestamp with time zone,
  crm_sync_error text,
  delivery_status text NOT NULL DEFAULT 'pending',
  delivery_last_attempt_at timestamp with time zone,
  delivery_error text,
  submitted_at timestamp with time zone NOT NULL DEFAULT now(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT, UPDATE, DELETE ON public.leads_epf_advisory TO authenticated;
GRANT ALL ON public.leads_epf_advisory TO service_role;

ALTER TABLE public.leads_epf_advisory ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view EPF advisory leads"
ON public.leads_epf_advisory FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update EPF advisory leads"
ON public.leads_epf_advisory FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete EPF advisory leads"
ON public.leads_epf_advisory FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE OR REPLACE FUNCTION public.update_leads_epf_advisory_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_leads_epf_advisory_updated_at
BEFORE UPDATE ON public.leads_epf_advisory
FOR EACH ROW EXECUTE FUNCTION public.update_leads_epf_advisory_updated_at();