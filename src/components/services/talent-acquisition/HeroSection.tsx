
import { Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
              <Users className="h-4 w-4 mr-2" />
              <span>Talent Acquisition Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Building High-Performance Teams That Drive Success
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Our specialized talent acquisition service helps organizations identify, attract, and retain top talent across functional areas including Sales, Marketing, HR, Finance, and Technology.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/contact" className="gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1920" 
                alt="Diverse team in a modern office environment" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
