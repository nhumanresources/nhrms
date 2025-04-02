
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, UserSearch, BarChart, Users, ArrowRight, CheckCircle2, FileCheck, Briefcase, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ExecutiveSearch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Executive Search</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Finding exceptional leaders who drive organizational success through our proven executive search methodology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Tailored search strategies aligned with your organizational objectives</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Deep industry knowledge and extensive candidate networks</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comprehensive assessment of leadership capabilities and cultural fit</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Jeff Smart's A-Method© Scorecard for evidence-based selection</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <UserSearch className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Scorecard Framework Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The A-Method© Scorecard Framework</h2>
              <p className="text-muted-foreground">
                Our executive search process incorporates Jeff Smart's renowned A-Method© Scorecard framework to ensure objective, data-driven hiring decisions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="components">Key Components</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">What is the A-Method© Scorecard?</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The A-Method© Scorecard is a structured evaluation framework developed by Jeff Smart that transforms traditional, subjective hiring into an objective, evidence-based process. It provides a consistent method for defining role requirements, evaluating candidates, and making hiring decisions.
                      </p>
                      <p className="text-muted-foreground">
                        Unlike traditional job descriptions that focus on responsibilities and qualifications, the Scorecard focuses on outcomes and competencies, creating a clear definition of what "good" looks like for each role, along with metrics to evaluate success.
                      </p>
                      <div className="mt-6 bg-primary/5 rounded-lg p-6">
                        <div className="flex items-start">
                          <FileCheck className="h-10 w-10 text-primary flex-shrink-0 mt-0.5 mr-4" />
                          <div>
                            <h4 className="font-bold mb-2">The core principle:</h4>
                            <p className="italic">"When you clearly define success before the search begins, you significantly increase the likelihood of making the right hire."</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="components" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">Scorecard Components</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-primary font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-medium mb-2">Mission</h4>
                            <p className="text-muted-foreground">
                              A clear statement of the role's purpose and how it contributes to organizational success. This provides alignment with strategic objectives and sets the context for performance expectations.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-primary font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-medium mb-2">Outcomes</h4>
                            <p className="text-muted-foreground">
                              Specific, measurable results the person in the role must achieve, typically within the first 6-18 months. These are the "what" of the role — concrete accomplishments with timeframes.
                            </p>
                            <ul className="mt-3 pl-5 list-disc text-muted-foreground">
                              <li>3-8 critical outcomes</li>
                              <li>Specific, measurable, and time-bound</li>
                              <li>Aligned with organizational priorities</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-primary font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-medium mb-2">Competencies</h4>
                            <p className="text-muted-foreground">
                              The "how" of the role — behaviors, skills, and traits required for success. These include both technical competencies specific to the role and leadership competencies that align with your organizational culture.
                            </p>
                            <ul className="mt-3 pl-5 list-disc text-muted-foreground">
                              <li>Technical competencies (role-specific expertise)</li>
                              <li>Leadership competencies (cultural and behavioral fit)</li>
                              <li>Each competency includes observable behaviors</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">Benefits of the Scorecard Approach</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Alignment</h4>
                            <p className="text-sm text-muted-foreground">
                              Creates alignment among stakeholders on what success looks like before the search begins.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Objectivity</h4>
                            <p className="text-sm text-muted-foreground">
                              Reduces subjective bias in assessment through specific, measurable criteria.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Focus</h4>
                            <p className="text-sm text-muted-foreground">
                              Keeps the search focused on candidates who can deliver specific outcomes, not just those with impressive backgrounds.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Accountability</h4>
                            <p className="text-sm text-muted-foreground">
                              Provides a clear framework for performance management after hiring.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Interview Quality</h4>
                            <p className="text-sm text-muted-foreground">
                              Enables focused, structured interviews that assess candidates against specific outcomes and competencies.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium mb-1">Onboarding Acceleration</h4>
                            <p className="text-sm text-muted-foreground">
                              Provides new hires with a clear roadmap for success from day one.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                        <div className="flex items-center justify-center mb-4">
                          <Star className="h-6 w-6 text-primary mr-2" />
                          <h4 className="text-xl font-medium">Success Rate</h4>
                          <Star className="h-6 w-6 text-primary ml-2" />
                        </div>
                        <p className="text-center">
                          Organizations using the A-Method© Scorecard approach report a <span className="font-bold">92% success rate</span> with executive hires, compared to the industry average of 50%.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Executive Search Process</h2>
              <p className="text-muted-foreground">
                A systematic and proven approach to identifying and securing the ideal leadership talent for your organization.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Discovery & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  We conduct in-depth consultations to understand your organizational needs, culture, and leadership requirements.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Stakeholder interviews
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Scorecard development
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Search strategy creation
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Search & Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Our team leverages industry networks and proprietary databases to identify and rigorously assess potential candidates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Market mapping & research
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Structured scorecard interviews
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Rigorous reference checking
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Selection & Onboarding</h3>
                <p className="text-muted-foreground mb-4">
                  We facilitate the selection process and provide ongoing support to ensure a smooth transition for the new executive.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Final candidate presentation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Offer negotiation support
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Onboarding & integration planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground">
                Our executive search expertise spans across various sectors, with specialized knowledge of industry-specific leadership requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Technology</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Financial Services</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Healthcare</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Life Sciences</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Manufacturing</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Consumer Goods</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Professional Services</h3>
              </div>
              <div className="bg-background p-6 rounded-lg text-center hover:shadow-md transition-shadow border border-border/50">
                <Briefcase className="h-8 w-8 mx-auto mb-3 text-primary/60" />
                <h3 className="font-medium">Energy & Utilities</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Successful Executive Placements</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">92%</h3>
                <p className="text-muted-foreground">Success Rate with Scorecard Method</p>
              </div>
              <div>
                <div className="flex justify-center mb-4">
                  <UserSearch className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">30+</h3>
                <p className="text-muted-foreground">Industries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Leader?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our executive search services can help you identify and secure exceptional talent for your organization.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
