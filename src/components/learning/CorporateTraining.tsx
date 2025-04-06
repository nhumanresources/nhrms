
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CorporateTraining() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920" 
              alt="Corporate training session" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Custom Corporate Programs</h2>
            <p className="text-lg text-muted-foreground">
              We partner with organizations to develop tailored training programs that address specific skills gaps and business challenges.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Needs Assessment</h3>
                <p className="text-sm text-muted-foreground">Comprehensive analysis of organizational training needs and skills gaps.</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Custom Curriculum</h3>
                <p className="text-sm text-muted-foreground">Tailored content development aligned with your specific business objectives.</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Flexible Delivery</h3>
                <p className="text-sm text-muted-foreground">On-site, virtual, or hybrid training options to suit your organization.</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Impact Measurement</h3>
                <p className="text-sm text-muted-foreground">Robust evaluation frameworks to measure learning outcomes and ROI.</p>
              </div>
            </div>
            
            <Button asChild>
              <Link to="/contact" className="gap-2">
                Discuss Corporate Training <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
