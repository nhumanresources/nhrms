
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LearningHeroSection from '@/components/learning/HeroSection';
import LearningApproach from '@/components/learning/LearningApproach';
import TrainingPrograms from '@/components/learning/TrainingPrograms';
import CorporateTraining from '@/components/learning/CorporateTraining';
import LearningCTASection from '@/components/learning/CTASection';

export default function LearningServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Learning Solutions | Academia to Corporate | nHRMS";
  const pageDescription = "Discover nHRMS's comprehensive learning solutions that bridge academia and corporate worlds with customized training programs and educational resources.";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Learning Solutions",
    "provider": {
      "@type": "Organization",
      "name": "nHRMS"
    },
    "description": pageDescription,
    "serviceType": "Learning and Development"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="learning solutions, corporate training, academia, professional development, HR training, education"
        canonicalUrl="https://nhrms.com/learning-solutions"
        structuredData={structuredData}
      />
      <Navbar />
      <LearningHeroSection />
      <LearningApproach />
      <TrainingPrograms />
      <CorporateTraining />
      <LearningCTASection />
      <Footer />
    </div>
  );
}
