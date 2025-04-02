
import { Target, Building, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function ApproachSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Talent Acquisition Approach</h2>
          <p className="text-muted-foreground">
            We partner with organizations to build high-performing teams that align with business objectives and cultural values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Strategic Talent Planning</h3>
              <p className="text-muted-foreground">
                We work with you to understand your business goals and develop a tailored talent acquisition strategy that aligns with your long-term vision.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Industry Specialization</h3>
              <p className="text-muted-foreground">
                Our recruiters specialize in specific industries and functions, giving us deep insight into talent markets across Sales, Marketing, HR, Finance, and Technology.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Data-Driven Process</h3>
              <p className="text-muted-foreground">
                We leverage analytics and market intelligence to optimize your talent acquisition process, reducing time-to-hire and improving quality-of-hire metrics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
