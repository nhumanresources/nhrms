
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Target, Users, TrendingUp, ArrowRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CareerDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Career Development | nHRMS";
  }, []);

  const services = [
    {
      title: "Career Path Frameworks",
      description: "Design clear, flexible career progression paths that align individual growth with organizational needs.",
      icon: <Rocket className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Competency Modeling",
      description: "Develop comprehensive competency models that define success criteria for roles across your organization.",
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Leadership Development",
      description: "Build leadership capabilities at all levels through targeted assessment, coaching, and development programs.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Performance Management",
      description: "Create effective performance management systems that drive development and align with business objectives.",
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />
    }
  ];

  const programs = [
    {
      title: "Early Career Accelerator",
      description: "Structured development program for recent graduates and early-career professionals to build foundational skills.",
      audience: "Entry-level professionals",
      duration: "12 months"
    },
    {
      title: "Emerging Leaders Program",
      description: "Targeted development for high-potential individual contributors preparing for first-time leadership roles.",
      audience: "High-potential individual contributors",
      duration: "9 months"
    },
    {
      title: "Mid-Level Management Excellence",
      description: "Comprehensive program to enhance the capabilities of experienced managers leading teams and functions.",
      audience: "Mid-level managers",
      duration: "6 months"
    },
    {
      title: "Executive Leadership Development",
      description: "Advanced program focusing on strategic leadership, enterprise thinking, and organizational transformation.",
      audience: "Senior leaders and executives",
      duration: "12 months"
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
                  <Rocket className="h-4 w-4 mr-2" />
                  <span>Professional Growth</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Career Development Solutions
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Unlock the full potential of your workforce with strategic career development programs that drive engagement, retention, and performance.
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
                  src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=1920" 
                  alt="Professional development meeting with diverse team" 
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
              <h2 className="text-3xl font-bold mb-4">Our Career Development Services</h2>
              <p className="text-muted-foreground text-lg">
                We provide comprehensive career development solutions that align individual growth with organizational needs.
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
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1920" 
                  alt="Career coaching session" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold">Our Approach</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We take a holistic, integrated approach to career development that connects individual aspirations with organizational needs.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">1</div>
                      Assessment & Discovery
                    </h3>
                    <p className="text-muted-foreground pl-11">
                      Understand individual capabilities, aspirations, and potential through robust assessment tools and career conversations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">2</div>
                      Development Planning
                    </h3>
                    <p className="text-muted-foreground pl-11">
                      Create personalized development plans that blend formal learning, on-the-job experiences, and relationship-based development.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">3</div>
                      Experience & Application
                    </h3>
                    <p className="text-muted-foreground pl-11">
                      Provide structured opportunities to apply new skills through stretch assignments, project work, and cross-functional exposure.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-border">
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">4</div>
                      Feedback & Coaching
                    </h3>
                    <p className="text-muted-foreground pl-11">
                      Deliver ongoing feedback and coaching to accelerate development and build self-awareness and capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Development Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Structured Development Programs</h2>
              <p className="text-muted-foreground text-lg">
                Our targeted development programs address the unique needs of professionals at every career stage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                        Audience: {program.audience}
                      </div>
                      <div className="px-3 py-1 bg-green-50 text-green-700 rounded-full">
                        Duration: {program.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Request Program Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Accelerate Your Talent Development</h2>
              <p className="text-xl opacity-90 mb-8">
                Partner with us to create impactful career development solutions that drive engagement, retention, and business results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="mailto:krishna@nhrms.com">Schedule a Consultation</a>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/services/leadership-&-professional-development">Explore Leadership Development</Link>
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
