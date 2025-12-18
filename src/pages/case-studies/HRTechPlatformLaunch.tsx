
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareButtons from '@/components/SocialShareButtons';
import { ArrowLeft, Calendar, BarChart, Target, Users, LineChart, Rocket, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { initInViewAnimations } from '@/lib/animationUtils';

export default function HRTechPlatformLaunch() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HR-Tech Platform Launch Case Study | nHRMS";
    
    // Initialize animations
    setTimeout(() => {
      initInViewAnimations();
    }, 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-future-100/70 via-white to-neural-100/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8" data-animation="fade-in">
                <Button variant="ghost" size="sm" className="group" asChild>
                  <Link to="/case-studies" className="flex items-center text-muted-foreground hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Case Studies
                  </Link>
                </Button>
              </div>
              
              <div data-animation="fade-in-up" className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent leading-tight">HR-Tech Platform Launch: Go-to-Market Strategy for Performance Management SaaS</h1>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-future-100 text-future-700">
                    <Calendar className="mr-1 h-4 w-4" /> 2023
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-neural-100 text-neural-700">
                    <Rocket className="mr-1 h-4 w-4" /> Go-to-Market
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    <Users className="mr-1 h-4 w-4" /> HR-Tech
                  </span>
                </div>
                
                <SocialShareButtons 
                  title="HR-Tech Platform Launch: Go-to-Market Strategy for Performance Management SaaS" 
                  className="mt-6"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none" data-animation="fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Challenge</h2>
                
                <p className="mb-6">
                  Our client, a venture-backed HR-Tech startup, had developed an innovative AI-powered performance management platform. Despite having a superior product, they faced significant challenges in gaining market traction amid fierce competition in the HR-Tech landscape. The client needed a comprehensive go-to-market strategy to effectively position their solution, identify the right customer segments, and establish optimal pricing and distribution channels.
                </p>
                
                <div className="bg-future-50 p-6 rounded-xl my-8 border border-future-200/50">
                  <h3 className="text-xl font-semibold text-future-800 mb-3">Key Challenges:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-future-600 mr-2 mt-1">•</span>
                      <span>Highly competitive market with established incumbents and low product differentiation perception</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-future-600 mr-2 mt-1">•</span>
                      <span>Undefined ideal customer profile and targeting strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-future-600 mr-2 mt-1">•</span>
                      <span>Limited marketing budget requiring highly efficient channel strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-future-600 mr-2 mt-1">•</span>
                      <span>Undifferentiated pricing model failing to capture value appropriately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-future-600 mr-2 mt-1">•</span>
                      <span>Need for rapid scaling to meet investor expectations</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
                
                <p className="mb-6">
                  nHRMS deployed a specialized go-to-market team with deep expertise in HR-Tech solutions and B2B SaaS launches. We developed a comprehensive strategy focused on clear market positioning, audience segmentation, and channel optimization.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <Card className="border-future-200/50 shadow-sm">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-future-800 mb-4">Market Analysis & Positioning</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Conducted competitive analysis of 15+ performance management solutions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Identified key feature differentiation opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Refined messaging to emphasize AI-powered insights and integration capabilities</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-future-200/50 shadow-sm">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-future-800 mb-4">Audience Segmentation</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Developed detailed buyer personas across industries and company sizes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Identified high-growth mid-market companies as primary target segment</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Created tailored value propositions for key decision makers (CHRO, CTO, CEOs)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-future-200/50 shadow-sm">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-future-800 mb-4">Pricing & Packaging Strategy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Restructured pricing from per-seat to value-based model</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Created tiered packages with clear upgrade paths</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Implemented ROI calculator for sales enablement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-future-200/50 shadow-sm">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-future-800 mb-4">Channel & Launch Strategy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Designed multi-channel approach emphasizing digital acquisition and partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Developed HR influencer program and content marketing engine</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-future-600 mr-2 mt-1">•</span>
                          <span>Created phased launch plan with clear KPIs for each stage</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
                
                <p className="mb-8">
                  Our go-to-market strategy transformed the client's market position and accelerated their growth trajectory. Through systematic implementation over 18 months, we helped the client achieve significant business outcomes:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                  <div className="bg-future-50/50 p-6 rounded-xl border border-future-200/30 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-future-100 text-future-700 mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-future-800 mb-2">150+</h3>
                    <p className="text-future-700">Enterprise clients acquired within 18 months</p>
                  </div>
                  
                  <div className="bg-future-50/50 p-6 rounded-xl border border-future-200/30 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-future-100 text-future-700 mb-4">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-future-800 mb-2">85%</h3>
                    <p className="text-future-700">User adoption rate across client organizations</p>
                  </div>
                  
                  <div className="bg-future-50/50 p-6 rounded-xl border border-future-200/30 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-future-100 text-future-700 mb-4">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-future-800 mb-2">3x</h3>
                    <p className="text-future-700">Increase in average deal size from pricing changes</p>
                  </div>
                </div>
                
                <div className="bg-neural-50 p-8 rounded-xl my-10 border border-neural-200/50">
                  <h3 className="text-xl font-semibold text-neural-800 mb-4">Key Success Factors:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-neural-600 mr-2 mt-1">•</span>
                      <span><strong>Differentiated positioning:</strong> Reframing the product as an "AI-powered coaching platform" rather than traditional performance management tool</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neural-600 mr-2 mt-1">•</span>
                      <span><strong>Strategic partnerships:</strong> Integration with key HRIS platforms creating significant channel revenue</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neural-600 mr-2 mt-1">•</span>
                      <span><strong>Value-based pricing:</strong> Tying platform cost to measurable performance improvements and organizational outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-neural-600 mr-2 mt-1">•</span>
                      <span><strong>Account-based marketing:</strong> Targeted approach to key accounts with personalized outreach and content</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
                
                <blockquote className="border-l-4 border-future-500 pl-6 py-2 italic my-8">
                  "nHRMS's go-to-market expertise was transformative for our business. Their strategic guidance helped us refine our positioning, identify our ideal customers, and optimize our pricing model. The results have exceeded our expectations, with faster growth and higher customer satisfaction than we had projected. Their deep understanding of the HR-Tech space was evident throughout our engagement."
                  <footer className="mt-4 text-gray-700 not-italic">
                    — CEO, HR-Tech Startup
                  </footer>
                </blockquote>
                
                <div className="flex justify-center my-12">
                  <Button className="bg-gradient-to-r from-future-600 to-neural-600 text-white hover:from-future-700 hover:to-neural-700" size="lg" asChild>
                    <Link to="/contact">
                      Discuss Your Go-to-Market Strategy
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Case Studies */}
        <section className="py-16 bg-future-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Case Studies</h2>
              
              <div className="grid md:grid-cols-2 gap-8" data-animation="fade-in">
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Financial HR Analytics Implementation</h3>
                    <p className="text-muted-foreground mb-4">How we helped a financial services firm implement advanced HR analytics to improve decision-making.</p>
                    <Button variant="ghost" className="group" asChild>
                      <Link to="/case-studies/financial-hr-analytics" className="flex items-center">
                        Read Case Study 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
