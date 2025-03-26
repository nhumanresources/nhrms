
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import KnowledgeSection from '@/components/KnowledgeSection';
import TrendsResearchSlider from '@/components/TrendsResearchSlider';
import Footer from '@/components/Footer';
import MetricsSection from '@/components/sections/MetricsSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import HRNewsSlider from '@/components/sections/HRNewsSlider';

// Performance metrics focused on AI + Human + EQ integration
const performanceMetrics = [
  { label: "AI-Driven Decision Accuracy", value: 95 },
  { label: "Human Connection Score", value: 98 },
  { label: "EQ Integration Index", value: 94 },
  { label: "Digital Transformation Success", value: 96 }
];

// Testimonials highlighting AI + Human + EQ success stories
const testimonials = [
  {
    quote: "The combination of AI precision and human empathy in nHRMS's approach transformed our hiring process, creating a perfect balance of efficiency and emotional intelligence.",
    name: "Dr. Sarah Chen",
    title: "Chief People Officer, Future Tech Solutions",
    rating: 5
  },
  {
    quote: "Their AI-powered insights combined with deep emotional intelligence expertise helped us build the most engaged workforce we've ever had.",
    name: "Marcus Rodriguez",
    title: "Head of Innovation, Global Dynamics",
    rating: 5
  },
  {
    quote: "nHRMS's unique blend of technology and human touch has revolutionized how we approach employee development and well-being.",
    name: "Emma Thompson",
    title: "Director of People & Culture, Next-Gen Industries",
    rating: 5
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-primary/5">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="-mt-32 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
          <HRNewsSlider />
        </div>
        <div className="relative z-20">
          <MetricsSection metrics={performanceMetrics} />
          <ServicesSection />
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
            <TrendsResearchSlider />
          </div>
          <WhyChooseUsSection />
          <KnowledgeSection />
          <TestimonialsSection testimonials={testimonials} />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
