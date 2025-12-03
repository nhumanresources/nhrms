import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/home/HeroCarousel';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import WhyChooseUsRedesigned from '@/components/home/WhyChooseUsRedesigned';
import PartnerLogosSection from '@/components/home/PartnerLogosSection';
import CTASectionRedesigned from '@/components/home/CTASectionRedesigned';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageDescription = "nHRMS - Nurturing Human Resources & Management Systems. Strategic HR consulting with 16+ years of expertise. Talent acquisition, HR advisory, fractional HR solutions, and HR technology services.";

  return (
    <>
      <Helmet>
        <title>nHRMS | People. Systems. Success. - Strategic HR Solutions</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="talent acquisition, executive search, HR consulting, leadership development, organizational strategy, HR technology solutions, fractional HR, BOT HR teams, nHRMS" />
        <link rel="canonical" href="https://nhrms.com/" />
        <meta property="og:title" content="nHRMS | People. Systems. Success." />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://nhrms.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "nHRMS - Nurturing Human Resources & Management Systems",
            "alternateName": "nHRMS",
            "url": "https://nhrms.com",
            "logo": "https://nhrms.com/logo.png",
            "description": pageDescription,
            "foundingDate": "2009",
            "slogan": "People. Systems. Success.",
            "industry": "Human Resources Consulting",
            "areaServed": ["India", "United States"],
            "address": [
              {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressCountry": "India"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "India"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-314-485-4747",
              "email": "info@nhrms.com",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <HeroCarousel />
          <ServicesShowcase />
          <WhyChooseUsRedesigned />
          <PartnerLogosSection />
          <CTASectionRedesigned />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
