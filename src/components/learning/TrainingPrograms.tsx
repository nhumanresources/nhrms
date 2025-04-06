
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Define the program type
type Program = {
  title: string;
  description: string;
  duration: string;
  format: string;
};

// Define the category type
type ProgramCategory = {
  category: string;
  title: string;
  programs: Program[];
};

export default function TrainingPrograms() {
  const trainingPrograms: ProgramCategory[] = [
    {
      category: "marketing",
      title: "Marketing Training Programs",
      programs: [
        {
          title: "Digital Marketing Mastery",
          description: "Comprehensive program covering SEO, SEM, social media marketing, and analytics for modern marketers.",
          duration: "8 weeks",
          format: "Hybrid"
        },
        {
          title: "Brand Management Excellence",
          description: "Learn strategic brand positioning, development, and management techniques for building lasting brands.",
          duration: "6 weeks",
          format: "In-person"
        },
        {
          title: "Marketing Analytics & Insights",
          description: "Develop skills to interpret data, uncover insights, and make data-driven marketing decisions.",
          duration: "4 weeks",
          format: "Virtual"
        }
      ]
    },
    {
      category: "finance",
      title: "Finance Training Programs",
      programs: [
        {
          title: "Financial Analysis & Modeling",
          description: "Master financial modeling techniques, valuation methods, and analytical frameworks used in corporate finance.",
          duration: "10 weeks",
          format: "Hybrid"
        },
        {
          title: "Corporate Finance for Decision-Making",
          description: "Learn how to evaluate investment opportunities, manage risk, and optimize capital allocation.",
          duration: "8 weeks",
          format: "In-person"
        },
        {
          title: "Financial Leadership & Strategy",
          description: "Develop financial leadership skills to drive strategic value creation in organizations.",
          duration: "6 weeks",
          format: "Virtual"
        }
      ]
    },
    {
      category: "sales",
      title: "Sales Training Programs",
      programs: [
        {
          title: "Consultative Selling Techniques",
          description: "Learn customer-centric sales approaches to build relationships and deliver value-based solutions.",
          duration: "6 weeks",
          format: "Hybrid"
        },
        {
          title: "Sales Leadership & Team Management",
          description: "Develop skills to lead high-performing sales teams, set effective targets, and drive performance.",
          duration: "8 weeks",
          format: "In-person"
        },
        {
          title: "Strategic Account Management",
          description: "Master techniques for growing key accounts and creating long-term customer partnerships.",
          duration: "4 weeks",
          format: "Virtual"
        }
      ]
    },
    {
      category: "hr",
      title: "HR Training Programs",
      programs: [
        {
          title: "Strategic HR Business Partnership",
          description: "Learn to align HR initiatives with business goals and become a strategic partner to leadership.",
          duration: "8 weeks",
          format: "Hybrid"
        },
        {
          title: "Talent Acquisition & Management",
          description: "Master modern recruitment strategies, assessments, and talent development techniques.",
          duration: "6 weeks",
          format: "In-person"
        },
        {
          title: "HR Analytics & Decision Making",
          description: "Develop skills to leverage data for workforce planning, performance measurement, and strategic decisions.",
          duration: "6 weeks",
          format: "Virtual"
        }
      ]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Specialized Training Programs</h2>
          <p className="text-muted-foreground">
            Explore our comprehensive training programs designed for professionals across critical business functions.
          </p>
        </div>
        
        <Tabs defaultValue="marketing" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8">
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="hr">Human Resources</TabsTrigger>
          </TabsList>
          
          {trainingPrograms.map((category) => (
            <TabsContent key={category.category} value={category.category} className="mt-6">
              <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.programs.map((program, index) => (
                  <Card key={index} className="border border-border/50">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-medium mb-2">{program.title}</h4>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4 text-blue-600" />
                          <span>{program.format}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                          <span>{program.duration}</span>
                        </span>
                      </div>
                      
                      <Button variant="outline" className="w-full mt-4" asChild>
                        <Link to="/contact">Get Program Details</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
