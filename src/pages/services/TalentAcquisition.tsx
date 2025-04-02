
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services/talent-acquisition/HeroSection';
import ApproachSection from '@/components/services/talent-acquisition/ApproachSection';
import SpecializationSection from '@/components/services/talent-acquisition/SpecializationSection';
import BenefitsSection from '@/components/services/talent-acquisition/BenefitsSection';
import CTASection from '@/components/services/talent-acquisition/CTASection';

export default function TalentAcquisition() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Talent Acquisition - Build Teams | nHRMS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Key Features */}
      <ApproachSection />

      {/* Industries We Serve */}
      <SpecializationSection />
      
      {/* Benefits */}
      <BenefitsSection />
      
      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}
