
CREATE TABLE public.academy_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  cohort TEXT NOT NULL DEFAULT 'Summer 2026',
  status TEXT NOT NULL DEFAULT 'new',
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  linkedin TEXT,
  degree TEXT,
  pass_year TEXT,
  experience TEXT,
  current_job_role TEXT,
  employer TEXT,
  industry TEXT,
  hr_functions TEXT[] DEFAULT '{}',
  hrms_tools TEXT[] DEFAULT '{}',
  excel_skill TEXT,
  stat_knowledge TEXT,
  why_programme TEXT,
  strength TEXT,
  location_confirm TEXT,
  notice TEXT,
  referral TEXT,
  ref_name TEXT,
  resume_url TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  ip_address TEXT,
  user_agent TEXT,
  email_sent BOOLEAN DEFAULT false,
  email_error TEXT
);

ALTER TABLE public.academy_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit academy applications"
  ON public.academy_applications FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admins can view academy applications"
  ON public.academy_applications FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update academy applications"
  ON public.academy_applications FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete academy applications"
  ON public.academy_applications FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX idx_academy_applications_created_at ON public.academy_applications(created_at DESC);

INSERT INTO storage.buckets (id, name, public)
VALUES ('academy-resumes', 'academy-resumes', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload academy resumes"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'academy-resumes');

CREATE POLICY "Academy resumes are publicly readable"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'academy-resumes');
