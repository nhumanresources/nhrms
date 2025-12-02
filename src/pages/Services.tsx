
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesMenu from '@/components/services-menu';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, UserSearch, BarChart, Briefcase, Monitor, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredServices = [
    {
      icon: <UserSearch className="h-10 w-10 text-primary" />,
      title: "Executive Search",
      description: "Find exceptional leaders who align with your vision.",
      link: "/services/executive-search"
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "HR Advisory",
      description: "Strategic consulting to optimize your human capital strategy.",
      link: "/services/hr-advisory"
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Go to Market Strategy",
      description: "Specialized strategies to bring your HR solutions to market.",
      link: "/services/go-to-market"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Academia Solutions",
      description: "Career-oriented programs and learning solutions.",
      link: "/learning-solutions"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Fractional HR Solutions",
      description: "Flexible BOT solutions for HR departments - Build, Operate, Transfer.",
      link: "/services/bot-hr-teams"
    },
    {
      icon: <Monitor className="h-10 w-10 text-primary" />,
      title: "HR Technology",
      description: "Implementation and optimization of HR technology systems.",
      link: "/services/hr-tech"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
              alt="Professional team meeting"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                What We Do
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Comprehensive HR Solutions for 
                <span className="text-secondary"> Modern Organizations</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                End-to-end HR management and consulting services designed to help you build, 
                grow, and transform your workforce for sustainable success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - Simplified */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Services</h2>
              <p className="text-muted-foreground text-lg">
                Our most sought-after solutions designed to address key HR challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="mb-4 p-2 rounded-lg inline-block">
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
                    <Button variant="ghost" asChild>
                      <Link to={service.link} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Services</h2>
              <p className="text-muted-foreground text-lg">
                Browse our comprehensive range of services organized by category.
              </p>
            </div>

            <ServicesMenu />
          </div>
        </section>

        {/* How We Work - Simplified */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground text-lg">
                Our collaborative approach ensures we deliver solutions tailored to your unique needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white shadow p-6 rounded-lg relative border border-border">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Discover</h3>
                <p className="text-muted-foreground">
                  We understand your organization's unique challenges and objectives.
                </p>
              </div>
              
              <div className="bg-white shadow p-6 rounded-lg relative border border-border">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Design</h3>
                <p className="text-muted-foreground">
                  We develop tailored solutions aligned with your business goals.
                </p>
              </div>
              
              <div className="bg-white shadow p-6 rounded-lg relative border border-border">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Deliver</h3>
                <p className="text-muted-foreground">
                  We implement solutions with precision and maximum engagement.
                </p>
              </div>
              
              <div className="bg-white shadow p-6 rounded-lg relative border border-border">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-xl font-medium mb-3 mt-2">Develop</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and refinement for long-term results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Simplified */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your HR Function?</h2>
              <p className="text-xl opacity-90 mb-8">
                Let's discuss how our services can help you optimize your human capital strategy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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
