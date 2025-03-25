
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Code, BarChart, Laptop, ArrowRight, Database, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HRTech() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">HR Technology Solutions</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cutting-edge technology solutions to transform your HR operations and employee experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">AI-powered talent acquisition and management</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Cloud-based HRIS implementation and optimization</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Data analytics and workforce intelligence platforms</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-blue-400/10 to-purple-500/10 flex items-center justify-center">
                <Code className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our HR Technology Services</h2>
              <p className="text-muted-foreground">
                Innovative HR tech solutions designed to streamline processes, enhance decision-making, and improve employee experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Cloud HRIS Solutions</h3>
                <p className="text-muted-foreground">
                  Implementation, integration, and optimization of cloud-based HR Information Systems to centralize HR data and processes.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">HR Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced analytics platforms to transform HR data into actionable insights for strategic workforce planning and decision-making.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">AI-Powered Talent Solutions</h3>
                <p className="text-muted-foreground">
                  Artificial intelligence and machine learning tools for recruitment, candidate assessment, and employee development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
              <p className="text-muted-foreground">
                We leverage cutting-edge technologies to deliver scalable, secure, and user-friendly HR solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">AI</span>
                </div>
                <h3 className="font-medium mb-2">Artificial Intelligence</h3>
                <p className="text-sm text-muted-foreground">Machine learning algorithms for predictive analytics and automation</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">API</span>
                </div>
                <h3 className="font-medium mb-2">API Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless connectivity between multiple HR systems and platforms</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">Cloud</span>
                </div>
                <h3 className="font-medium mb-2">Cloud Computing</h3>
                <p className="text-sm text-muted-foreground">Scalable infrastructure with enterprise-grade security</p>
              </div>
              
              <div className="bg-background p-6 rounded-lg text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">UX</span>
                </div>
                <h3 className="font-medium mb-2">UX Design</h3>
                <p className="text-sm text-muted-foreground">User-centered design for intuitive and engaging employee experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Case Study: Global Tech Company</h2>
                <p className="text-muted-foreground mb-6">
                  Implemented an AI-powered talent acquisition platform for a Fortune 500 technology company, reducing time-to-hire by 40% and improving quality-of-hire metrics by 35%.
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
              <h2 className="text-3xl font-bold mb-4">Transform Your HR Technology</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our HR technology solutions can help you modernize your HR operations and enhance your employee experience.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
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
