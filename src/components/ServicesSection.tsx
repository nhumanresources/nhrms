
import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, FileText, Library, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scaleIn } from '@/lib/animations';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Executive Search",
      description: "Find exceptional leaders through our rigorous executive search practice that identifies candidates who align with your vision.",
      link: "/services/executive-search"
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "HR Advisory",
      description: "Optimize your HR operations with expert guidance on strategies, policies, and practices for improved outcomes.",
      link: "/services/hr-advisory"
    },
    {
      icon: <Library className="h-10 w-10" />,
      title: "Knowledge Management",
      description: "Stay updated with the latest labor law changes through our comprehensive knowledge management system.",
      link: "/services/knowledge-management"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Go to Market Strategy & Execution",
      description: "Develop and implement effective strategies to bring your HR solutions to market with maximum impact and efficiency.",
      link: "/services/go-to-market"
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Build Operate and Transfer - HR Teams",
      description: "Complete BOT solutions for HR teams - we build, operate, and transfer fully functional HR departments tailored to your organization.",
      link: "/services/bot-hr-teams"
    }
  ];

  return (
    <div className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Are Good At</h2>
          <p className="text-muted-foreground text-lg">
            Our suite of HR services is designed to help your organization thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 opacity-0" {...scaleIn(200 * index)}>
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
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
      </div>
    </div>
  );
}
