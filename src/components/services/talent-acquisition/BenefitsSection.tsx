
import { CheckCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=1920" 
              alt="HR professionals in a meeting" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold">Why Choose Our Talent Acquisition Services</h2>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Industry-Specific Expertise</h3>
                  <p className="text-muted-foreground">Our recruiters specialize in specific sectors, ensuring deep understanding of your talent needs.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">End-to-End Talent Solutions</h3>
                  <p className="text-muted-foreground">From job analysis and sourcing to onboarding and retention strategies.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Cultural Alignment</h3>
                  <p className="text-muted-foreground">We find candidates who not only have the right skills but also fit your organizational culture.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg">Global Talent Reach</h3>
                  <p className="text-muted-foreground">With presence in both the US and India, we can source talent across major global markets.</p>
                </div>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/contact" className="gap-2">
                <Briefcase className="h-4 w-4" /> Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
