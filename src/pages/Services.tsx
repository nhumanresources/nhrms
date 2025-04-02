
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesMenu from '@/components/ServicesMenu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserSearch, Library, BarChart, Briefcase, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      icon: <UserSearch className="h-12 w-12 text-primary/70" />,
      title: "Executive Search",
      description: "Find exceptional leaders who align with your vision through our rigorous executive search methodology featuring the A-Method© Scorecard framework.",
      link: "/services/executive-search"
    },
    {
      icon: <FileText className="h-12 w-12 text-primary/70" />,
      title: "HR Advisory",
      description: "Strategic consulting to optimize your human capital strategy, organizational design, and HR operations for improved business outcomes.",
      link: "/services/hr-advisory"
    },
    {
      icon: <BarChart className="h-12 w-12 text-primary/70" />,
      title: "Go to Market Strategy",
      description: "Specialized strategies to bring your HR solutions to market with maximum impact, visibility, and adoption across target segments.",
      link: "/services/go-to-market"
    },
    {
      icon: <Library className="h-12 w-12 text-primary/70" />,
      title: "Knowledge Management",
      description: "Stay updated with the latest HR practices and regulatory changes through our comprehensive knowledge management solutions.",
      link: "/services/knowledge-management"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary/70" />,
      title: "BOT HR Teams",
      description: "Complete build-operate-transfer solutions for HR departments tailored to your organization's unique requirements and objectives.",
      link: "/services/bot-hr-teams"
    },
    {
      icon: <Monitor className="h-12 w-12 text-primary/70" />,
      title: "HR Technology",
      description: "Implementation, integration, and optimization of HR technology systems to enhance efficiency and employee experience.",
      link: "/services/hr-tech"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive HR management and consulting solutions for organizations seeking excellence in their human capital strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
              <p className="text-muted-foreground">
                Our most sought-after solutions designed to address key HR challenges and opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Card key={index} className="border border-border/50 hover:shadow-md transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4">
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
                    <Button variant="ghost" className="group" asChild>
                      <Link to={service.link} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
              <p className="text-muted-foreground">
                Explore our comprehensive range of HR services organized by category.
              </p>
            </div>

            <ServicesMenu />
          </div>
        </section>

        {/* How We Work */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground">
                Our collaborative approach ensures we deliver solutions tailored to your unique needs and challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-background border border-border/50 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg">1</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Discover</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your organization's unique challenges, objectives, and cultural context.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg">2</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Design</h3>
                <p className="text-muted-foreground">
                  We develop tailored solutions and strategies aligned with your business goals and organizational needs.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg">3</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Deliver</h3>
                <p className="text-muted-foreground">
                  We implement solutions with precision, ensuring minimal disruption and maximum stakeholder engagement.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg">4</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Develop</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support, measurement, and refinement to ensure sustainable long-term results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Function?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you optimize your human capital strategy and drive business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/who-we-are">Learn About Our Approach</Link>
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
