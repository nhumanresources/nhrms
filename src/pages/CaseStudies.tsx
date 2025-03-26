
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      title: "Global Pharmaceutical Company HR Transformation",
      industry: "Pharmaceuticals",
      description: "How we helped a global pharmaceutical leader transform their HR operations across 20+ countries, resulting in 35% improved efficiency and $4.2M annual savings.",
      link: "#"
    },
    {
      title: "Tech Startup Leadership Pipeline Development",
      industry: "Technology",
      description: "Building a robust leadership pipeline for a rapidly growing tech startup, enabling them to scale from 50 to 300 employees while maintaining culture and performance.",
      link: "#"
    },
    {
      title: "Manufacturing Company Workforce Restructuring",
      industry: "Manufacturing",
      description: "Strategic workforce restructuring for a manufacturing company facing industry disruption, preserving critical talent while optimizing operational efficiency.",
      link: "#"
    },
    {
      title: "Financial Services HR Analytics Implementation",
      industry: "Financial Services",
      description: "Implementing advanced HR analytics capabilities for a financial services firm, enabling data-driven decision making and predictive workforce insights.",
      link: "#"
    },
    {
      title: "Healthcare Network Talent Acquisition Strategy",
      industry: "Healthcare",
      description: "Developing a comprehensive talent acquisition strategy for a growing healthcare network, reducing time-to-hire by 40% and improving quality of hires.",
      link: "#"
    },
    {
      title: "Retail Chain Employee Experience Redesign",
      industry: "Retail",
      description: "Complete redesign of employee experience for a national retail chain, resulting in 25% reduction in turnover and significant improvements in customer satisfaction.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Explore how we've helped organizations solve complex HR challenges and achieve exceptional results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-2">{study.industry}</div>
                    <CardTitle className="line-clamp-2">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-4">
                      {study.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                      <Link to={study.link}>
                        Read case study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
