import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PartnerLogosSection() {
  const partners = [
    { name: "Zoho", description: "HR & CRM Suite" },
    { name: "Keka", description: "HR & Payroll" },
    { name: "GreytHR", description: "HRMS Platform" },
    { name: "Oracle", description: "Enterprise HCM" },
    { name: "Microsoft", description: "Productivity Suite" }
  ];

  return (
    <section className="py-20 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Technology Partners
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Integrated with Industry Leaders
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We partner with leading HR technology providers to deliver seamless implementation and integration services.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground/60 group-hover:text-primary transition-colors duration-300 mb-1">
                {partner.name}
              </div>
              <span className="text-xs text-muted-foreground">
                {partner.description}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/partners" 
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Partners
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
