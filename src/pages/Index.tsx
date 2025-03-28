
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import KnowledgeSection from '@/components/KnowledgeSection';
import TrendsResearchSlider from '@/components/TrendsResearchSlider';
import Footer from '@/components/Footer';
import MetricsSection from '@/components/sections/MetricsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import CTASection from '@/components/sections/CTASection';
import HRNewsSlider from '@/components/sections/HRNewsSlider';

// Performance metrics focused on AI + Human + EQ integration
const performanceMetrics = [
  { label: "Setting up Assessment Centers and their Accuracy", value: 95 },
  { label: "Human Connection Score", value: 98 },
  { label: "EQ Integration Index", value: 94 },
  { label: "HR Transformation Success in SME", value: 96 }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="-mt-32 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/80 pointer-events-none" />
          <HRNewsSlider />
        </div>
        <div className="relative z-20">
          <MetricsSection metrics={performanceMetrics} />
          <ServicesSection />
          <div className="relative overflow-hidden bg-pattern">
            <TrendsResearchSlider />
          </div>
          <WhyChooseUsSection />
          <KnowledgeSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
