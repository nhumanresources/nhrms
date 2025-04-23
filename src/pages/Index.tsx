
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import MetricsSection from '@/components/sections/MetricsSection';
import JobOffersTracker from '@/components/sections/JobOffersTracker';
import HRNewsSlider from '@/components/sections/HRNewsSlider';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import OrganizationStructureSection from '@/components/sections/OrganizationStructureSection';
import { PerformanceMetric } from '@/types/metrics';

// Define the metrics with the correct type
const metrics: PerformanceMetric[] = [
  { value: '70%', label: 'Client Retention Rate' },
  { value: '500+', label: 'Executive Placements' },
  { value: '7+', label: 'Countries Served' },
  { value: '20+', label: 'Years of Excellence' }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageDescription = "nHRMS provides comprehensive HR consulting services including executive search, HR advisory, talent acquisition, and HR technology solutions for modern organizations seeking excellence.";

  return (
    <>
      <Helmet>
        <title>nHRMS | Strategic HR Consulting</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="HR consulting, executive search, talent acquisition, HR technology, HR advisory" />
        <link rel="canonical" href="https://nhrms.com/" />
        <meta property="og:title" content="nHRMS | Strategic HR Consulting" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://nhrms.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "nHRMS",
            "url": "https://nhrms.com",
            "logo": "https://nhrms.com/logo.png",
            "description": pageDescription
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <MetricsSection metrics={metrics} />
          <JobOffersTracker />
          <ServicesSection />
          <OrganizationStructureSection />
          <WhyChooseUsSection />
          <HRNewsSlider />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
