
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import MetricsSection from '@/components/sections/MetricsSection';
import HRNewsSlider from '@/components/sections/HRNewsSlider';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';

// Define the type for metrics
interface PerformanceMetric {
  value: string;
  label: string;
}

const testimonials = [
  {
    quote: "nHRMS transformed our executive search process, helping us find the perfect leadership team for our expansion. Their comprehensive methodology produced outstanding results.",
    name: "Sarah Johnson",
    title: "CHRO, Global Tech Solutions",
    rating: 5
  },
  {
    quote: "The HR advisory services provided by nHRMS helped us navigate a complex organizational restructuring with minimal disruption. Their strategic guidance was invaluable.",
    name: "Michael Chen",
    title: "CEO, Innovate Financial",
    rating: 5
  },
  {
    quote: "Their knowledge management system has revolutionized how we maintain compliance and keep our teams informed of HR best practices and regulatory changes.",
    name: "Rebecca Williams",
    title: "HR Director, Healthcare Alliance",
    rating: 5
  }
];

// Define the metrics with the correct type
const metrics: PerformanceMetric[] = [
  { value: '95%', label: 'Client Retention Rate' },
  { value: '500+', label: 'Executive Placements' },
  { value: '45+', label: 'Countries Served' },
  { value: '20+', label: 'Years of Excellence' }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title and meta description for SEO
    document.title = "n Human Resources and Management Systems - nHRMS | Strategic HR Consulting";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'nHRMS provides comprehensive HR consulting services including executive search, HR advisory, knowledge management, and HR technology solutions for modern organizations seeking excellence.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MetricsSection metrics={metrics} />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection testimonials={testimonials} />
        <HRNewsSlider />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
