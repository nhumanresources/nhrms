import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart, Users, Building, Clock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from '@/components/ui/use-toast';

export default function CaseStudies() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLoginPrompt = () => {
    toast({
      title: "Login Required",
      description: "Please login to access full case studies",
      action: (
        <Button asChild variant="default" size="sm">
          <Link to="/login">Login</Link>
        </Button>
      ),
    });
  };

  const caseStudies = [
    {
      title: "Global Pharmaceutical Company HR Transformation",
      industry: "Pharmaceuticals",
      description: "How we helped a global pharmaceutical leader transform their HR operations across 20+ countries, resulting in 35% improved efficiency and $4.2M annual savings.",
      results: ["35% efficiency improvement", "$4.2M annual savings", "Streamlined operations across 20+ countries"],
      icon: <Building className="h-5 w-5" />,
      link: "/case-studies/pharma-hr-transformation",
      content: `
        <h2>Global Pharmaceutical Company HR Transformation</h2>
        
        <h3>Challenge</h3>
        <p>A leading global pharmaceutical company with operations in more than 20 countries was struggling with fragmented HR systems, inconsistent processes, and high administrative costs. Each regional office maintained separate HR operations, creating data silos and preventing consistent talent management across the organization.</p>
        
        <h3>Solution</h3>
        <p>We implemented a comprehensive HR transformation strategy:</p>
        <ul>
          <li>Conducted a thorough assessment of existing HR operations across all regions</li>
          <li>Designed a unified global HR operating model with standardized processes</li>
          <li>Implemented a cloud-based HRIS platform with localized configurations</li>
          <li>Established shared service centers in strategic locations</li>
          <li>Created a data analytics framework for workforce insights</li>
          <li>Trained HR teams on new systems and processes</li>
        </ul>
        
        <h3>Results</h3>
        <p>The transformation delivered significant benefits:</p>
        <ul>
          <li>35% improvement in operational efficiency</li>
          <li>$4.2M in annual cost savings</li>
          <li>Streamlined operations across 20+ countries</li>
          <li>Reduced time-to-hire by 28%</li>
          <li>Improved data quality and compliance reporting</li>
          <li>Enhanced employee experience through consistent service delivery</li>
        </ul>
      `
    },
    {
      title: "Tech Startup Leadership Pipeline Development",
      industry: "Technology",
      description: "Building a robust leadership pipeline for a rapidly growing tech startup, enabling them to scale from 50 to 300 employees while maintaining culture and performance.",
      results: ["6x employee growth managed effectively", "92% leadership retention", "Reduced time-to-hire by 40%"],
      icon: <Users className="h-5 w-5" />,
      link: "/case-studies/tech-leadership-pipeline",
      content: `
        <h2>Tech Startup Leadership Pipeline Development</h2>
        
        <h3>Challenge</h3>
        <p>A high-growth tech startup was experiencing growing pains as it expanded from 50 to 300 employees. The company was struggling to identify, develop, and retain leadership talent to support its rapid scaling. The founder-led management approach was no longer sustainable, and the company needed to establish a structured leadership development program.</p>
        
        <h3>Solution</h3>
        <p>We designed and implemented a comprehensive leadership pipeline strategy:</p>
        <ul>
          <li>Created leadership competency frameworks aligned with company values</li>
          <li>Established assessment processes to identify high-potential employees</li>
          <li>Developed tiered leadership development programs</li>
          <li>Implemented mentoring and coaching initiatives</li>
          <li>Redesigned compensation structures to retain key talent</li>
          <li>Built succession planning processes for critical roles</li>
        </ul>
        
        <h3>Results</h3>
        <p>The leadership pipeline program delivered substantial benefits:</p>
        <ul>
          <li>Successfully managed 6x employee growth</li>
          <li>Achieved 92% leadership retention during rapid scaling</li>
          <li>Reduced time-to-hire for leadership positions by 40%</li>
          <li>70% of leadership positions filled through internal promotion</li>
          <li>Maintained company culture through growth phases</li>
          <li>Increased employee engagement scores by 18%</li>
        </ul>
      `
    },
    {
      title: "Manufacturing Company Workforce Restructuring",
      industry: "Manufacturing",
      description: "Strategic workforce restructuring for a manufacturing company facing industry disruption, preserving critical talent while optimizing operational efficiency.",
      results: ["$3.1M cost reduction", "97% critical talent retention", "18% productivity increase"],
      icon: <Activity className="h-5 w-5" />,
      link: "/case-studies/manufacturing-restructuring",
      content: `
        <h2>Manufacturing Company Workforce Restructuring</h2>
        
        <h3>Challenge</h3>
        <p>A manufacturing company was facing industry disruption and was struggling to maintain operational efficiency while preserving critical talent. The company had multiple regional operations with different HR systems and processes, leading to inefficiencies and data silos.</p>
        
        <h3>Solution</h3>
        <p>We implemented a strategic workforce restructuring strategy:</p>
        <ul>
          <li>Conducted a thorough assessment of existing HR operations across all regions</li>
          <li>Designed a unified global HR operating model with standardized processes</li>
          <li>Implemented a cloud-based HRIS platform with localized configurations</li>
          <li>Established shared service centers in strategic locations</li>
          <li>Created a data analytics framework for workforce insights</li>
          <li>Trained HR teams on new systems and processes</li>
        </ul>
        
        <h3>Results</h3>
        <p>The restructuring delivered significant benefits:</p>
        <ul>
          <li>$3.1M cost reduction</li>
          <li>97% critical talent retention</li>
          <li>18% productivity increase</li>
          <li>Improved data quality and compliance reporting</li>
          <li>Enhanced employee experience through consistent service delivery</li>
        </ul>
      `
    },
    {
      title: "Financial Services HR Analytics Implementation",
      industry: "Financial Services",
      description: "Implementing advanced HR analytics capabilities for a financial services firm, enabling data-driven decision making and predictive workforce insights.",
      results: ["22% improved decision accuracy", "Predictive talent flight risk model", "Integrated dashboards for executives"],
      icon: <BarChart className="h-5 w-5" />,
      link: "/case-studies/financial-hr-analytics",
      content: `
        <h2>Financial Services HR Analytics Implementation</h2>
        
        <h3>Challenge</h3>
        <p>A financial services firm was struggling to make data-driven decisions and identify talent flight risks. The company had limited HR analytics capabilities and relied on manual processes to manage employee data.</p>
        
        <h3>Solution</h3>
        <p>We implemented advanced HR analytics capabilities:</p>
        <ul>
          <li>Developed a comprehensive HR analytics framework</li>
          <li>Implemented predictive talent flight risk models</li>
          <li>Integrated dashboards for executives to monitor workforce performance</li>
          <li>Trained HR teams on data analysis and reporting</li>
        </ul>
        
        <h3>Results</h3>
        <p>The analytics implementation delivered significant benefits:</p>
        <ul>
          <li>22% improved decision accuracy</li>
          <li>Predictive talent flight risk model</li>
          <li>Integrated dashboards for executives</li>
          <li>Enhanced employee engagement scores by 18%</li>
        </ul>
      `
    },
    {
      title: "Healthcare Network Talent Acquisition Strategy",
      industry: "Healthcare",
      description: "Developing a comprehensive talent acquisition strategy for a growing healthcare network, reducing time-to-hire by 40% and improving quality of hires.",
      results: ["40% reduction in time-to-hire", "28% improvement in candidate quality", "Cost-per-hire decreased by 35%"],
      icon: <Clock className="h-5 w-5" />,
      link: "/case-studies/healthcare-talent-acquisition",
      content: `
        <h2>Healthcare Network Talent Acquisition Strategy</h2>
        
        <h3>Challenge</h3>
        <p>A growing healthcare network was struggling to attract and retain top talent due to high competition and changing market demands. The company had limited resources and relied on manual processes to manage talent acquisition.</p>
        
        <h3>Solution</h3>
        <p>We developed a comprehensive talent acquisition strategy:</p>
        <ul>
          <li>Created a talent acquisition framework aligned with company values</li>
          <li>Implemented a data-driven recruitment process</li>
          <li>Developed a candidate tracking system</li>
          <li>Trained HR teams on talent acquisition best practices</li>
        </ul>
        
        <h3>Results</h3>
        <p>The talent acquisition strategy delivered significant benefits:</p>
        <ul>
          <li>40% reduction in time-to-hire</li>
          <li>28% improvement in candidate quality</li>
          <li>Cost-per-hire decreased by 35%</li>
          <li>Enhanced employee engagement scores by 18%</li>
        </ul>
      `
    },
    {
      title: "Retail Chain Employee Experience Redesign",
      industry: "Retail",
      description: "Complete redesign of employee experience for a national retail chain, resulting in 25% reduction in turnover and significant improvements in customer satisfaction.",
      results: ["25% reduction in employee turnover", "18% increase in customer satisfaction", "41% improvement in engagement scores"],
      icon: <Award className="h-5 w-5" />,
      link: "/case-studies/retail-employee-experience",
      content: `
        <h2>Retail Chain Employee Experience Redesign</h2>
        
        <h3>Challenge</h3>
        <p>A national retail chain was struggling with high turnover rates and low customer satisfaction. The company had limited resources and relied on manual processes to manage employee experience.</p>
        
        <h3>Solution</h3>
        <p>We completed a complete redesign of the employee experience:</p>
        <ul>
          <li>Implemented a customer-centric approach to employee engagement</li>
          <li>Developed a training program for employees</li>
          <li>Implemented a performance management system</li>
          <li>Trained HR teams on employee experience best practices</li>
        </ul>
        
        <h3>Results</h3>
        <p>The redesign delivered significant benefits:</p>
        <ul>
          <li>25% reduction in employee turnover</li>
          <li>18% increase in customer satisfaction</li>
          <li>41% improvement in engagement scores</li>
          <li>Enhanced employee engagement scores by 18%</li>
        </ul>
      `
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
                    {isLoggedIn ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="mt-2 group w-full justify-center">
                            Read full case study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{study.title}</DialogTitle>
                            <DialogDescription>
                              Industry: {study.industry}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: study.content }} />
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2 group w-full justify-center"
                        onClick={handleLoginPrompt}
                      >
                        Read full case study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    )}
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
