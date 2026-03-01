import { 
  Users, 
  Search, 
  Shield, 
  Monitor, 
  Briefcase, 
  ClipboardCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceIconWrapper, GradientOrb, PremiumBadge } from '@/components/ui/decorative-elements';

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "NPA Worldwide Partner. Find exceptional leaders who align with your organization's vision and drive transformative growth.",
      link: "/services/executive-search",
      gradient: 'warm' as const
    },
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Strategic recruitment and executive search for specialized roles across technology, engineering, and leadership positions.",
      link: "/services/talent-acquisition",
      gradient: 'navy' as const
    },
    {
      icon: Briefcase,
      title: "HR Advisory & Consulting",
      description: "Strategic HR consulting to optimize organizational structure, policies, and people processes for sustainable growth.",
      link: "/services/hr-advisory",
      gradient: 'accent' as const
    },
    {
      icon: Monitor,
      title: "HR Technology Solutions",
      description: "Implementation and optimization of HR management systems and digital transformation initiatives.",
      link: "/services/hr-tech",
      gradient: 'warm' as const
    },
    {
      icon: Shield,
      title: "Compliance & Labour Codes",
      description: "Navigate India's complex labor laws with expert compliance management and new labour code implementation guidance.",
      link: "/labour-codes",
      gradient: 'navy' as const
    },
    {
      icon: ClipboardCheck,
      title: "Work Study & Manpower Productivity",
      description: "Precision work study, time & motion analysis, and manpower productivity consulting for operational excellence.",
      link: "/services/work-study-manpower",
      gradient: 'accent' as const
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-muted/40 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <GradientOrb className="top-20 left-0 opacity-15 -translate-x-1/2" size="xl" />
      <GradientOrb className="bottom-20 right-0 opacity-10 translate-x-1/2" size="lg" />
      <div className="absolute inset-0 bg-subtle-pattern opacity-20" />

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
            End-to-end human resource services designed to help organizations attract, develop, and retain exceptional talent.
          </p>
        </div>
        
        {/* Services Grid - Premium 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={service.link}
                className="group"
              >
                <div className="flex gap-6 p-7 card-premium hover:border-secondary/40 transition-all duration-300">
                  {/* Icon with premium styling */}
                  <div className="flex-shrink-0">
                    <ServiceIconWrapper variant={service.gradient}>
                      <Icon className="w-7 h-7 text-secondary" />
                    </ServiceIconWrapper>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}