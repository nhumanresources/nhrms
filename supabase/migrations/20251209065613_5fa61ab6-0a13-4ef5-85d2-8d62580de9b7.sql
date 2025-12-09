-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Public can view their own leads" ON public.labour_code_leads;

-- Add admin-only SELECT policy
CREATE POLICY "Admins can view labour code leads"
ON public.labour_code_leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add admin UPDATE policy
CREATE POLICY "Admins can update labour code leads"
ON public.labour_code_leads
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add admin DELETE policy
CREATE POLICY "Admins can delete labour code leads"
ON public.labour_code_leads
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));