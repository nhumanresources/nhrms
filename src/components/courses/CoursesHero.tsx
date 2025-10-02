import { GraduationCap, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CoursesHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            <GraduationCap className="h-5 w-5 mr-2" />
            <span>Job-Guaranteed Hybrid Courses</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Launch Your Career with 
            <span className="text-primary"> Job-Guaranteed</span> Training
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading hybrid courses combining online flexibility with in-person workshops. 
            Get practical training, work on real-time projects, and secure your dream job.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="#courses" className="gap-2">
                View Courses <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#inquiry">Apply Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
