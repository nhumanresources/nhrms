import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  Briefcase, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Target,
  Clock,
  DollarSign,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { GradientOrb, PremiumBadge, ServiceIconWrapper } from '@/components/ui/decorative-elements';

const talentServices = [
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Build high-performing teams with our comprehensive recruitment and sourcing solutions.",
    link: "/services/talent-acquisition"
  },
  {
    icon: Briefcase,
    title: "Fractional HR (BOT)",
    description: "Flexible Build-Operate-Transfer solutions for scalable HR operations.",
    link: "/services/bot-hr-teams"
  },
  {
    icon: DollarSign,
    title: "Total Rewards",
    description: "Design competitive compensation and benefits strategies to attract and retain top talent.",
    link: "/services/total-rewards"
  },
  {
    icon: TrendingUp,
    title: "Career Development",
    description: "Create pathways for employee growth, advancement, and career fulfillment.",
    link: "/services/career-development"
  }
];

const metrics = [
  { value: "5000+", label: "Placements Made", icon: Users },
  { value: "45", label: "Days Avg Time-to-Fill", icon: Clock },
  { value: "92%", label: "Retention Rate (1 Year)", icon: Target },
  { value: "40%", label: "Cost Savings via BOT", icon: DollarSign }
];

const industries = [
  "Information Technology",
  "Financial Services",
  "Manufacturing",
  "Healthcare & Pharma",
  "Retail & E-commerce",
  "Professional Services",
  "Startups & Growth Companies",
  "Multinational Corporations"
];

export default function TalentSolutionsCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Talent Solutions | Recruitment & HR Outsourcing | nHRMS"
        description="End-to-end talent solutions including recruitment, BOT HR teams, total rewards, and career development. Build high-performing teams with nHRMS."
        keywords="talent acquisition, recruitment, HR outsourcing, BOT, total rewards, compensation, career development"
      />
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Diverse team collaborating"
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
                <Users className="h-4 w-4 mr-2" />
                Talent Solutions
              </PremiumBadge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Talent Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Comprehensive talent management solutions to attract, develop, 
                and retain the best people for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-primary-premium" asChild>
                  <Link to="/contact">Discuss Your Talent Needs</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/services/talent-acquisition">Explore Recruitment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-14 bg-gradient-to-r from-secondary via-secondary/95 to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group hover-lift">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-white/80">{metric.label}</div>
                </div>
              ))}
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
                Our Services
              </PremiumBadge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our Talent Services</h2>
              <p className="text-lg text-muted-foreground">
                From sourcing to retention, we provide end-to-end talent management solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {talentServices.map((service, index) => (
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

        {/* Industries Served */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-15" size="xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <PremiumBadge variant="navy" className="mb-4">
                  <Target className="h-4 w-4 mr-2" />
                  Industry Expertise
                </PremiumBadge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our talent solutions are tailored to the unique requirements 
                  of diverse industries and organizational contexts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-secondary to-accent rounded-full group-hover:scale-125 transition-transform" />
                      <span className="text-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-secondary/10">
                <h3 className="text-xl font-semibold mb-6">Our Talent Acquisition Process</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Requirements Analysis", desc: "Deep dive into role and culture fit" },
                    { step: "2", title: "Talent Mapping", desc: "Identify and engage top candidates" },
                    { step: "3", title: "Rigorous Assessment", desc: "Skills, competencies, and cultural alignment" },
                    { step: "4", title: "Onboarding Support", desc: "Ensure successful integration" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 group hover-lift">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent text-white rounded-xl flex items-center justify-center font-semibold flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOT Highlight */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-secondary/20">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <PremiumBadge variant="warm" className="mb-4">
                    <Award className="h-4 w-4 mr-2" />
                    Featured Solution
                  </PremiumBadge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Fractional HR (BOT Model)</h3>
                  <p className="text-muted-foreground mb-6">
                    Our Build-Operate-Transfer model provides flexible, scalable HR operations 
                    without the overhead of building internal teams. Start fast, scale seamlessly, 
                    and transfer when ready.
                  </p>
                  <Button size="lg" className="btn-primary-premium" asChild>
                    <Link to="/services/bot-hr-teams" className="inline-flex items-center">
                      Learn About BOT <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "40%", label: "Cost Savings" },
                    { value: "3x", label: "Faster Scaling" },
                    { value: "100%", label: "Knowledge Transfer" },
                    { value: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm hover-lift card-glow">
                      <div className="text-3xl font-bold text-gradient-warm mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let us help you find, develop, and retain the talent that will 
                drive your organization's success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
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
