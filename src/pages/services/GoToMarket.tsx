
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket } from 'lucide-react';
import { initInViewAnimations } from '@/lib/animationUtils';

// Import our new components
import HeroSection from '@/components/services/go-to-market/HeroSection';
import ChallengesSection from '@/components/services/go-to-market/ChallengesSection';
import ApproachSection from '@/components/services/go-to-market/ApproachSection';
import SuccessMetricsSection from '@/components/services/go-to-market/SuccessMetricsSection';
import CaseStudySection from '@/components/services/go-to-market/CaseStudySection';
import CTASection from '@/components/services/go-to-market/CTASection';

export default function GoToMarket() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize animations
    setTimeout(() => {
      initInViewAnimations();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Unique Challenges Section */}
        <ChallengesSection />

        {/* Our Approach Section */}
        <ApproachSection />

        {/* Success Metrics Section */}
        <SuccessMetricsSection />

        {/* Case Study Preview Section */}
        <CaseStudySection />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
