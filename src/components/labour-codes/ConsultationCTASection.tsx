import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function ConsultationCTASection() {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Don't Wait for an Inspection to Discover Your Gaps
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Get clarity on where you stand with a free 30-minute compliance assessment—no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToHero}
              className="bg-white text-primary hover:bg-gray-100 shadow-lg text-lg px-8 py-6"
            >
              Request Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-lg mb-4">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+919052131123"
                className="flex items-center gap-2 text-lg hover:underline"
              >
                <Phone className="h-5 w-5" />
                +91 9052131123
              </a>
              <a 
                href="mailto:marketing.ops@nhrms.com"
                className="flex items-center gap-2 text-lg hover:underline"
              >
                <Mail className="h-5 w-5" />
                marketing.ops@nhrms.com
              </a>
            </div>
          </div>

          <div className="pt-8">
            <p className="text-sm opacity-75">
              ✓ 500+ organizations trust nHRMS for labour code compliance<br/>
              ✓ Zero penalties for our clients during transition period<br/>
              ✓ 15+ years of specialized expertise in Indian labour law
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}