
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
      {/* Clean background - no patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ Growing Companies
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            People.{' '}
            <span className="text-primary relative">
              Systems. Success.
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '800ms' }}></div>
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
            Strategic HR consulting that delivers measurable results for modern organizations through people expertise, systematic processes, and proven success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-sm hover:shadow-md transition-all duration-300" asChild>
              <Link to="/services" className="flex items-center">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg rounded-lg transition-all duration-300" asChild>
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Strategic Partnerships</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
