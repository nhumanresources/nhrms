
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LearningHeroSection from '@/components/learning/HeroSection';
import LearningApproach from '@/components/learning/LearningApproach';
import TrainingPrograms from '@/components/learning/TrainingPrograms';
import CorporateTraining from '@/components/learning/CorporateTraining';
import LearningCTASection from '@/components/learning/CTASection';

export default function LearningServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Learning Solutions | Academia to Corporate | nHRMS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
