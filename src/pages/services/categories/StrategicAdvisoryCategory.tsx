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
  Users
} from 'lucide-react';

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
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                <Target className="h-4 w-4 mr-2" />
                Strategic Advisory
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Strategic HR Advisory
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Partner with seasoned HR strategists to transform your organization, 
                build leadership capabilities, and drive sustainable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                  <Link to="/contact">Schedule Advisory Session</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link to="/who-we-are">Meet Our Advisors</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advisory Services</h2>
              <p className="text-lg text-muted-foreground">
                C-suite level guidance for your most critical HR and organizational challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {advisoryServices.map((service, index) => (
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

        {/* Client Outcomes Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Outcomes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our strategic advisory engagements consistently deliver measurable impact 
                  across key organizational metrics.
                </p>
                <div className="space-y-4">
                  {clientOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-primary mb-2">16+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-primary mb-2">423+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Executives Placed</div>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
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
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <audience.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{audience.title}</h3>
                    <p className="text-sm text-muted-foreground">{audience.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Strategic Transformation?</h2>
              <p className="text-xl opacity-90 mb-8">
                Schedule a confidential discussion with our senior advisors to explore 
                how we can support your organization's strategic objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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
