
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, BookCheck, Globe, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LearningServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Learning Solutions | Academia to Corporate | nHRMS";
  }, []);

  const trainingPrograms = [
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
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Learning Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Academia to Corporate Learning Solutions
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Comprehensive training programs designed to bridge the gap between academic knowledge and corporate requirements across Marketing, Finance, Sales, and HR specializations.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link to="/contact" className="gap-2">
                    Request Program Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#programs">Browse Programs</a>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920" 
                  alt="Corporate training session with diverse participants" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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

      {/* Training Programs */}
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
      
      {/* For Organizations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1920" 
                alt="Corporate training session" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold">Custom Corporate Programs</h2>
              <p className="text-lg text-muted-foreground">
                We partner with organizations to develop tailored training programs that address specific skills gaps and business challenges.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Needs Assessment</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive analysis of organizational training needs and skills gaps.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Custom Curriculum</h3>
                  <p className="text-sm text-muted-foreground">Tailored content development aligned with your specific business objectives.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Flexible Delivery</h3>
                  <p className="text-sm text-muted-foreground">On-site, virtual, or hybrid training options to suit your organization.</p>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Impact Measurement</h3>
                  <p className="text-sm text-muted-foreground">Robust evaluation frameworks to measure learning outcomes and ROI.</p>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/contact" className="gap-2">
                  Discuss Corporate Training <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Bridge the Skills Gap?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an individual professional looking to upskill or an organization seeking comprehensive training solutions, our programs provide the knowledge and skills needed for success in today's business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Our Learning Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
