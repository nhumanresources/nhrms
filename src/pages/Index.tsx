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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Index page loaded");
  }, []);

  // Testimonials data
  const testimonials = [
    {
      quote: "nHRMS helped us completely transform our talent acquisition process, resulting in a 40% reduction in time-to-hire and significant improvement in candidate quality.",
      name: "Jennifer Thompson",
      title: "CHRO, Global Tech Company",
      rating: 5
    },
    {
      quote: "The knowledge management system implemented by nHRMS has been a game-changer for our organization, preserving critical expertise and improving collaboration across our global teams.",
      name: "Michael Chen",
      title: "VP of HR, Manufacturing Corporation",
      rating: 5
    },
    {
      quote: "Working with nHRMS on our executive search needs has been exceptional. They truly understand our culture and have helped us build a leadership team that's driving unprecedented growth.",
      name: "Sarah Rodriguez",
      title: "CEO, Healthcare Startup",
      rating: 5
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    { label: "Talent Acquisition Success", value: 92 },
    { label: "Client Satisfaction", value: 97 },
    { label: "Process Efficiency", value: 89 },
    { label: "Knowledge Management", value: 94 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* HR News Slider Section - Added directly below Hero with no gap */}
        <div className="mt-0 pt-0">
          <HRNewsSlider />
        </div>
        
        {/* Tech-driven HR Metrics Section */}
        <MetricsSection metrics={performanceMetrics} />
        
        <ServicesSection />
        
        {/* Trends and Research Slider Section */}
        <TrendsResearchSlider />
        
        {/* Why Choose Us Section */}
        <WhyChooseUsSection />
        
        <KnowledgeSection />
        
        {/* Testimonials Section with Tabs */}
        <TestimonialsSection testimonials={testimonials} />
        
        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
