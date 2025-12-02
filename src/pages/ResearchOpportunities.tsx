
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
import ApplicationModal from '@/components/research-opportunities/ApplicationModal';

export default function ResearchOpportunities() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  
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
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <JobOverviewSection />
        <ResponsibilitiesSection />
        <QualificationsSection />
        <CTASection onApplyNow={handleApplyNow} />
      </main>
      <Footer />
      
      <ApplicationModal 
        isOpen={isApplicationModalOpen} 
        onClose={() => setIsApplicationModalOpen(false)} 
      />
    </div>
  );
}
