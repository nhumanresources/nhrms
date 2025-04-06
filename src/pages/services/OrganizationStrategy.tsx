
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Network, LayoutGrid, Compass, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OrganizationStrategy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Organization Strategy | nHRMS";
  }, []);

  const services = [
    {
      title: "Organizational Design",
      description: "Create efficient, effective structures that align with your business strategy and enable you to achieve your objectives.",
      icon: <LayoutGrid className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Operating Model Development",
      description: "Define how your organization delivers value through processes, capabilities, technology, and governance.",
      icon: <Network className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Strategic Workforce Planning",
      description: "Align your workforce capabilities with your future business needs through data-driven planning approaches.",
      icon: <Compass className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Change Management & Transformation",
      description: "Navigate complex organizational transformations with structured approaches that ensure stakeholder buy-in.",
      icon: <Building className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
                  <Building className="h-4 w-4 mr-2" />
                  <span>Strategic Consulting</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Organization Strategy
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Design resilient organizational structures and operating models that enable your business strategy and deliver competitive advantage.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#services">Our Approach</a>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920" 
                  alt="Business professionals planning organization strategy" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Organization Strategy Services</h2>
              <p className="text-muted-foreground text-lg">
                We help organizations design structures, operating models, and workforce strategies that enable business success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
              <p className="text-muted-foreground text-lg">
                We follow a structured approach to organizational design and transformation that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                </div>
                <h3 className="text-xl font-medium text-center mb-4">Assess</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Analyze current organizational structure</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Evaluate operating model effectiveness</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Identify pain points and opportunities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Map capabilities to business objectives</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                </div>
                <h3 className="text-xl font-medium text-center mb-4">Design</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Create future-state organization design</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Define roles, responsibilities and decision rights</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Develop governance framework</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Create transition roadmap</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                </div>
                <h3 className="text-xl font-medium text-center mb-4">Implement</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Manage change and communications</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Build necessary capabilities</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Align systems and processes</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">Monitor implementation and refine approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Case Study Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Client Success Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A leading financial services firm needed to restructure their operations to improve efficiency and enable digital transformation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Designed a new operating model that reduced operational costs by 15%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Streamlined decision-making processes, reducing time-to-market by 30%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Implemented the new structure with minimal disruption and high employee engagement
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-6 w-fit" asChild>
                  <Link to="/case-studies/financial-hr-analytics" className="inline-flex items-center">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="lg:col-span-7">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920" 
                    alt="Financial services firm transformation case study" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Organization</h2>
              <p className="text-xl opacity-90 mb-8">
                Partner with us to design an organizational structure and operating model that enables your business strategy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/services">Explore Related Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
