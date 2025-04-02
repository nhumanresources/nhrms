
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import MetricsSection from '@/components/sections/MetricsSection';
import HRNewsSlider from '@/components/sections/HRNewsSlider';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import OrganizationStructureSection from '@/components/sections/OrganizationStructureSection';
import { PerformanceMetric } from '@/types/metrics';

// Define the metrics with the correct type
const metrics: PerformanceMetric[] = [
  { value: '95%', label: 'Client Retention Rate' },
  { value: '500+', label: 'Executive Placements' },
  { value: '7+', label: 'Countries Served' },
  { value: '20+', label: 'Years of Excellence' }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title and meta description for SEO
    document.title = "nHRMS | Strategic HR Consulting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'nHRMS provides comprehensive HR consulting services including executive search, HR advisory, talent acquisition, and HR technology solutions for modern organizations seeking excellence.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MetricsSection metrics={metrics} />
        <ServicesSection />
        <OrganizationStructureSection />
        <WhyChooseUsSection />
        <HRNewsSlider />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
