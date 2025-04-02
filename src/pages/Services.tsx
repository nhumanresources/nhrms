
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesMenu from '@/components/ServicesMenu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserSearch, Library, BarChart, Briefcase, Monitor, GraduationCap } from 'lucide-react';
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
      icon: <GraduationCap className="h-12 w-12 text-primary/70" />,
      title: "Academia Solutions",
      description: "Career-oriented programs and learning solutions designed for students and professionals seeking growth and excellence in HR management.",
      link: "/learning-solutions"
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
        {/* Hero Section with artistic background */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-100 via-future-300/30 to-neural-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920')] bg-cover bg-center opacity-10 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-neural-700 bg-clip-text text-transparent">Our Services</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Comprehensive HR management and consulting solutions for organizations seeking excellence in their human capital strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-neural-600 hover:from-neural-600 hover:to-primary transition-all duration-300 shadow-lg" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 shadow-lg" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - with artistic cards */}
        <section className="py-20 bg-gradient-to-b from-background to-future-100/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-neural-600 bg-clip-text text-transparent">Featured Services</h2>
              <p className="text-muted-foreground text-lg">
                Our most sought-after solutions designed to address key HR challenges and opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-future-100/50 to-neural-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <CardHeader className="relative z-10">
                    <div className="mb-4 bg-primary/5 p-4 rounded-lg inline-block">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="relative z-10">
                    <Button variant="ghost" className="group relative overflow-hidden" asChild>
                      <Link to={service.link} className="flex items-center">
                        <span>Learn More</span> 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gradient-to-b from-future-100/20 to-neural-100/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-neural-600 bg-clip-text text-transparent">Our Service Categories</h2>
              <p className="text-muted-foreground text-lg">
                Explore our comprehensive range of HR services organized by category.
              </p>
            </div>

            <ServicesMenu />
          </div>
        </section>

        {/* How We Work - with artistic elements */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-future-100 rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neural-200 rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-neural-600 bg-clip-text text-transparent">How We Work</h2>
              <p className="text-muted-foreground text-lg">
                Our collaborative approach ensures we deliver solutions tailored to your unique needs and challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white shadow-lg p-8 rounded-xl relative border border-future-200/50 hover:border-future-300 transition-all hover:-translate-y-1">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-future-600 to-future-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Discover</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your organization's unique challenges, objectives, and cultural context.
                </p>
              </div>
              
              <div className="bg-white shadow-lg p-8 rounded-xl relative border border-future-200/50 hover:border-future-300 transition-all hover:-translate-y-1">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-future-600 to-future-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Design</h3>
                <p className="text-muted-foreground">
                  We develop tailored solutions and strategies aligned with your business goals and organizational needs.
                </p>
              </div>
              
              <div className="bg-white shadow-lg p-8 rounded-xl relative border border-future-200/50 hover:border-future-300 transition-all hover:-translate-y-1">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-future-600 to-future-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Deliver</h3>
                <p className="text-muted-foreground">
                  We implement solutions with precision, ensuring minimal disruption and maximum stakeholder engagement.
                </p>
              </div>
              
              <div className="bg-white shadow-lg p-8 rounded-xl relative border border-future-200/50 hover:border-future-300 transition-all hover:-translate-y-1">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-gradient-to-br from-future-600 to-future-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">4</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Develop</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support, measurement, and refinement to ensure sustainable long-term results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - with artistic elements */}
        <section className="py-24 bg-gradient-to-br from-future-700/90 to-neural-700/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your HR Function?</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how our services can help you optimize your human capital strategy and drive business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 shadow-lg" asChild>
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
