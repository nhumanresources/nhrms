
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">
            Hear from organizations that have transformed their HR functions with nHRMS
          </p>
        </div>
        
        <Tabs defaultValue="testimonial-0" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {testimonials.map((testimonial, index) => (
              <TabsTrigger key={index} value={`testimonial-${index}`}>
                {testimonial.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {testimonials.map((testimonial, index) => (
            <TabsContent key={index} value={`testimonial-${index}`} className="mt-0">
              <Card className="border border-border/50 shadow-sm">
                <CardContent className="p-8">
                  <div className="mb-4 text-primary">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-medium text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/case-studies" className="inline-flex items-center">
              Read Our Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
