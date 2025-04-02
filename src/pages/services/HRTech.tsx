
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Code, BarChart, Laptop, ArrowRight, Database, Cloud, Sparkles, Shield, Globe, Workflow } from 'lucide-react';
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
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-100 via-future-300/30 to-neural-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920')] bg-cover bg-center opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-animation="slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">HR Technology Solutions</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Cutting-edge technology solutions to transform your HR operations and employee experience.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">AI-powered talent acquisition and management</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Cloud-based HRIS implementation and optimization</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Data analytics and workforce intelligence platforms</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-future-600 to-neural-600 hover:from-neural-600 hover:to-future-600 transition-all duration-300 shadow-lg" asChild>
                    <Link to="/contact">Request a Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square" data-animation="slide-in-right" data-delay="200">
                <div className="absolute inset-0 bg-gradient-to-br from-future-600/80 via-future-400/50 to-neural-500/30 opacity-80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200" 
                  alt="HR Technology Solutions" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code className="w-24 h-24 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-future-100/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">Our HR Technology Services</h2>
              <p className="text-muted-foreground text-lg">
                Innovative HR tech solutions designed to streamline processes, enhance decision-making, and improve employee experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl border border-future-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="0">
                <div className="w-16 h-16 bg-gradient-to-br from-future-600/20 to-future-400/20 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="h-8 w-8 text-future-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Cloud HRIS Solutions</h3>
                <p className="text-muted-foreground">
                  Implementation, integration, and optimization of cloud-based HR Information Systems to centralize HR data and processes.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-future-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="150">
                <div className="w-16 h-16 bg-gradient-to-br from-future-600/20 to-future-400/20 rounded-full flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-future-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">HR Analytics</h3>
                <p className="text-muted-foreground">
                  Advanced analytics platforms to transform HR data into actionable insights for strategic workforce planning and decision-making.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-future-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="300">
                <div className="w-16 h-16 bg-gradient-to-br from-future-600/20 to-future-400/20 rounded-full flex items-center justify-center mb-6">
                  <Laptop className="h-8 w-8 text-future-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">AI-Powered Talent Solutions</h3>
                <p className="text-muted-foreground">
                  Artificial intelligence and machine learning tools for recruitment, candidate assessment, and employee development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-gradient-to-b from-future-100/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-future-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neural-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">Our Technology Stack</h2>
              <p className="text-muted-foreground text-lg">
                We leverage cutting-edge technologies to deliver scalable, secure, and user-friendly HR solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-future-200/50 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="0">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-10 w-10 text-future-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Artificial Intelligence</h3>
                <p className="text-sm text-muted-foreground">Machine learning algorithms for predictive analytics and automation</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-future-200/50 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="150">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <Workflow className="h-10 w-10 text-future-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">API Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless connectivity between multiple HR systems and platforms</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-future-200/50 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="300">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <Cloud className="h-10 w-10 text-future-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">Cloud Computing</h3>
                <p className="text-sm text-muted-foreground">Scalable infrastructure with enterprise-grade security</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl text-center shadow-lg border border-future-200/50 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="450">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-10 w-10 text-future-600" />
                </div>
                <h3 className="text-xl font-medium mb-3">UX Design</h3>
                <p className="text-sm text-muted-foreground">User-centered design for intuitive and engaging employee experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto" data-animation="fade-in">
              <div className="bg-gradient-to-br from-future-100 to-neural-100 rounded-xl p-8 shadow-lg">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">Case Study: Global Tech Company</h2>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-future-600 mr-2" />
                      <span className="text-muted-foreground">Fortune 500 Technology Leader</span>
                    </div>
                  </div>
                  <div className="bg-future-600/10 text-future-600 px-4 py-1 rounded-full text-sm font-medium">AI Talent Strategy</div>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  Implemented an AI-powered talent acquisition platform for a Fortune 500 technology company, reducing time-to-hire by 40% and improving quality-of-hire metrics by 35%.
                </p>
                <Button variant="outline" className="group relative overflow-hidden" asChild>
                  <Link to="/case-studies" className="inline-flex items-center">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-future-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-future-700/90 to-neural-700/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transform Your HR Technology</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how our HR technology solutions can help you modernize your HR operations and enhance your employee experience.
              </p>
              <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
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
