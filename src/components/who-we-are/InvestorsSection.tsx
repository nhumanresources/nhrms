
import { Building } from 'lucide-react';

export default function InvestorsSection() {
  // Sample investors - replace with actual investors if available
  const investors = [
    {
      name: "Strategic Ventures Capital",
      logo: "/placeholder.svg",
      description: "Early-stage investor focused on HR technology and services"
    },
    {
      name: "Horizon Growth Partners",
      logo: "/placeholder.svg",
      description: "Growth equity firm specializing in professional services"
    },
    {
      name: "Future of Work Fund",
      logo: "/placeholder.svg",
      description: "Dedicated to companies transforming workplace practices"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Partners & Investors</h2>
          <p className="text-lg text-muted-foreground">
            We're backed by partners who share our vision for transforming human resources management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {investors.map((investor, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-primary/70" />
              </div>
              <h3 className="font-bold text-xl mb-2">{investor.name}</h3>
              <p className="text-sm text-muted-foreground">{investor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
