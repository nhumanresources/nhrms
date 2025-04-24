
import { Globe } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    {
      name: "Keka",
      logo: "https://www.keka.com/static/media/kekaLogo.3154c0b0.svg",
      description: "Leading HR & Payroll Software",
      category: "HR Tech",
      website: "https://www.keka.com"
    },
    {
      name: "GreytHR",
      logo: "https://www.greythr.com/content/dam/greythr/logo.svg",
      description: "HR Management Software",
      category: "HR Tech",
      website: "https://www.greythr.com"
    },
    {
      name: "Oracle",
      logo: "https://www.oracle.com/a/ocom/img/oracle-red.svg",
      description: "Enterprise Technology Solutions",
      category: "Enterprise",
      website: "https://www.oracle.com"
    },
    {
      name: "Microsoft",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      description: "Enterprise Technology Solutions",
      category: "Enterprise",
      website: "https://www.microsoft.com"
    },
    {
      name: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      description: "Enterprise Technology Solutions",
      category: "Enterprise",
      website: "https://cloud.google.com"
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
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-muted-foreground mb-4">{partner.description}</p>
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80"
              >
                <Globe className="w-4 h-4 mr-1" />
                Visit Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
