
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, GraduationCap, Clock, ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Professional Certifications | nHRMS";
  }, []);

  const certificationPrograms = [
    {
      title: "HR Analytics Professional",
      description: "Develop advanced skills in HR data analysis, visualization, and using analytics to drive strategic decisions.",
      duration: "8 weeks",
      format: "Virtual / Hybrid",
      level: "Intermediate to Advanced",
      nextStartDate: "May 15, 2025"
    },
    {
      title: "Compensation & Benefits Specialist",
      description: "Master the design and administration of compensation and benefits programs that attract and retain talent.",
      duration: "10 weeks",
      format: "Virtual / In-person",
      level: "Intermediate",
      nextStartDate: "June 3, 2025"
    },
    {
      title: "Strategic Talent Acquisition",
      description: "Learn advanced recruiting strategies, sourcing techniques, and talent assessment methodologies.",
      duration: "6 weeks",
      format: "Virtual",
      level: "Intermediate to Advanced",
      nextStartDate: "April 22, 2025"
    },
    {
      title: "HR Business Partner Excellence",
      description: "Develop the strategic, consultative, and analytical skills to be an effective HR business partner.",
      duration: "12 weeks",
      format: "Hybrid",
      level: "Advanced",
      nextStartDate: "July 8, 2025"
    }
  ];

  const benefits = [
    "Industry-recognized credentials that validate your expertise",
    "Practical, applicable skills you can immediately use in your role",
    "Access to exclusive professional networks and communities",
    "Career advancement opportunities and increased earning potential",
    "Ongoing professional development and recertification support"
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
                  <Award className="h-4 w-4 mr-2" />
                  <span>Professional Development</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  HR Professional Certifications
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Advance your career with industry-recognized certifications that validate your expertise and expand your professional opportunities.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Request Program Information</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#certifications">View Certification Programs</a>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1594394489018-eac690fd4d17?q=80&w=1920" 
                  alt="Professional receiving certification award" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Get Certified */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Get Certified?</h2>
              <p className="text-muted-foreground text-lg">
                Professional certifications provide valuable credentials that enhance your expertise and career opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Validate Expertise</h3>
                  <p className="text-muted-foreground">
                    Demonstrate your knowledge and skills with credentials recognized across the industry and by employers.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Career Advancement</h3>
                  <p className="text-muted-foreground">
                    Enhance your resume, qualify for promotions, and access new career opportunities with recognized credentials.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Practical Knowledge</h3>
                  <p className="text-muted-foreground">
                    Gain cutting-edge, practical skills that you can immediately apply to improve your performance and impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certification Programs */}
        <section id="certifications" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Certification Programs</h2>
              <p className="text-muted-foreground text-lg">
                Our comprehensive certification programs are designed and delivered by industry experts with real-world experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificationPrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{program.title}</h3>
                        <Badge variant="outline" className="bg-blue-50">Certification</Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">{program.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">{program.format}</span>
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">{program.level}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">Starts: {program.nextStartDate}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full" asChild>
                        <Link to="/contact">
                          Request Program Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold">Benefits of Our Certifications</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our certification programs provide unique advantages that help you stand out in a competitive market.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="w-fit" asChild>
                  <Link to="/contact">
                    Discuss Certification Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1920" 
                  alt="Professionals in a certification course" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Advance Your Career with Professional Credentials</h2>
              <p className="text-xl opacity-90 mb-8">
                Take the next step in your professional journey with certification programs designed to build your expertise and open new opportunities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Request Information</Link>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/services/career-development">Explore Career Development</Link>
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
