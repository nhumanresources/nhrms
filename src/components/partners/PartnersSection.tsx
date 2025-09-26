
import { Globe } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    {
      name: "Keka",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Keka_logo.svg/512px-Keka_logo.svg.png",
      description: "Leading HR & Payroll Software",
      category: "HR Tech"
    },
    {
      name: "Oracle",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "GreytHR",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/GreytHR_logo.svg/512px-GreytHR_logo.svg.png",
      description: "Comprehensive HR & Payroll Platform",
      category: "HR Tech"
    },
    {
      name: "Zoho",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Zoho_logo.svg/512px-Zoho_logo.svg.png",
      description: "Business Software Suite & HR Solutions",
      category: "HR Tech"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Technology Partners</h1>
          <p className="text-lg text-muted-foreground">
            We collaborate with industry-leading technology providers to deliver innovative HR solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-20 flex items-center justify-center mb-6">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-h-16 max-w-[180px] w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/200x80/f97316/ffffff?text=${partner.name}`;
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
