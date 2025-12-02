
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-mesh overflow-hidden">
      {/* Modern background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-bounce-subtle"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border shadow-soft text-sm font-semibold mb-8 animate-fade-in hover:shadow-medium transition-all duration-300">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow"></span>
            Trusted by 500+ Growing Companies
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight animate-fade-in animate-delay-200">
            People.{' '}
            <span className="text-gradient relative inline-block">
              Systems. Success.
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-full transform scale-x-0 animate-scale-in animate-delay-700"></div>
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed text-balance animate-fade-in animate-delay-400">
            Strategic HR consulting that delivers measurable results for modern organizations through people expertise, systematic processes, and proven success.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in animate-delay-500">
            <Button size="xl" variant="modern" className="group shadow-glow" asChild>
              <Link to="/services" className="flex items-center">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button variant="outline" size="xl" className="group hover:shadow-glow hover:border-primary/50" asChild>
              <Link to="/contact" className="flex items-center">
                Schedule Consultation
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-700">
            <div className="card-modern group hover:shadow-glow hover:scale-105 p-8 text-center cursor-default">
              <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-base text-muted-foreground font-medium">Strategic Partnerships</div>
            </div>
            <div className="card-modern group hover:shadow-glow hover:scale-105 p-8 text-center cursor-default">
              <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">20+</div>
              <div className="text-base text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="card-modern group hover:shadow-glow hover:scale-105 p-8 text-center cursor-default">
              <div className="text-4xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
              <div className="text-base text-muted-foreground font-medium">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
