
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import WhyNHRMSSection from '@/components/home/WhyNHRMSSection';
import CoursesHighlightSection from '@/components/home/CoursesHighlightSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import PartnerLogosSection from '@/components/home/PartnerLogosSection';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageDescription = "Strategic HR & Talent Solutions. Expert talent acquisition and comprehensive HR management services to scale your organization effectively with specialized recruitment and consulting.";

  return (
    <>
      <Helmet>
        <title>nHRMS | Strategic HR & Talent Solutions</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="talent acquisition, executive search, HR consulting, leadership development, organizational strategy, HR technology solutions, staffing solutions, BOT HR teams" />
        <link rel="canonical" href="https://nhrms.com/" />
        <meta property="og:title" content="nHRMS | Strategic HR & Talent Solutions" />
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
            "description": pageDescription,
            "foundingDate": "2003",
            "industry": "Human Resources Services",
            "areaServed": "India",
            "serviceArea": {
              "@type": "Country",
              "name": "India"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <WhatWeOfferSection />
          <WhyNHRMSSection />
          <CoursesHighlightSection />
          <TestimonialsSection />
          <PartnerLogosSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
