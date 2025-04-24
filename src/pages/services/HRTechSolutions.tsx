
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart, Database, Settings, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function HRTechSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const pageTitle = "HR Technology Solutions & Implementation | nHRMS";
  const pageDescription = "Expert HR technology consulting, analysis, and implementation services for enterprises and MSMEs. Transform your HR operations with tailored tech solutions.";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HR Technology Solutions",
    "provider": {
      "@type": "Organization",
      "name": "nHRMS"
    },
    "description": pageDescription,
    "serviceType": "HR Technology Implementation"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="HR tech solutions, HR technology implementation, HRIS, HRMS, HR digital transformation"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Transform Your HR Operations with Technology
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert analysis, selection, and implementation of HR technology solutions tailored for enterprises and MSMEs.
              </p>
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our HR Technology Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <LineChart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analysis & Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your current HR processes and technology needs.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Database className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Solution Selection</h3>
                <p className="text-muted-foreground">
                  Expert guidance in choosing the right HR technology for your business.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Implementation</h3>
                <p className="text-muted-foreground">
                  Seamless deployment and integration of HR technology solutions.
                </p>
              </div>
              
              <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Training & Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive training and ongoing support for your team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our HR Tech Solutions</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vendor-Neutral Approach</h3>
                    <p className="text-muted-foreground">
                      We recommend solutions based on your specific needs, not vendor relationships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
                    <p className="text-muted-foreground">
                      From initial analysis to implementation and ongoing support, we're with you at every step.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
                    <p className="text-muted-foreground">
                      Tailored recommendations that maximize ROI while fitting your budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Technology?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let's discuss how we can help you select and implement the right HR technology solutions for your business.
              </p>
              <Button size="lg" variant="outline" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
