import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lightbulb, 
  Target, 
  UserSearch, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Building2,
  Users,
  Sparkles
} from 'lucide-react';
import { GradientOrb, PremiumBadge, ServiceIconWrapper } from '@/components/ui/decorative-elements';

const advisoryServices = [
  {
    icon: Lightbulb,
    title: "HR Advisory",
    description: "Strategic consulting to optimize your human capital strategy and align HR with business objectives.",
    link: "/services/hr-advisory"
  },
  {
    icon: Building2,
    title: "Organization Strategy",
    description: "Design organizational structures and operating models that drive performance and agility.",
    link: "/services/organization-strategy"
  },
  {
    icon: UserSearch,
    title: "Executive Search",
    description: "Find exceptional leaders who align with your organization's vision and culture.",
    link: "/services/executive-search"
  },
  {
    icon: TrendingUp,
    title: "Workforce Transformation",
    description: "Navigate change and prepare your workforce for the future of work.",
    link: "/services/hr-advisory"
  }
];

const clientOutcomes = [
  "30% improvement in leadership effectiveness",
  "Accelerated time-to-impact for new executives",
  "Enhanced organizational agility and responsiveness",
  "Data-driven workforce planning capabilities",
  "Aligned talent strategy with business objectives",
  "Reduced time-to-fill for critical leadership roles"
];

export default function StrategicAdvisoryCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Strategic HR Advisory Services | Executive Search | nHRMS"
        description="Partner with seasoned HR strategists to transform your organization. Expert advisory, executive search, and workforce transformation services."
        keywords="HR advisory, executive search, workforce transformation, organization strategy, CHRO advisory"
      />
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"
              alt="Executive team strategy session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
          </div>
          <div className="absolute inset-0 bg-diagonal-pattern opacity-20" />
          
          {/* Decorative Elements */}
          <GradientOrb className="absolute -top-40 -right-40 opacity-25" size="xl" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-20" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <PremiumBadge variant="light" className="mb-6">
                <Target className="h-4 w-4 mr-2" />
                Strategic Advisory
              </PremiumBadge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Strategic HR Advisory
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Partner with seasoned HR strategists to transform your organization, 
                build leadership capabilities, and drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-primary-premium" asChild>
                  <Link to="/contact">Schedule Advisory Session</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/who-we-are">Meet Our Advisors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-50" />
          <GradientOrb className="absolute top-20 right-10 opacity-10" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <PremiumBadge variant="warm" className="mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Advisory Services
              </PremiumBadge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Advisory Services</h2>
              <p className="text-lg text-muted-foreground">
                C-suite level guidance for your most critical HR and organizational challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advisoryServices.map((service, index) => (
                <Card key={index} className="card-premium group">
                  <CardHeader>
                    <ServiceIconWrapper variant="warm">
                      <service.icon className="h-7 w-7 text-secondary" />
                    </ServiceIconWrapper>
                    <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80 group-hover:translate-x-1 transition-transform" asChild>
                      <Link to={service.link} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Outcomes Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <GradientOrb className="absolute -bottom-20 right-20 opacity-15" size="xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <PremiumBadge variant="navy" className="mb-4">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Proven Results
                </PremiumBadge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Outcomes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our strategic advisory engagements consistently deliver measurable impact 
                  across key organizational metrics.
                </p>
                <div className="space-y-4">
                  {clientOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3 group hover-lift">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 rounded-3xl p-8 border border-secondary/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "16+", label: "Years Experience" },
                    { value: "423+", label: "Clients Served" },
                    { value: "200+", label: "Executives Placed" },
                    { value: "50+", label: "Industries Served" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-sm hover-lift card-glow">
                      <div className="text-4xl font-bold text-gradient-warm mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
              <p className="text-lg text-muted-foreground">
                Our advisory services are designed for senior leadership seeking strategic HR expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "CHROs & HR Leaders", desc: "Navigate complex transformations with expert guidance and industry insights." },
                { icon: Building2, title: "CEOs & Founders", desc: "Build high-performing organizations with the right talent and culture." },
                { icon: Target, title: "Board & Investors", desc: "Ensure leadership readiness and organizational capability for growth." }
              ].map((audience, index) => (
                <Card key={index} className="card-premium text-center">
                  <CardContent className="pt-8 pb-6">
                    <ServiceIconWrapper variant="navy" className="mx-auto">
                      <audience.icon className="h-7 w-7 text-primary" />
                    </ServiceIconWrapper>
                    <h3 className="font-semibold text-lg mb-2 mt-4">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-pattern opacity-20" />
          <GradientOrb className="absolute -top-20 -right-20 opacity-20" size="xl" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-15" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Strategic Transformation?</h2>
              <p className="text-xl text-white/90 mb-8">
                Schedule a confidential discussion with our senior advisors to explore 
                how we can support your organization's strategic objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/services/executive-search">Executive Search</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
