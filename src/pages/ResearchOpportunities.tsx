
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
      
      // Clean up the URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const handleApplyNow = () => {
    setIsSubmitting(true);
    
    // Create a form and submit it programmatically to the FormSubmit.co service
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/careers@nhrms.com';
    
    // Set hidden fields
    const hiddenFields = {
      '_subject': 'Research Associate Application',
      '_captcha': 'false',
      '_next': window.location.origin + '/research-opportunities?success=true',
      'message': 'I am interested in the Research Associate position at nHRMS in Whitefield, Bangalore.',
      'application_type': 'Research Associate Position'
    };
    
    // Add all fields to the form
    Object.entries(hiddenFields).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });
    
    // Hide the form and append to body
    form.style.display = 'none';
    document.body.appendChild(form);
    
    // Submit the form
    form.submit();
    
    // We don't reset isSubmitting since we're navigating away
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
