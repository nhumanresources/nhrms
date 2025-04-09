
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  onApplyNow: () => void;
  isSubmitting: boolean;
}

export default function CTASection({ onApplyNow, isSubmitting }: CTASectionProps) {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Apply Now</h2>
          <p className="text-lg mb-8">
            Join our dynamic team and contribute to groundbreaking research in HR technology and practices at our Whitefield, Bangalore location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onApplyNow}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Apply Now'}
            </Button>
            <Button variant="outline" size="lg">
              <a href="mailto:careers@nhrms.com">careers@nhrms.com</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
