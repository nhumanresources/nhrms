
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LearningHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>Learning Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Academia to Corporate Learning Solutions
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Comprehensive training programs designed to bridge the gap between academic knowledge and corporate requirements across Marketing, Finance, Sales, and HR specializations.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/contact" className="gap-2">
                  Request Program Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#programs">Browse Programs</a>
              </Button>
              <Button asChild>
                <Link to="/courses">Courses</Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920" 
                alt="Corporate training session with diverse participants" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
