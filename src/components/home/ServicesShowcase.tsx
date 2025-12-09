import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, TrendingUp, Monitor, Shield, Calculator, ChevronLeft, ChevronRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Users,
    title: "Talent Acquisition",
    tagline: "Build Your Dream Team",
    description: "Strategic recruitment and executive search across technology, engineering, finance, and leadership positions. We find leaders who transform organizations.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    link: "/services/talent-acquisition",
    stats: "423+ Placements"
  },
  {
    icon: Briefcase,
    title: "HR Advisory",
    tagline: "Strategic HR Excellence",
    description: "Comprehensive HR consulting to optimize your organizational structure, policies, and people processes for sustainable, scalable growth.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800",
    link: "/services/hr-advisory",
    stats: "120+ Clients"
  },
  {
    icon: Calculator,
    title: "Fractional HR Solutions",
    tagline: "Enterprise HR, Your Budget",
    description: "Access experienced HR professionals on demand. Build, operate, and transfer complete HR departments with our flexible BOT model.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
    link: "/services/bot-hr-teams",
    stats: "16+ Years Experience"
  },
  {
    icon: Monitor,
    title: "HR Technology",
    tagline: "Digital Transformation",
    description: "Implement and optimize HR management systems. From selection to deployment, we guide your digital HR transformation journey.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    link: "/services/hr-tech",
    stats: "50+ Implementations"
  },
  {
    icon: TrendingUp,
    title: "Leadership Development",
    tagline: "Grow Future Leaders",
    description: "Executive coaching and leadership programs that build high-performing management teams ready for tomorrow's challenges.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    link: "/services/leadership-development",
    stats: "1000+ Leaders Trained"
  },
  {
    icon: Shield,
    title: "Organization Strategy",
    tagline: "Structure for Success",
    description: "Design scalable organizational structures aligned with your business objectives. We architect the framework for your growth.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    link: "/services/organization-strategy",
    stats: "100+ Organizations"
  },
  {
    icon: Scale,
    title: "Implementation of Labour Codes",
    tagline: "Navigate Compliance with Confidence",
    description: "Expert guidance on India's new labour codes. Assessment, implementation, and ongoing compliance support for your organization.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
    link: "/labour-codes",
    stats: "16+ Years Experience"
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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Comprehensive HR Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end human resource services designed to help organizations attract, develop, and retain exceptional talent across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Featured Service Card */}
          <div className="relative rounded-2xl overflow-hidden h-[500px] group">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full mb-4">
                  {activeService.stats}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-secondary font-medium">{activeService.tagline}</p>
              </div>
              <h3 className="font-heading text-3xl font-bold text-white mb-3">
                {activeService.title}
              </h3>
              <p className="text-white/90 mb-6 max-w-md">
                {activeService.description}
              </p>
              <Button 
                className="w-fit bg-white text-primary hover:bg-white/90" 
                asChild
              >
                <Link to={activeService.link} className="flex items-center">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="absolute top-4 right-4 flex gap-2 lg:hidden">
              <button
                onClick={prevService}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextService}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Service List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className={`group p-6 rounded-xl border transition-all duration-300 ${
                    displayIndex === index
                      ? 'bg-primary border-primary text-white'
                      : 'bg-card border-border hover:border-primary/50 hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    displayIndex === index ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <ServiceIcon className={`w-5 h-5 ${
                      displayIndex === index ? 'text-white' : 'text-primary'
                    }`} />
                  </div>
                  <h3 className={`font-heading font-semibold mb-2 ${
                    displayIndex === index ? 'text-white' : 'text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm ${
                    displayIndex === index ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {service.tagline}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
