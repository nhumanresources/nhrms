import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HeroSection from '@/components/labour-codes/HeroSection';
import ComplianceGapsSection from '@/components/labour-codes/ComplianceGapsSection';
import FourCodesSection from '@/components/labour-codes/FourCodesSection';
import EnforcementSection from '@/components/labour-codes/EnforcementSection';
import WhyNHRMSSection from '@/components/labour-codes/WhyNHRMSSection';
import WhitePaperSection from '@/components/labour-codes/WhitePaperSection';
import ConsultationCTASection from '@/components/labour-codes/ConsultationCTASection';

export default function LabourCodes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="India's New Labour Codes - Complete Compliance Guide | nHRMS"
        description="Is your organization ready for India's new labour codes? 29 laws consolidated into 4 codes. Get expert guidance from nHRMS, your go-to partner for labour law compliance."
        keywords="India labour codes, labour law compliance, new labour codes 2024, wage code, industrial relations code, social security code, OSH code, labour law consultant, nHRMS"
        canonicalUrl="https://nhrms.com/labour-codes"
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <ComplianceGapsSection />
        <FourCodesSection />
        <EnforcementSection />
        <WhyNHRMSSection />
        <WhitePaperSection />
        <ConsultationCTASection />
      </main>
      <Footer />
    </div>
  );
}