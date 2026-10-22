CREATE TABLE public.connect_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  mobile text NOT NULL,
  company text NOT NULL,
  designation text,
  company_size text,
  service text NOT NULL,
  message text,
  consent boolean NOT NULL DEFAULT false,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  referrer text,
  ip_address text,
  created_at timestamptz NOT NULL DEFAULT now(),
  bigin_contact_id text,
  bigin_deal_id text,
  bigin_sync_error text
);
GRANT SELECT, UPDATE, DELETE ON public.connect_leads TO authenticated;
GRANT ALL ON public.connect_leads TO service_role;
ALTER TABLE public.connect_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins can view connect leads" ON public.connect_leads FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update connect leads" ON public.connect_leads FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete connect leads" ON public.connect_leads FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE INDEX connect_leads_ip_created_idx ON public.connect_leads (ip_address, created_at);