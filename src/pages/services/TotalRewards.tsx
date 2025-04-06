
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, LineChart, PieChart, BarChart4, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TotalRewards() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Total Rewards | nHRMS";
  }, []);

  const services = [
    {
      title: "Compensation Strategy",
      description: "Design market-competitive compensation structures aligned with your business goals and talent strategy.",
      icon: <DollarSign className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Benefits Optimization",
      description: "Develop comprehensive benefits programs that enhance employee wellbeing while managing costs effectively.",
      icon: <LineChart className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Performance-Based Rewards",
      description: "Create incentive plans that drive desired behaviors and outcomes while reinforcing your culture.",
      icon: <BarChart4 className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Total Rewards Analytics",
      description: "Leverage data insights to measure effectiveness and optimize your rewards investments.",
      icon: <PieChart className="h-8 w-8 text-blue-600" />
    }
  ];

  const benefits = [
    "Attract and retain top talent with competitive, market-aligned rewards",
    "Increase employee engagement and satisfaction through tailored programs",
    "Optimize rewards spending for maximum ROI and business impact",
    "Ensure compliance with evolving regulatory requirements",
    "Drive performance and productivity through strategic incentives",
    "Create a rewards strategy that reinforces your company culture"
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
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>Compensation & Benefits</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Total Rewards Strategy
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Design and implement comprehensive rewards programs that attract, retain, and motivate top talent while optimizing your investment.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#services">Explore Our Approach</a>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920" 
                  alt="Business professionals discussing compensation strategy" 
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
              <h2 className="text-3xl font-bold mb-4">Total Rewards Services</h2>
              <p className="text-muted-foreground text-lg">
                Our comprehensive approach to total rewards addresses all aspects of employee compensation and benefits.
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

        {/* Our Approach */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920" 
                  alt="HR professionals in a strategy meeting" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold">Our Approach</h2>
                <p className="text-lg text-muted-foreground">
                  We take a strategic, data-driven approach to designing total rewards programs that align with your business objectives and workforce needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Assessment</h3>
                      <p className="text-muted-foreground">
                        Analyze your current rewards strategy, market positioning, and employee preferences through data analysis and stakeholder input.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Design</h3>
                      <p className="text-muted-foreground">
                        Develop a comprehensive rewards strategy aligned with your business goals, culture, and talent needs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Implementation</h3>
                      <p className="text-muted-foreground">
                        Execute the strategy with careful change management and communication planning to ensure stakeholder buy-in.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Evaluation</h3>
                      <p className="text-muted-foreground">
                        Continuously measure program effectiveness, gather feedback, and refine your approach for maximum impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Strategic Total Rewards</h2>
              <p className="text-muted-foreground text-lg">
                A well-designed total rewards strategy delivers significant value to your organization and employees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start p-4 border border-border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Enhance Your Total Rewards Strategy</h2>
              <p className="text-xl opacity-90 mb-8">
                Partner with us to develop a rewards approach that attracts and retains top talent while optimizing your investment.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/case-studies">View Client Success Stories</Link>
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
