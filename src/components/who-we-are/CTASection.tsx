
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Function?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our team of experts can help you address your most pressing HR challenges and drive business success.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact" className="inline-flex items-center">
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
