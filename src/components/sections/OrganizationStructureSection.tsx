
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function OrganizationStructureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Organizational Structure & Business Problem Solutions</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At nHRMS, we understand that the right organizational structure is fundamental to business success. We leverage our expertise to design and implement structures that align with your strategic objectives.
            </p>
            
            <div className="space-y-6">
              <Card className="border border-border/50 bg-background/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">Executive Organization Design</h3>
                  <p className="text-muted-foreground mb-4">
                    We create executive structures that promote clear accountability, effective decision-making, and strategic alignment across the organization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border/50 bg-background/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">Business Problem Resolution</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team identifies root causes of organizational challenges and implements targeted solutions that drive sustainable improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Button asChild>
                <Link to="/services">
                  Learn More About Our Approach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Executive in professional setting" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-2/3 rounded-lg overflow-hidden shadow-lg border-4 border-white hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Team collaboration in modern workspace" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
