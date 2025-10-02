import { Clock, Laptop, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import JobGuaranteeBadge from './JobGuaranteeBadge';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  highlights: string[];
}

export default function CourseCard({ title, description, duration, highlights }: CourseCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="mb-3">
          <JobGuaranteeBadge />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="h-4 w-4" />
            <span>Hybrid Mode</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-semibold text-sm uppercase text-muted-foreground">Key Highlights</h4>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <a href="#inquiry">Inquire Now</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
