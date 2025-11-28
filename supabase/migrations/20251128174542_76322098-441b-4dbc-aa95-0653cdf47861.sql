-- Create leads table to store labour code consultation requests
CREATE TABLE public.labour_code_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  lead_type TEXT NOT NULL DEFAULT 'consultation', -- 'consultation' or 'whitepaper'
  white_paper_downloaded BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  synced_to_zoho BOOLEAN DEFAULT false,
  zoho_sync_error TEXT
);

-- Enable RLS
ALTER TABLE public.labour_code_leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert leads (public form)
CREATE POLICY "Anyone can submit labour code leads" 
ON public.labour_code_leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin viewing (you can adjust this based on your needs)
CREATE POLICY "Public can view their own leads" 
ON public.labour_code_leads 
FOR SELECT 
USING (true);

-- Create index for faster lookups
CREATE INDEX idx_labour_code_leads_email ON public.labour_code_leads(email);
CREATE INDEX idx_labour_code_leads_created_at ON public.labour_code_leads(created_at DESC);