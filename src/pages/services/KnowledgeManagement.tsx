
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Library, BarChart, Book, ArrowRight, BookOpen, FileText, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KnowledgeManagement() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Knowledge Management</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Empowering organizations to capture, organize, and leverage their intellectual capital.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comprehensive knowledge capture and documentation solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Knowledge sharing platforms and communities of practice</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Knowledge retention and succession planning strategies</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Library className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Knowledge Management Services</h2>
              <p className="text-muted-foreground">
                Comprehensive solutions to help your organization capture, share, and leverage critical knowledge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Knowledge Capture & Organization</h3>
                <p className="text-muted-foreground">
                  Systematic processes to identify, capture, and organize critical organizational knowledge.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Knowledge Sharing Systems</h3>
                <p className="text-muted-foreground">
                  Platforms and processes that facilitate effective knowledge sharing throughout the organization.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Knowledge Retention Strategies</h3>
                <p className="text-muted-foreground">
                  Programs to capture and transfer critical knowledge from departing or retiring employees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Effective Knowledge Management</h2>
              <p className="text-muted-foreground">
                Strategic knowledge management drives numerous organizational benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Enhanced Decision Making</h3>
                  <p className="text-sm text-muted-foreground">Improved access to information leads to better, faster decision making.</p>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Increased Innovation</h3>
                  <p className="text-sm text-muted-foreground">Better knowledge sharing fosters innovation and new ideas.</p>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Reduced Knowledge Loss</h3>
                  <p className="text-sm text-muted-foreground">Minimize the impact of employee turnover on organizational knowledge.</p>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-2">Improved Efficiency</h3>
                  <p className="text-sm text-muted-foreground">Reduce redundant work and speed up problem-solving with better knowledge access.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Case Study: Global Manufacturing Company</h2>
                <p className="text-muted-foreground mb-6">
                  Implemented a comprehensive knowledge management system for a global manufacturing company, resulting in a 40% reduction in troubleshooting time and $2.5M in annual savings.
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
              <h2 className="text-3xl font-bold mb-4">Unlock Your Organization's Knowledge Potential</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our knowledge management solutions can help you capture, share, and leverage your organization's intellectual capital.
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
