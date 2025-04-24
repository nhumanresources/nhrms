import { Globe } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    {
      name: "Keka",
      logo: "https://www.keka.com/assets/images/kekaLogoBlue.svg",
      description: "Leading HR & Payroll Software",
      category: "HR Tech"
    },
    {
      name: "GreytHR",
      logo: "https://www.greythr.com/wp-content/themes/greythr/assets/img/greytHR-logo.svg",
      description: "HR Management Software",
      category: "HR Tech"
    },
    {
      name: "Oracle",
      logo: "https://www.oracle.com/a/ocom/img/rh03-oracle-cloud-infinity-loop.svg",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "Microsoft",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "Google",
      logo: "https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg",
      description: "Enterprise Technology Solutions",
      category: "Enterprise"
    },
    {
      name: "Entries.ai",
      logo: "https://entries.ai/wp-content/uploads/2024/01/entries-logo.svg",
      description: "AI-Powered HR Solutions",
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
              <div className="h-24 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://via.placeholder.com/180x60?text=" + partner.name;
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
