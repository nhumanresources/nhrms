
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, Library, BarChart, Briefcase, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Executive Search",
      description: "Find exceptional leaders through our rigorous executive search practice.",
      link: "/services/executive-search",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1920"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Talent Acquisition",
      description: "Build high-performing teams that drive success across key functional areas.",
      link: "/services/talent-acquisition",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1920"
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "HR Advisory",
      description: "Optimize your HR operations with expert guidance on strategies and policies.",
      link: "/services/hr-advisory",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920"
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Go to Market Strategy",
      description: "Develop effective strategies to bring your HR solutions to market.",
      link: "/services/go-to-market",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1920"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Fractional HR Solutions",
      description: "BOT (Build-Operate-Transfer) HR teams - flexible fractional HR solutions for your organization.",
      link: "/services/bot-hr-teams",
      image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1920"
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Academia Solutions",
      description: "Career-oriented programs for students and professionals seeking growth in HR.",
      link: "/learning-solutions",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Designed to help your organization thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4">
                    <div className="rounded-full bg-white/90 w-12 h-12 flex items-center justify-center text-primary mb-2">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                  <Link to={service.link}>
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
