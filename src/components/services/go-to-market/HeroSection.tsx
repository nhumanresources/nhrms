
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-future-200 via-future-100/30 to-neural-100/50 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1920')] bg-cover bg-center opacity-15 z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-animation="slide-in-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-future-700 to-neural-600 bg-clip-text text-transparent">Go-to-Market Strategy for HR Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized strategies to bring your HR solutions to market with maximum impact, visibility, and adoption.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Market analysis and competitive positioning</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">HR buyer journey mapping and targeting</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Value proposition development and messaging</p>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-future-700 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">Channel strategy and partnership development</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-future-700 to-neural-600 hover:from-neural-600 hover:to-future-700 transition-all duration-300 shadow-lg" asChild>
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square" data-animation="slide-in-right" data-delay="200">
            <div className="absolute inset-0 bg-gradient-to-br from-future-700/80 via-future-500/50 to-neural-500/30 opacity-80 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1200" 
              alt="Go-to-Market Strategy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Rocket className="w-24 h-24 text-white/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
