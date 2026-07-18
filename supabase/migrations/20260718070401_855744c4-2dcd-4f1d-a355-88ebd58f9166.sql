
DROP POLICY IF EXISTS "Academy resumes are publicly readable" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload academy resumes" ON storage.objects;

DROP POLICY IF EXISTS "Anyone can submit academy applications" ON public.academy_applications;
CREATE POLICY "Anyone can submit academy applications"
  ON public.academy_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    first_name IS NOT NULL AND length(btrim(first_name)) BETWEEN 1 AND 100
    AND last_name IS NOT NULL AND length(btrim(last_name)) BETWEEN 1 AND 100
    AND email IS NOT NULL AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 254
  );

DROP POLICY IF EXISTS "Anyone can submit job applications" ON public.job_applications;
CREATE POLICY "Anyone can submit job applications"
  ON public.job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND length(btrim(name)) BETWEEN 2 AND 200
    AND email IS NOT NULL AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 254
    AND job_id IS NOT NULL
  );

DROP POLICY IF EXISTS "Anyone can submit labour code leads" ON public.labour_code_leads;
CREATE POLICY "Anyone can submit labour code leads"
  ON public.labour_code_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL AND length(btrim(name)) BETWEEN 2 AND 200
    AND email IS NOT NULL AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND length(email) <= 254
  );

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO service_role;
