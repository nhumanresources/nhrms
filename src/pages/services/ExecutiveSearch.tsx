
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, UserSearch, BarChart, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExecutiveSearch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Search</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Finding exceptional leaders who drive organizational success through our proven executive search methodology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Tailored search strategies aligned with your organizational objectives</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Deep industry knowledge and extensive candidate networks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comprehensive assessment of leadership capabilities and cultural fit</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <UserSearch className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Executive Search Process</h2>
              <p className="text-muted-foreground">
                A systematic and proven approach to identifying and securing the ideal leadership talent for your organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Discovery & Strategy</h3>
                <p className="text-muted-foreground">
                  We conduct in-depth consultations to understand your organizational needs, culture, and leadership requirements.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Search & Assessment</h3>
                <p className="text-muted-foreground">
                  Our team leverages industry networks and proprietary databases to identify and rigorously assess potential candidates.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Selection & Onboarding</h3>
                <p className="text-muted-foreground">
                  We facilitate the selection process and provide ongoing support to ensure a smooth transition for the new executive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground">
                Our executive search expertise spans across various sectors, with specialized knowledge of industry-specific leadership requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Technology</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Financial Services</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Healthcare</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Life Sciences</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Manufacturing</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Consumer Goods</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Professional Services</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 className="font-medium">Energy & Utilities</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Successful Placements</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">95%</h3>
                <p className="text-muted-foreground">Retention Rate</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <UserSearch className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">30+</h3>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Leader?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our executive search services can help you identify and secure exceptional talent for your organization.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
