
import { Check, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function OurAimSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Aim</h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-primary/5 rounded-xl p-8 shadow-sm border border-primary/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                    <Target className="h-16 w-16 text-primary" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-background border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold text-primary">
                    2035
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Creating 1 Million Jobs by 2035</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We aim to work and collaborate with people and organizations who can create jobs, with a target of 10 Lakh / 1 million jobs by 2035.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button variant="outline" asChild>
                    <Link to="/services" className="flex items-center gap-2">
                      Learn How We Do It <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/40">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Strategic Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Collaborating with job creators across industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Skills Development</h4>
                    <p className="text-sm text-muted-foreground">Building the workforce of tomorrow</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sustainable Growth</h4>
                    <p className="text-sm text-muted-foreground">Creating long-term employment opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
