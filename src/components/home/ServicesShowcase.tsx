import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, TrendingUp, Monitor, Shield, Calculator, ChevronLeft, ChevronRight, Scale, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceIconWrapper, GradientOrb, PremiumBadge } from '@/components/ui/decorative-elements';

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    tagline: "Build Your Dream Team",
    description: "Strategic recruitment and executive search across technology, engineering, finance, and leadership positions. We find leaders who transform organizations.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    link: "/services/talent-acquisition",
    stats: "423+ Placements",
    gradient: 'warm' as const
  },
  {
    icon: Briefcase,
    title: "HR Advisory",
    tagline: "Strategic HR Excellence",
    description: "Comprehensive HR consulting to optimize your organizational structure, policies, and people processes for sustainable, scalable growth.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    link: "/services/hr-advisory",
    stats: "120+ Clients",
    gradient: 'navy' as const
  },
  {
    icon: Calculator,
    title: "Fractional HR Solutions",
    tagline: "Enterprise HR, Your Budget",
    description: "Access experienced HR professionals on demand. Build, operate, and transfer complete HR departments with our flexible BOT model.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
    link: "/services/bot-hr-teams",
    stats: "16+ Years Experience",
    gradient: 'accent' as const
  },
  {
    icon: Monitor,
    title: "HR Technology",
    tagline: "Digital Transformation",
    description: "Implement and optimize HR management systems. From selection to deployment, we guide your digital HR transformation journey.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    link: "/services/hr-tech",
    stats: "50+ Implementations",
    gradient: 'warm' as const
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    tagline: "Grow Future Leaders",
    description: "Executive coaching and leadership programs that build high-performing management teams ready for tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    link: "/services/leadership-development",
    stats: "1000+ Leaders Trained",
    gradient: 'navy' as const
  },
  {
    icon: Shield,
    title: "Organization Strategy",
    tagline: "Structure for Success",
    description: "Design scalable organizational structures aligned with your business objectives. We architect the framework for your growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    link: "/services/organization-strategy",
    stats: "100+ Organizations",
    gradient: 'accent' as const
  },
  {
    icon: Scale,
    title: "Implementation of Labour Codes",
    tagline: "Navigate Compliance with Confidence",
    description: "Expert guidance on India's new labour codes. Assessment, implementation, and ongoing compliance support for your organization.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    link: "/labour-codes",
    stats: "16+ Years Experience",
    gradient: 'warm' as const
  }
];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
  const activeService = services[displayIndex];
  const Icon = activeService.icon;

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <GradientOrb className="top-0 right-0 opacity-20 -translate-y-1/2 translate-x-1/2" size="xl" />
      <GradientOrb className="bottom-0 left-0 opacity-15 translate-y-1/2 -translate-x-1/2" size="lg" />
      <div className="absolute inset-0 bg-subtle-pattern opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <PremiumBadge variant="light" className="mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            What We Do
          </PremiumBadge>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">HR Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            End-to-end human resource services designed to help organizations attract, develop, and retain exceptional talent across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Featured Service Card - Premium Design */}
          <div className="relative rounded-3xl overflow-hidden h-[550px] group card-glow">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-5">
                <PremiumBadge variant="warm">
                  {activeService.stats}
                </PremiumBadge>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <ServiceIconWrapper variant={activeService.gradient}>
                  <Icon className="w-7 h-7 text-secondary" />
                </ServiceIconWrapper>
                <p className="text-secondary font-semibold text-lg">{activeService.tagline}</p>
              </div>
              <h3 className="font-heading text-4xl font-bold text-white mb-4">
                {activeService.title}
              </h3>
              <p className="text-white/90 mb-8 max-w-md text-lg leading-relaxed">
                {activeService.description}
              </p>
              <Button 
                className="w-fit btn-primary-premium" 
                asChild
              >
                <Link to={activeService.link} className="flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="absolute top-4 right-4 flex gap-2 lg:hidden">
              <button
                onClick={prevService}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/25 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextService}
                className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/25 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Service List - Premium Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const isActive = displayIndex === index;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className={`group p-6 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-primary to-primary/90 border-primary text-white shadow-hard'
                      : 'card-premium'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-gradient-to-br from-secondary/15 to-accent/10 group-hover:from-secondary/25 group-hover:to-accent/15'
                  }`}>
                    <ServiceIcon className={`w-6 h-6 transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-secondary'
                    }`} />
                  </div>
                  <h3 className={`font-heading font-semibold text-lg mb-2 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-foreground group-hover:text-secondary'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-white/85' : 'text-muted-foreground'
                  }`}>
                    {service.tagline}
                  </p>
                  <div className={`flex items-center gap-1 mt-3 text-sm font-medium transition-all duration-300 ${
                    isActive ? 'text-white/90 translate-x-0' : 'text-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
                  }`}>
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
