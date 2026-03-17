import { ArrowRight, Shield, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReadinessHero() {
  return (
    <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
            <Shield size={16} />
            Labour Code Readiness Assessment
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Is Your Organization Ready for India's{' '}
            <span className="text-accent">New Labour Codes?</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Most advisory firms offer Legal <strong>OR</strong> HR <strong>OR</strong> Finance.
            nHRMS delivers all three — because that's what this transition demands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 py-6"
              asChild
            >
              <a href="mailto:krishna@nhrms.com?subject=Labour%20Code%20Readiness%20Assessment">
                Get Your Free Readiness Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10 text-base px-8 py-6"
              asChild
            >
              <a href="tel:+919052131123">
                Call +91 9052131123
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-accent" />
              <span><strong className="text-primary-foreground">423+</strong> Organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-accent" />
              <span><strong className="text-primary-foreground">14</strong> Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-accent" />
              <span><strong className="text-primary-foreground">Zero</strong> Penalties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
