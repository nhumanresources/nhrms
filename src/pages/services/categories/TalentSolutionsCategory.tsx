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
  DollarSign
} from 'lucide-react';

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
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                <Users className="h-4 w-4 mr-2" />
                Talent Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Talent Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Comprehensive talent management solutions to attract, develop, 
                and retain the best people for your organization.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                  <Link to="/contact">Discuss Your Talent Needs</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link to="/services/talent-acquisition">Explore Recruitment</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Talent Services</h2>
              <p className="text-lg text-muted-foreground">
                From sourcing to retention, we provide end-to-end talent management solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {talentServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our talent solutions are tailored to the unique requirements 
                  of diverse industries and organizational contexts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Our Talent Acquisition Process</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Requirements Analysis", desc: "Deep dive into role and culture fit" },
                    { step: "2", title: "Talent Mapping", desc: "Identify and engage top candidates" },
                    { step: "3", title: "Rigorous Assessment", desc: "Skills, competencies, and cultural alignment" },
                    { step: "4", title: "Onboarding Support", desc: "Ensure successful integration" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold flex-shrink-0">
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                    Featured Solution
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Fractional HR (BOT Model)</h3>
                  <p className="text-muted-foreground mb-6">
                    Our Build-Operate-Transfer model provides flexible, scalable HR operations 
                    without the overhead of building internal teams. Start fast, scale seamlessly, 
                    and transfer when ready.
                  </p>
                  <Button asChild>
                    <Link to="/services/bot-hr-teams" className="inline-flex items-center">
                      Learn About BOT <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Cost Savings</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">3x</div>
                    <div className="text-sm text-muted-foreground">Faster Scaling</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Knowledge Transfer</div>
                  </div>
                  <div className="bg-background rounded-lg p-6 text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Team?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let us help you find, develop, and retain the talent that will 
                drive your organization's success.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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
