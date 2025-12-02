
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Calculator, 
  Shield, 
  Monitor, 
  Briefcase, 
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeOfferSection() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Talent Acquisition",
      description: "Strategic recruitment and executive search for specialized roles across technology, engineering, and leadership positions.",
      link: "/services/talent-acquisition"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "HR Advisory & Consulting",
      description: "Strategic HR consulting to optimize organizational structure, policies, and people processes for sustainable growth.",
      link: "/services/hr-advisory"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Leadership Development",
      description: "Executive coaching and leadership development programs to build high-performing management teams.",
      link: "/services/leadership-development"
    },
    {
      icon: <Monitor className="h-12 w-12 text-primary" />,
      title: "HR Technology Solutions",
      description: "Implementation and optimization of HR management systems and digital transformation initiatives.",
      link: "/services/hr-tech"
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Organizational Strategy",
      description: "Design and implement scalable organizational structures aligned with business objectives and growth plans.",
      link: "/services/organization-strategy"
    },
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "BOT HR Teams",
      description: "Build-operate-transfer solutions for complete HR department setup and management.",
      link: "/services/bot-hr-teams"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-modern opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-wave-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Strategic HR Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance">
            Comprehensive HR management and talent acquisition solutions designed to accelerate organizational growth and build exceptional teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-modern card-glow group-hover:scale-105 h-full p-8 cursor-pointer transition-all duration-500">
                <div className="mb-6 p-4 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-balance mb-6">
                  {service.description}
                </p>
                <div className="inline-flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
