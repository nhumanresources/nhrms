import { 
  Users, 
  Calculator, 
  Shield, 
  Monitor, 
  Briefcase, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: Users,
      title: "Talent Acquisition",
      description: "Strategic recruitment and executive search for specialized roles across technology, engineering, and leadership positions.",
      link: "/services/talent-acquisition"
    },
    {
      icon: Briefcase,
      title: "HR Advisory & Consulting",
      description: "Strategic HR consulting to optimize organizational structure, policies, and people processes for sustainable growth.",
      link: "/services/hr-advisory"
    },
    {
      icon: TrendingUp,
      title: "Leadership Development",
      description: "Executive coaching and leadership development programs to build high-performing management teams.",
      link: "/services/leadership-development"
    },
    {
      icon: Monitor,
      title: "HR Technology Solutions",
      description: "Implementation and optimization of HR management systems and digital transformation initiatives.",
      link: "/services/hr-tech"
    },
    {
      icon: Shield,
      title: "Organizational Strategy",
      description: "Design and implement scalable organizational structures aligned with business objectives and growth plans.",
      link: "/services/organization-strategy"
    },
    {
      icon: Calculator,
      title: "Fractional HR Solutions",
      description: "BOT (Build-Operate-Transfer) HR teams - flexible fractional HR solutions for complete department setup and management.",
      link: "/services/bot-hr-teams"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-3">
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Comprehensive HR Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end human resource services designed to help organizations attract, develop, and retain exceptional talent.
          </p>
        </div>
        
        {/* Services Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                to={service.link}
                className="group"
              >
                <div className="flex gap-5 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-200">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
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