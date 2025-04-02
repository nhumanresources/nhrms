
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Library, BookOpen, Book, ArrowRight, FileText, Database, BarChart, Lightbulb, GraduationCap, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { initInViewAnimations } from '@/lib/animationUtils';

export default function KnowledgeManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize animations for elements when they come into view
    setTimeout(() => {
      initInViewAnimations();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neural-100 via-neural-200/30 to-future-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1920')] bg-cover bg-center opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-animation="slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neural-600 to-future-600 bg-clip-text text-transparent">Knowledge Management</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Empowering organizations to capture, organize, and leverage their intellectual capital.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-neural-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comprehensive knowledge capture and documentation solutions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-neural-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Knowledge sharing platforms and communities of practice</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-neural-600 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Knowledge retention and succession planning strategies</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-neural-600 to-future-600 hover:from-future-600 hover:to-neural-600 transition-all duration-300 shadow-lg" asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square" data-animation="slide-in-right" data-delay="200">
                <div className="absolute inset-0 bg-gradient-to-br from-neural-600/80 via-neural-400/50 to-future-500/30 opacity-80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200" 
                  alt="Knowledge Management" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Library className="w-24 h-24 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-white to-neural-100/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neural-600 to-future-600 bg-clip-text text-transparent">Our Knowledge Management Services</h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive solutions to help your organization capture, share, and leverage critical knowledge.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl border border-neural-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="0">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <Database className="h-8 w-8 text-neural-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Knowledge Capture & Organization</h3>
                <p className="text-muted-foreground">
                  Systematic processes to identify, capture, and organize critical organizational knowledge.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-neural-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="150">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-neural-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Knowledge Sharing Systems</h3>
                <p className="text-muted-foreground">
                  Platforms and processes that facilitate effective knowledge sharing throughout the organization.
                </p>
              </div>
              
              <div className="bg-white rounded-xl border border-neural-200/50 shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1" data-animation="slide-in-bottom" data-delay="300">
                <div className="w-16 h-16 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-neural-600" />
                </div>
                <h3 className="text-2xl font-medium mb-4">Knowledge Retention Strategies</h3>
                <p className="text-muted-foreground">
                  Programs to capture and transfer critical knowledge from departing or retiring employees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-neural-100/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-neural-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-future-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neural-600 to-future-600 bg-clip-text text-transparent">Benefits of Effective Knowledge Management</h2>
              <p className="text-muted-foreground text-lg">
                Strategic knowledge management drives numerous organizational benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-5 hover:shadow-xl transition-all hover:-translate-y-1 border border-neural-200/30" data-animation="scale-in" data-delay="0">
                <div className="w-14 h-14 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-7 w-7 text-neural-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Enhanced Decision Making</h3>
                  <p className="text-muted-foreground">Improved access to information leads to better, faster decision making across all levels of the organization. Leaders can leverage institutional knowledge to make informed strategic choices.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-5 hover:shadow-xl transition-all hover:-translate-y-1 border border-neural-200/30" data-animation="scale-in" data-delay="150">
                <div className="w-14 h-14 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-7 w-7 text-neural-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Increased Innovation</h3>
                  <p className="text-muted-foreground">Better knowledge sharing fosters innovation and new ideas. When employees have access to diverse knowledge sources, they can combine insights to create novel solutions.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-5 hover:shadow-xl transition-all hover:-translate-y-1 border border-neural-200/30" data-animation="scale-in" data-delay="300">
                <div className="w-14 h-14 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="h-7 w-7 text-neural-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Reduced Knowledge Loss</h3>
                  <p className="text-muted-foreground">Minimize the impact of employee turnover on organizational knowledge. Structured knowledge retention programs preserve critical expertise and institutional memory.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 flex items-start space-x-5 hover:shadow-xl transition-all hover:-translate-y-1 border border-neural-200/30" data-animation="scale-in" data-delay="450">
                <div className="w-14 h-14 bg-gradient-to-br from-neural-600/20 to-neural-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Share2 className="h-7 w-7 text-neural-600" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Improved Efficiency</h3>
                  <p className="text-muted-foreground">Reduce redundant work and speed up problem-solving with better knowledge access. Employees can quickly find solutions to common challenges without reinventing the wheel.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto" data-animation="fade-in">
              <div className="bg-gradient-to-br from-neural-100 to-future-100 rounded-xl p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-neural-300/20 rounded-full -mt-20 -mr-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-future-300/20 rounded-full -mb-20 -ml-20"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-neural-600 to-future-600 bg-clip-text text-transparent">Case Study: Global Manufacturing Company</h2>
                      <div className="flex items-center">
                        <Book className="h-5 w-5 text-neural-600 mr-2" />
                        <span className="text-muted-foreground">Knowledge Management Implementation</span>
                      </div>
                    </div>
                    <div className="bg-neural-600/10 text-neural-600 px-4 py-1 rounded-full text-sm font-medium">40% Efficiency Gain</div>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Implemented a comprehensive knowledge management system for a global manufacturing company, resulting in a 40% reduction in troubleshooting time and $2.5M in annual savings.
                  </p>
                  <Button variant="outline" className="group relative overflow-hidden" asChild>
                    <Link to="/case-studies" className="inline-flex items-center">
                      View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-neural-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-neural-700/90 to-future-700/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Unlock Your Organization's Knowledge Potential</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how our knowledge management solutions can help you capture, share, and leverage your organization's intellectual capital.
              </p>
              <Button size="lg" className="bg-white text-neural-700 hover:bg-white/90 shadow-lg" asChild>
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
