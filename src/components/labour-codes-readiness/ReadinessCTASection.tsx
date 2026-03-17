import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReadinessCTASection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Get Your Free Readiness Assessment
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Our team will evaluate your current compliance posture, identify gaps, and provide a clear roadmap — with Legal, Financial, and HR implications mapped out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8 py-6"
              asChild
            >
              <a href="mailto:krishna@nhrms.com?subject=Labour%20Code%20Readiness%20Assessment">
                <Mail className="mr-2 h-5 w-5" /> Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-white/10 text-base px-8 py-6"
              asChild
            >
              <a href="tel:+919052131123">
                <Phone className="mr-2 h-5 w-5" /> +91 9052131123
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/60">
            <span>423+ Organizations Served</span>
            <span>•</span>
            <span>14 Countries</span>
            <span>•</span>
            <span>Zero Compliance Penalties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
