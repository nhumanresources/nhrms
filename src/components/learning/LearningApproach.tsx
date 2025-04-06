
import { GraduationCap, BookCheck, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LearningApproach() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Learning Approach</h2>
          <p className="text-muted-foreground">
            Our training programs are designed by industry experts and academics to provide practical, applicable skills that deliver immediate value in the workplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Industry-Academic Partnership</h3>
              <p className="text-muted-foreground">
                Programs developed collaboratively with leading universities and industry practitioners to bridge theoretical knowledge and practical application.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <BookCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Experiential Learning</h3>
              <p className="text-muted-foreground">
                Hands-on approach with case studies, simulations, and real-world projects that develop practical skills and critical thinking.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Flexible Delivery</h3>
              <p className="text-muted-foreground">
                Programs available in multiple formats - virtual, in-person, or hybrid - to accommodate diverse learning needs and schedules.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
