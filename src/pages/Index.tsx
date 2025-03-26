
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import KnowledgeSection from '@/components/KnowledgeSection';
import TrendsResearchSlider from '@/components/TrendsResearchSlider';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Users, Award, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';

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
        
        {/* Tech-driven HR Metrics Section */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm border border-border/30">
                  <h3 className="text-lg font-medium text-muted-foreground mb-2">{metric.label}</h3>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-primary">{metric.value}%</div>
                    <Slider
                      defaultValue={[metric.value]}
                      max={100}
                      step={1}
                      disabled
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ServicesSection />
        
        {/* Trends and Research Slider Section */}
        <TrendsResearchSlider />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose nHRMS</h2>
              <p className="text-muted-foreground text-lg">
                What sets us apart as your strategic HR management partner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-muted-foreground mb-4">
                  Our consultants bring decades of experience across industries and HR disciplines, ensuring practical, effective solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Former HR executives and specialists</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Industry-specific expertise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Continuous professional development</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Methodology</h3>
                <p className="text-muted-foreground mb-4">
                  Our structured approach combines best practices with tailored solutions for your unique organizational needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Data-driven approach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Customized frameworks</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Continuous improvement model</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Measurable Results</h3>
                <p className="text-muted-foreground mb-4">
                  We focus on delivering quantifiable outcomes that directly impact your business performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Clear success metrics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">ROI-focused solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Regular performance reporting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <KnowledgeSection />
        
        {/* Testimonials Section with Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Hear from organizations that have transformed their HR functions with nHRMS
              </p>
            </div>
            
            <Tabs defaultValue="testimonial-0" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {testimonials.map((testimonial, index) => (
                  <TabsTrigger key={index} value={`testimonial-${index}`}>
                    {testimonial.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {testimonials.map((testimonial, index) => (
                <TabsContent key={index} value={`testimonial-${index}`} className="mt-0">
                  <Card className="border border-border/50 shadow-sm">
                    <CardContent className="p-8">
                      <div className="mb-4 text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-xl">★</span>
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-6 italic text-lg">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-medium text-lg">{testimonial.name}</p>
                        <p className="text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link to="/case-studies" className="inline-flex items-center">
                  Read Our Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Function?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our team of experts can help you address your most pressing HR challenges and drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
