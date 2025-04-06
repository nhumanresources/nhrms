
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function LearningCTASection() {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bridge the Skills Gap?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're an individual professional looking to upskill or an organization seeking comprehensive training solutions, our programs provide the knowledge and skills needed for success in today's business environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Our Learning Team</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Our Other Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
