
import TrustpilotWidget from '@/components/ui/trustpilot-widget';

export default function PartnerLogosSection() {
  const partners = [
    { name: "Zoho", logo: "Zoho" },
    { name: "Keka", logo: "Keka" },
    { name: "GreytHR", logo: "GreytHR" },
    { name: "Entries.ai", logo: "Entries.ai" },
    { name: "BambooHR", logo: "BambooHR" },
    { name: "Razorpay", logo: "Razorpay" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-gray-600 mb-8">
            Trusted Technology Partners
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-gray-400 font-semibold text-lg">
                {partner.logo}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <TrustpilotWidget variant="micro" className="justify-center" />
          <p className="text-gray-600">
            Seamless integration with 20+ HR and payroll platforms
          </p>
        </div>
      </div>
    </section>
  );
}
