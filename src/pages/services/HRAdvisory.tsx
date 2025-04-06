import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, BarChart, Building, ArrowRight, Briefcase, Users, ShieldCheck, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function HRAdvisory() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">HR Advisory Services</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Strategic HR consulting to optimize your human capital and drive organizational performance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Organizational design and workforce planning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Compensation and benefits strategy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Performance management and talent development</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">HR transformation and technology implementation</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920" 
                  alt="HR professionals in a strategic meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our HR Advisory Services</h2>
              <p className="text-muted-foreground">
                Comprehensive HR solutions tailored to your organization's unique needs and challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Organizational Design</h3>
                <p className="text-muted-foreground">
                  Optimize your organizational structure to align with business strategy and improve operational efficiency.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Organizational structure assessment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Job design and workforce planning
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Role clarity and responsibility mapping
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BadgePercent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Compensation Strategy</h3>
                <p className="text-muted-foreground">
                  Develop competitive and equitable compensation programs that attract, retain, and motivate top talent.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Market benchmarking and analysis
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Total rewards strategy development
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Equity and incentive plan design
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Talent Management</h3>
                <p className="text-muted-foreground">
                  Build robust talent acquisition, development, and retention strategies to drive organizational success.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Talent acquisition strategy
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Learning and development frameworks
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Succession planning and retention
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">HR Compliance & Risk</h3>
                <p className="text-muted-foreground">
                  Ensure regulatory compliance and mitigate workplace risks with comprehensive HR policy development.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    HR policy development and review
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Compliance audits and risk assessments
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Employee relations and conflict resolution
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">HR Transformation</h3>
                <p className="text-muted-foreground">
                  Modernize your HR function to increase efficiency, enhance employee experience, and drive strategic value.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    HR function assessment and redesign
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Process optimization and automation
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    HR technology implementation
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">HR Analytics</h3>
                <p className="text-muted-foreground">
                  Leverage data-driven insights to make informed decisions about your workforce and HR initiatives.
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    HR metrics and KPI development
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Workforce analytics and reporting
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Evidence-based HR strategy development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Consulting Methodology</h2>
              <p className="text-muted-foreground">
                A rigorous framework that ensures we deliver measurable results and sustainable change.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="bg-background rounded-lg p-2">
                <AccordionItem value="phase1">
                  <AccordionTrigger className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">1</span>
                      </div>
                      <span className="font-medium">Discovery & Assessment</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <p className="mb-3">We begin with a comprehensive assessment of your current HR practices, organizational structure, and business objectives.</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                      <li>Stakeholder interviews and focus groups</li>
                      <li>Data collection and analysis</li>
                      <li>Current state assessment and gap analysis</li>
                      <li>Benchmarking against industry best practices</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="phase2">
                  <AccordionTrigger className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">2</span>
                      </div>
                      <span className="font-medium">Strategy Development</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <p className="mb-3">Based on the assessment findings, we develop tailored strategies and recommendations aligned with your business goals.</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                      <li>Strategic option development</li>
                      <li>Business case creation</li>
                      <li>Roadmap and implementation planning</li>
                      <li>Change management strategy</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="phase3">
                  <AccordionTrigger className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">3</span>
                      </div>
                      <span className="font-medium">Implementation & Change Management</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <p className="mb-3">We support you through the implementation process, ensuring smooth adoption and sustainable change.</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                      <li>Program and project management</li>
                      <li>Process redesign and optimization</li>
                      <li>Communication and stakeholder engagement</li>
                      <li>Training and capability building</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="phase4">
                  <AccordionTrigger className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-medium">4</span>
                      </div>
                      <span className="font-medium">Measurement & Optimization</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 pt-1">
                    <p className="mb-3">We measure results against objectives and continuously refine approaches to ensure long-term success.</p>
                    <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                      <li>Key performance indicator tracking</li>
                      <li>ROI measurement and reporting</li>
                      <li>Continuous improvement planning</li>
                      <li>Knowledge transfer and capability building</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h2 className="text-2xl font-bold">Case Study: Global Pharmaceutical Company</h2>
                  <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 md:mt-0">HR Transformation</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  We redesigned the talent management process for a global pharmaceutical company with 15,000+ employees across 40 countries. Our work resulted in a 25% improvement in employee retention and a 30% reduction in time-to-hire, with estimated annual savings of $4.2M from reduced turnover costs.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/case-studies" className="inline-flex items-center">
                    View Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-4">Transform Your HR Function</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our HR advisory services can help you optimize your human capital strategy and drive business results.
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
