CREATE TABLE public.zoho_oauth_state (
  id text PRIMARY KEY DEFAULT 'default',
  refresh_token text NOT NULL,
  grant_code_hash text NOT NULL,
  scope text,
  api_domain text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.zoho_oauth_state TO service_role;
ALTER TABLE public.zoho_oauth_state ENABLE ROW LEVEL SECURITY;