
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
  Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GoToMarket() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Go-to-Market Strategy for HR Products</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Specialized strategies to bring your HR solutions to market with maximum impact, visibility, and adoption.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Market analysis and competitive positioning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">HR buyer journey mapping and targeting</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Value proposition development and messaging</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Channel strategy and partnership development</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Unique Challenges Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unique Challenges of HR Products</h2>
              <p className="text-muted-foreground">
                HR solutions face specific go-to-market challenges that require specialized strategies and approaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Multiple Decision Makers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HR purchase decisions often involve multiple stakeholders including HR leaders, IT, finance, and the C-suite, requiring nuanced messaging for each audience.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <PieChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>ROI Demonstration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    HR solutions must clearly demonstrate both quantitative and qualitative returns on investment, which can be challenging for products focused on culture, engagement, and development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Organization Readiness</CardTitle>
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
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our GTM Approach for HR Products</h2>
              <p className="text-muted-foreground">
                A comprehensive framework designed specifically for HR solutions to maximize market penetration and customer adoption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Market Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Market Analysis</p>
                      <p className="text-sm text-muted-foreground">Comprehensive analysis of HR market trends, competitive landscape, and buyer personas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Segmentation & Targeting</p>
                      <p className="text-sm text-muted-foreground">Identify optimal market segments and prioritize based on opportunity size and fit.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Positioning Strategy</p>
                      <p className="text-sm text-muted-foreground">Develop distinctive positioning that addresses specific HR pain points and differentiates from competitors.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <BadgeDollarSign className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Pricing & Packaging</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Value-Based Pricing</p>
                      <p className="text-sm text-muted-foreground">Develop pricing models aligned with the value delivered and buying patterns of HR departments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Solution Packaging</p>
                      <p className="text-sm text-muted-foreground">Create tiered offerings and bundles that address different HR maturity levels and organizational needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">ROI Modeling</p>
                      <p className="text-sm text-muted-foreground">Develop robust ROI calculator tools that demonstrate both hard and soft returns for HR investments.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Megaphone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Marketing & Communications</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR-Specific Content Strategy</p>
                      <p className="text-sm text-muted-foreground">Develop thought leadership and content that addresses the unique challenges of HR professionals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Multi-Stakeholder Messaging</p>
                      <p className="text-sm text-muted-foreground">Create tailored messaging for different stakeholders in the HR purchase process (CHRO, HR Business Partners, IT, Finance).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Event Strategy</p>
                      <p className="text-sm text-muted-foreground">Leverage HR conferences, industry forums, and targeted events to build visibility and credibility.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Sales & Channel Strategy</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Buyer Journey Mapping</p>
                      <p className="text-sm text-muted-foreground">Map the complex buying journey for HR solutions to optimize sales approach and touchpoints.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">HR Ecosystem Partnerships</p>
                      <p className="text-sm text-muted-foreground">Develop partnerships with complementary HR solution providers, consultants, and system integrators.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Sales Enablement for HR Products</p>
                      <p className="text-sm text-muted-foreground">Equip sales teams with HR domain expertise, objection handling, and value proposition articulation.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Measuring Success</h2>
              <p className="text-muted-foreground">
                Key metrics we track to ensure your HR solution achieves market penetration and adoption goals.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-background border border-border/50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Market Penetration</h3>
                <p className="text-sm text-muted-foreground">Share of target HR market segments acquired</p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">User Adoption</h3>
                <p className="text-sm text-muted-foreground">Percentage of active users within client organizations</p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BadgeDollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Customer ROI</h3>
                <p className="text-sm text-muted-foreground">Measurable impact and returns for client organizations</p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Growth Velocity</h3>
                <p className="text-sm text-muted-foreground">Speed of market expansion and revenue growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-xl p-8 border border-border/50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h2 className="text-2xl font-bold">Case Study: HR Tech Platform Launch</h2>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">Go-to-Market Success</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  We developed and executed a comprehensive go-to-market strategy for a SaaS-based performance management platform, resulting in 150+ enterprise clients acquired within 18 months, 85% user adoption rates, and a 3x increase in average deal size through value-based pricing and packaging.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/case-studies" className="inline-flex items-center">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-4">Launch Your HR Solution</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our go-to-market expertise can help your HR product achieve rapid adoption and sustainable growth.
              </p>
              <Button size="lg" asChild>
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
