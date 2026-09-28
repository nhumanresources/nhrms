ALTER TABLE public.zoho_oauth_state
  ADD COLUMN IF NOT EXISTS access_token text,
  ADD COLUMN IF NOT EXISTS access_api_domain text,
  ADD COLUMN IF NOT EXISTS access_expires_at timestamptz;