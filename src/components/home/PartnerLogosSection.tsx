export default function PartnerLogosSection() {
  const partners = [
    { name: "Zoho", logo: "Zoho" },
    { name: "Keka", logo: "Keka" },
    { name: "GreytHR", logo: "GreytHR" }
  ];

  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            System Integrators for HR - Process, Tech & Implementation
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="px-6 py-3"
            >
              <span className="text-xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors duration-200">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Seamless integration with 20+ HR and payroll platforms
          </p>
        </div>
      </div>
    </section>
  );
}