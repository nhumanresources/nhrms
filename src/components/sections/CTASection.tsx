
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
