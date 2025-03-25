
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, FileText, BarChart, Building, ArrowRight, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HRAdvisory() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">HR Advisory Services</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Strategic HR consulting to optimize your human capital and drive organizational performance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Organizational design and workforce planning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Compensation and benefits strategy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Performance management and talent development</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <FileText className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our HR Advisory Services</h2>
              <p className="text-muted-foreground">
                Comprehensive HR solutions tailored to your organization's unique needs and challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Organizational Design</h3>
                <p className="text-muted-foreground">
                  Optimize your organizational structure to align with business strategy and improve operational efficiency.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Compensation Strategy</h3>
                <p className="text-muted-foreground">
                  Develop competitive and equitable compensation programs that attract, retain, and motivate top talent.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Talent Management</h3>
                <p className="text-muted-foreground">
                  Build robust talent acquisition, development, and retention strategies to drive organizational success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground">
                A collaborative, data-driven approach to solving complex HR challenges and driving business outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h3 className="font-medium mb-2">Diagnose</h3>
                <p className="text-sm text-muted-foreground">Comprehensive assessment of current HR practices and challenges.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h3 className="font-medium mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Collaborative development of tailored HR solutions.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h3 className="font-medium mb-2">Implement</h3>
                <p className="text-sm text-muted-foreground">Structured implementation of recommended strategies and programs.</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">04</span>
                </div>
                <h3 className="font-medium mb-2">Evaluate</h3>
                <p className="text-sm text-muted-foreground">Ongoing measurement and refinement to ensure sustainable results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Case Study: Global Pharmaceutical Company</h2>
                <p className="text-muted-foreground mb-6">
                  Redesigned the talent management process for a global pharmaceutical company, resulting in a 25% improvement in employee retention and a 30% reduction in time-to-hire.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/case-studies" className="inline-flex items-center">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your HR Function</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our HR advisory services can help you optimize your human capital strategy and drive business results.
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
