
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart, Users, Building, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies = [
    {
      title: "Global Pharmaceutical Company HR Transformation",
      industry: "Pharmaceuticals",
      description: "How we helped a global pharmaceutical leader transform their HR operations across 20+ countries, resulting in 35% improved efficiency and $4.2M annual savings.",
      results: ["35% efficiency improvement", "$4.2M annual savings", "Streamlined operations across 20+ countries"],
      icon: <Building className="h-5 w-5" />,
      link: "/case-studies/pharma-hr-transformation"
    },
    {
      title: "Tech Startup Leadership Pipeline Development",
      industry: "Technology",
      description: "Building a robust leadership pipeline for a rapidly growing tech startup, enabling them to scale from 50 to 300 employees while maintaining culture and performance.",
      results: ["6x employee growth managed effectively", "92% leadership retention", "Reduced time-to-hire by 40%"],
      icon: <Users className="h-5 w-5" />,
      link: "/case-studies/tech-leadership-pipeline"
    },
    {
      title: "Manufacturing Company Workforce Restructuring",
      industry: "Manufacturing",
      description: "Strategic workforce restructuring for a manufacturing company facing industry disruption, preserving critical talent while optimizing operational efficiency.",
      results: ["$3.1M cost reduction", "97% critical talent retention", "18% productivity increase"],
      icon: <Activity className="h-5 w-5" />,
      link: "/case-studies/manufacturing-restructuring"
    },
    {
      title: "Financial Services HR Analytics Implementation",
      industry: "Financial Services",
      description: "Implementing advanced HR analytics capabilities for a financial services firm, enabling data-driven decision making and predictive workforce insights.",
      results: ["22% improved decision accuracy", "Predictive talent flight risk model", "Integrated dashboards for executives"],
      icon: <BarChart className="h-5 w-5" />,
      link: "/case-studies/financial-hr-analytics"
    },
    {
      title: "Healthcare Network Talent Acquisition Strategy",
      industry: "Healthcare",
      description: "Developing a comprehensive talent acquisition strategy for a growing healthcare network, reducing time-to-hire by 40% and improving quality of hires.",
      results: ["40% reduction in time-to-hire", "28% improvement in candidate quality", "Cost-per-hire decreased by 35%"],
      icon: <Clock className="h-5 w-5" />,
      link: "/case-studies/healthcare-talent-acquisition"
    },
    {
      title: "Retail Chain Employee Experience Redesign",
      industry: "Retail",
      description: "Complete redesign of employee experience for a national retail chain, resulting in 25% reduction in turnover and significant improvements in customer satisfaction.",
      results: ["25% reduction in employee turnover", "18% increase in customer satisfaction", "41% improvement in engagement scores"],
      icon: <Award className="h-5 w-5" />,
      link: "/case-studies/retail-employee-experience"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Explore how we've helped organizations solve complex HR challenges and achieve exceptional results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-wave-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="secondary" className="font-medium flex items-center gap-1.5">
                        {study.icon}
                        {study.industry}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base line-clamp-3 mb-4">
                      {study.description}
                    </CardDescription>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-primary">Key Results:</p>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm flex items-start gap-2">
                            <span className="rounded-full bg-green-100 p-0.5 mt-0.5">
                              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="mt-2 group w-full justify-center" asChild>
                      <Link to={study.link}>
                        Read full case study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
}
