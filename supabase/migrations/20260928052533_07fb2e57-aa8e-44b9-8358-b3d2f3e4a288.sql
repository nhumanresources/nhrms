CREATE TABLE public.ops_keys (
  name text PRIMARY KEY,
  key_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.ops_keys TO service_role;
ALTER TABLE public.ops_keys ENABLE ROW LEVEL SECURITY;