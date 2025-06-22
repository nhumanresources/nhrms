
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
      icon: <Monitor className="h-12 w-12 text-blue-600" />,
      title: "HRMS Implementation",
      description: "Complete setup and customization of HR management systems tailored to your business needs.",
      link: "/services/hr-tech"
    },
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Payroll Management", 
      description: "Accurate, compliant payroll processing with automated tax calculations and statutory deductions.",
      link: "/services/payroll-management"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Staffing Solutions",
      description: "Expert recruitment for VLSI, Embedded, and Tech roles with industry-specific expertise.",
      link: "/services/talent-acquisition"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "Compliance & Audit",
      description: "Stay compliant with Indian labor laws, PF, ESI, and other statutory requirements.",
      link: "/services/compliance-audit"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-blue-600" />,
      title: "HR Advisory",
      description: "Strategic HR consulting to optimize your people processes and organizational structure.",
      link: "/services/hr-advisory"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Performance Management",
      description: "Implement robust performance systems and L&D programs to drive employee growth.",
      link: "/services/performance-management"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete HR outsourcing solutions designed for Indian startups, SMEs, and growing businesses.
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
