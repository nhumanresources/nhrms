
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  LineChart, 
  BarChart, 
  Users, 
  ArrowRight, 
  Target, 
  BadgeDollarSign, 
  Megaphone, 
  PieChart, 
  Rocket,
  Building2,
  TrendingUp,
  Radio,
  UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initInViewAnimations } from '@/lib/animationUtils';

export default function GoToMarket() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-200 via-future-100/30 to-neural-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920')] bg-cover bg-center opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-animation="slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Go-to-Market Strategy for HR Products</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Specialized strategies to bring your HR solutions to market with maximum impact, visibility, and adoption.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Market analysis and competitive positioning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">HR buyer journey mapping and targeting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Value proposition development and messaging</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Channel strategy and partnership development</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-future-700 to-neural-600 hover:from-neural-600 hover:to-future-700 transition-all duration-300 shadow-lg" asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square" data-animation="slide-in-right" data-delay="200">
                <div className="absolute inset-0 bg-gradient-to-br from-future-700/80 via-future-500/50 to-neural-500/30 opacity-80 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1200" 
                  alt="Go-to-Market Strategy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Rocket className="w-24 h-24 text-white/90" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unique Challenges Section */}
        <section className="py-20 bg-gradient-to-b from-white to-future-100/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Unique Challenges of HR Products</h2>
              <p className="text-muted-foreground text-lg">
                HR solutions face specific go-to-market challenges that require specialized strategies and approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="0">
                <div className="h-2 bg-gradient-to-r from-future-600 to-future-400"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-future-700" />
                  </div>
                  <CardTitle className="text-2xl">Multiple Decision Makers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HR purchase decisions often involve multiple stakeholders including HR leaders, IT, finance, and the C-suite, requiring nuanced messaging for each audience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="150">
                <div className="h-2 bg-gradient-to-r from-future-500 to-neural-500"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                    <PieChart className="h-8 w-8 text-future-700" />
                  </div>
                  <CardTitle className="text-2xl">ROI Demonstration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HR solutions must clearly demonstrate both quantitative and qualitative returns on investment, which can be challenging for products focused on culture, engagement, and development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-xl transition-all hover:-translate-y-1" data-animation="scale-in" data-delay="300">
                <div className="h-2 bg-gradient-to-r from-neural-600 to-neural-400"></div>
                <CardHeader className="pb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                    <Building2 className="h-8 w-8 text-future-700" />
                  </div>
                  <CardTitle className="text-2xl">Organization Readiness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HR technology adoption is heavily dependent on organizational readiness and existing systems, requiring careful positioning and implementation planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-gradient-to-b from-future-100/30 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-future-200 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neural-200 rounded-full filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Our GTM Approach for HR Products</h2>
              <p className="text-muted-foreground text-lg">
                A comprehensive framework designed specifically for HR solutions to maximize market penetration and customer adoption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                    <Target className="h-8 w-8 text-future-700" />
                  </div>
                  <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Market Strategy</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Market Analysis</p>
                      <p className="text-muted-foreground">Comprehensive analysis of HR market trends, competitive landscape, and buyer personas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Segmentation & Targeting</p>
                      <p className="text-muted-foreground">Identify optimal market segments and prioritize based on opportunity size and fit.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Positioning Strategy</p>
                      <p className="text-muted-foreground">Develop distinctive positioning that addresses specific HR pain points and differentiates from competitors.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="150">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                    <BadgeDollarSign className="h-8 w-8 text-future-700" />
                  </div>
                  <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Pricing & Packaging</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Value-Based Pricing</p>
                      <p className="text-muted-foreground">Develop pricing models aligned with the value delivered and buying patterns of HR departments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Solution Packaging</p>
                      <p className="text-muted-foreground">Create tiered offerings and bundles that address different HR maturity levels and organizational needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">ROI Modeling</p>
                      <p className="text-muted-foreground">Develop robust ROI calculator tools that demonstrate both hard and soft returns for HR investments.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                    <Megaphone className="h-8 w-8 text-future-700" />
                  </div>
                  <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Marketing & Communications</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR-Specific Content Strategy</p>
                      <p className="text-muted-foreground">Develop thought leadership and content that addresses the unique challenges of HR professionals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Multi-Stakeholder Messaging</p>
                      <p className="text-muted-foreground">Create tailored messaging for different stakeholders in the HR purchase process (CHRO, HR Business Partners, IT, Finance).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Event Strategy</p>
                      <p className="text-muted-foreground">Leverage HR conferences, industry forums, and targeted events to build visibility and credibility.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="slide-in-bottom" data-delay="450">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mr-6">
                    <LineChart className="h-8 w-8 text-future-700" />
                  </div>
                  <h3 className="text-2xl font-medium bg-gradient-to-br from-future-700 to-neural-600 bg-clip-text text-transparent">Sales & Channel Strategy</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Buyer Journey Mapping</p>
                      <p className="text-muted-foreground">Map the complex buying journey for HR solutions to optimize sales approach and touchpoints.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Ecosystem Partnerships</p>
                      <p className="text-muted-foreground">Develop partnerships with complementary HR solution providers, consultants, and system integrators.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-future-700 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Sales Enablement for HR Products</p>
                      <p className="text-muted-foreground">Equip sales teams with HR domain expertise, objection handling, and value proposition articulation.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Measuring Success</h2>
              <p className="text-muted-foreground text-lg">
                Key metrics we track to ensure your HR solution achieves market penetration and adoption goals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="0">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-10 w-10 text-future-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Market Penetration</h3>
                <p className="text-sm text-muted-foreground">Share of target HR market segments acquired</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="150">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                  <UserPlus className="h-10 w-10 text-future-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">User Adoption</h3>
                <p className="text-sm text-muted-foreground">Percentage of active users within client organizations</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="300">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="h-10 w-10 text-future-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Customer ROI</h3>
                <p className="text-sm text-muted-foreground">Measurable impact and returns for client organizations</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border border-future-200/30" data-animation="scale-in" data-delay="450">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-future-700/20 to-future-500/20 rounded-full flex items-center justify-center mb-6">
                  <Radio className="h-10 w-10 text-future-700" />
                </div>
                <h3 className="text-xl font-medium mb-3">Growth Velocity</h3>
                <p className="text-sm text-muted-foreground">Speed of market expansion and revenue growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-20 bg-future-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto" data-animation="fade-in">
              <div className="bg-white rounded-xl p-10 shadow-xl relative overflow-hidden border border-future-200/30">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-future-100 to-neural-100 rounded-full -mt-40 -mr-40 z-0"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Case Study: HR Tech Platform Launch</h2>
                      <div className="flex items-center">
                        <Rocket className="h-5 w-5 text-future-700 mr-2" />
                        <span className="text-muted-foreground">SaaS Performance Management Platform</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium bg-future-600/10 text-future-700 px-4 py-2 rounded-full mt-3 md:mt-0">Go-to-Market Success</span>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">
                    We developed and executed a comprehensive go-to-market strategy for a SaaS-based performance management platform, resulting in 150+ enterprise clients acquired within 18 months, 85% user adoption rates, and a 3x increase in average deal size through value-based pricing and packaging.
                  </p>
                  <Button variant="outline" className="group relative overflow-hidden border-future-600/30" asChild>
                    <Link to="/case-studies" className="inline-flex items-center">
                      View Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-future-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-future-700/90 to-neural-600/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center" data-animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Launch Your HR Solution</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how our go-to-market expertise can help your HR product achieve rapid adoption and sustainable growth.
              </p>
              <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Schedule a Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
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
