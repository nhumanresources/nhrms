import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background"></div>
      <div className="absolute inset-0 bg-subtle-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            People.{' '}
            <span className="text-primary">Systems.</span>{' '}
            <span className="text-secondary">Success.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Strategic HR consulting that delivers measurable results for modern organizations through people expertise, systematic processes, and proven success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
              <Link to="/services" className="flex items-center">
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-border bg-card hover:bg-muted text-foreground px-8" asChild>
              <Link to="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators - Clean and Simple */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">16+</div>
              <div className="text-sm text-muted-foreground">Years Across Domains</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">Placements Made</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}