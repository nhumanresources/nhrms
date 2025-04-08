
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

// Import component sections
import HeroSection from '@/components/research-opportunities/HeroSection';
import JobOverviewSection from '@/components/research-opportunities/JobOverviewSection';
import ResponsibilitiesSection from '@/components/research-opportunities/ResponsibilitiesSection';
import QualificationsSection from '@/components/research-opportunities/QualificationsSection';
import CTASection from '@/components/research-opportunities/CTASection';

export default function ResearchOpportunities() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research Associate Job | nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our team as a Research Associate at nHRMS in Whitefield, Bangalore. Contribute to cutting-edge HR research and technology development.');
    }
    
    // Check if the URL has a success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Your application has been submitted successfully! We will get back to you soon.');
    }
  }, []);

  const handleApplyNow = () => {
    // Create a form and submit it programmatically to the FormSubmit.co service
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@nhrms.com';
    
    // Set hidden fields
    const subjectField = document.createElement('input');
    subjectField.type = 'hidden';
    subjectField.name = '_subject';
    subjectField.value = 'Research Associate Application';
    form.appendChild(subjectField);
    
    const captchaField = document.createElement('input');
    captchaField.type = 'hidden';
    captchaField.name = '_captcha';
    captchaField.value = 'false';
    form.appendChild(captchaField);
    
    const nextField = document.createElement('input');
    nextField.type = 'hidden';
    nextField.name = '_next';
    nextField.value = window.location.origin + '/research-opportunities?success=true';
    form.appendChild(nextField);
    
    const messageField = document.createElement('input');
    messageField.type = 'hidden';
    messageField.name = 'message';
    messageField.value = 'I am interested in the Research Associate position at nHRMS in Whitefield, Bangalore.';
    form.appendChild(messageField);
    
    // Hide the form and append to body
    form.style.display = 'none';
    document.body.appendChild(form);
    
    // Submit the form
    setIsSubmitting(true);
    form.submit();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <JobOverviewSection />
        <ResponsibilitiesSection />
        <QualificationsSection />
        <CTASection onApplyNow={handleApplyNow} isSubmitting={isSubmitting} />
      </main>
      <Footer />
    </div>
  );
}
