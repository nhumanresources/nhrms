-- Add admin-only policies for managing job postings
CREATE POLICY "Admins can insert jobs" 
ON public.jobs 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update jobs" 
ON public.jobs 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete jobs" 
ON public.jobs 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));