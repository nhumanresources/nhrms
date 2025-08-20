
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
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Talent Acquisition",
      description: "Strategic recruitment and executive search for specialized roles across technology, engineering, and leadership positions.",
      link: "/services/talent-acquisition"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      title: "HR Advisory & Consulting",
      description: "Strategic HR consulting to optimize organizational structure, policies, and people processes for sustainable growth.",
      link: "/services/hr-advisory"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Leadership Development",
      description: "Executive coaching and leadership development programs to build high-performing management teams.",
      link: "/services/leadership-development"
    },
    {
      icon: <Monitor className="h-12 w-12 text-blue-600" />,
      title: "HR Technology Solutions",
      description: "Implementation and optimization of HR management systems and digital transformation initiatives.",
      link: "/services/hr-tech"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Organizational Strategy",
      description: "Design and implement scalable organizational structures aligned with business objectives and growth plans.",
      link: "/services/organization-strategy"
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "BOT HR Teams",
      description: "Build-operate-transfer solutions for complete HR department setup and management.",
      link: "/services/bot-hr-teams"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic HR management and talent acquisition solutions designed to accelerate organizational growth and build exceptional teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group"
            >
              <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl rounded-2xl">
                <CardContent className="p-8">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Learn More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
