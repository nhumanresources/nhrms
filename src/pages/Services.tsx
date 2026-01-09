
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesMenu from '@/components/services-menu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserSearch, BarChart, Briefcase, Monitor, GraduationCap, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientOrb, PremiumBadge, ServiceIconWrapper } from '@/components/ui/decorative-elements';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      icon: UserSearch,
      title: "Executive Search",
      description: "Find exceptional leaders who align with your vision.",
      link: "/services/executive-search",
      gradient: 'warm' as const
    },
    {
      icon: FileText,
      title: "HR Advisory",
      description: "Strategic consulting to optimize your human capital strategy.",
      link: "/services/hr-advisory",
      gradient: 'navy' as const
    },
    {
      icon: BarChart,
      title: "Go to Market Strategy",
      description: "Specialized strategies to bring your HR solutions to market.",
      link: "/services/go-to-market",
      gradient: 'accent' as const
    },
    {
      icon: GraduationCap,
      title: "Academia Solutions",
      description: "Career-oriented programs and learning solutions.",
      link: "/learning-solutions",
      gradient: 'warm' as const
    },
    {
      icon: Briefcase,
      title: "Fractional HR Solutions",
      description: "Flexible BOT solutions for HR departments - Build, Operate, Transfer.",
      link: "/services/bot-hr-teams",
      gradient: 'navy' as const
    },
    {
      icon: Monitor,
      title: "HR Technology",
      description: "Implementation and optimization of HR technology systems.",
      link: "/services/hr-tech",
      gradient: 'accent' as const
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Design and run high-impact performance management systems for your organization.",
      link: "/services/performance-management",
      gradient: 'warm' as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section - Premium */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
              alt="Professional team meeting"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/15 via-transparent to-accent/10" />
          </div>

          {/* Decorative orbs */}
          <GradientOrb className="top-10 right-20 opacity-25 animate-float" size="lg" />
          <GradientOrb className="bottom-20 left-10 opacity-15 animate-float-reverse" size="md" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <PremiumBadge variant="warm" className="mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                What We Do
              </PremiumBadge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Comprehensive HR Solutions for 
                <span className="text-gradient-warm"> Modern Organizations</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in font-light" style={{ animationDelay: '100ms' }}>
                End-to-end HR management and consulting services designed to help you build, 
                grow, and transform your workforce for sustainable success.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <Button size="lg" className="btn-primary-premium text-lg px-8 py-6" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Request a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm rounded-xl px-8 py-6 text-lg transition-all duration-300" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - Premium */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
          <GradientOrb className="top-0 right-0 opacity-15 translate-x-1/2 -translate-y-1/2" size="xl" />
          <div className="absolute inset-0 bg-subtle-pattern opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <PremiumBadge variant="light" className="mb-4">
                <Sparkles className="w-4 h-4 text-secondary" />
                Featured
              </PremiumBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Featured <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our most sought-after solutions designed to address key HR challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.link} className="group">
                    <Card className="card-premium h-full hover:border-secondary/40 transition-all duration-300">
                      <CardHeader>
                        <ServiceIconWrapper variant={service.gradient} className="mb-4">
                          <Icon className="w-7 h-7 text-secondary" />
                        </ServiceIconWrapper>
                        <CardTitle className="font-heading text-xl group-hover:text-secondary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <PremiumBadge variant="light" className="mb-4">
                <Sparkles className="w-4 h-4 text-secondary" />
                All Services
              </PremiumBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Explore Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Browse our comprehensive range of services organized by category.
              </p>
            </div>

            <ServicesMenu />
          </div>
        </section>

        {/* How We Work - Premium */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <GradientOrb className="bottom-0 left-0 opacity-10 -translate-x-1/2 translate-y-1/2" size="xl" />
          <div className="absolute inset-0 bg-subtle-pattern opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <PremiumBadge variant="light" className="mb-4">
                <Sparkles className="w-4 h-4 text-secondary" />
                Our Process
              </PremiumBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                How We <span className="text-gradient">Work</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our collaborative approach ensures we deliver solutions tailored to your unique needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: 1, title: 'Discover', desc: "We understand your organization's unique challenges and objectives." },
                { num: 2, title: 'Design', desc: 'We develop tailored solutions aligned with your business goals.' },
                { num: 3, title: 'Deliver', desc: 'We implement solutions with precision and maximum engagement.' },
                { num: 4, title: 'Develop', desc: 'We provide ongoing support and refinement for long-term results.' },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="card-premium p-7 relative group hover:border-secondary/40"
                >
                  <div 
                    className="absolute -top-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 mt-3 group-hover:text-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-transparent to-accent/15" />
          <GradientOrb className="top-0 right-0 opacity-20" size="lg" />
          <GradientOrb className="bottom-0 left-0 opacity-15" size="md" />
          <div className="absolute inset-0 bg-diagonal-pattern opacity-5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <PremiumBadge variant="warm" className="mb-6">
                <Sparkles className="w-4 h-4" />
                Get Started
              </PremiumBadge>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your HR Function?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
                Let's discuss how our services can help you optimize your human capital strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Contact Our Team <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white/40 text-white hover:bg-white/15 bg-white/10 backdrop-blur-sm rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300" 
                  asChild
                >
                  <Link to="/who-we-are">Learn About Our Approach</Link>
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
