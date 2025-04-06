
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Compass, LineChart, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LeadershipDevelopmentService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Leadership & Professional Development | nHRMS";
  }, []);

  const programs = [
    {
      title: "Emerging Leaders Program",
      description: "Build foundational leadership skills for first-time people managers and high-potential individual contributors.",
      duration: "6 months",
      focus: ["Self-awareness", "Team leadership", "Communication", "Coaching skills", "Execution excellence"]
    },
    {
      title: "Mid-Level Leadership Excellence",
      description: "Elevate the effectiveness of experienced managers leading functions and cross-functional initiatives.",
      duration: "9 months",
      focus: ["Strategic thinking", "Leading through others", "Change leadership", "Building high-performing teams", "Situational leadership"]
    },
    {
      title: "Executive Leadership Mastery",
      description: "Develop enterprise leaders capable of driving organizational transformation and sustainable results.",
      duration: "12 months",
      focus: ["Enterprise leadership", "Strategic influence", "Organizational transformation", "Executive presence", "Stakeholder management"]
    },
    {
      title: "Women in Leadership",
      description: "Specialized program addressing the unique challenges and opportunities for women in leadership roles.",
      duration: "9 months",
      focus: ["Strategic networking", "Executive presence", "Confidence building", "Leading with authenticity", "Work-life integration"]
    }
  ];

  const offerings = [
    {
      title: "Leadership Assessment",
      description: "Comprehensive evaluation of leadership capabilities using validated assessment tools and methodologies.",
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Executive Coaching",
      description: "One-on-one coaching partnerships that accelerate leadership development and effectiveness.",
      icon: <Compass className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Team Development",
      description: "Structured interventions to build high-performing leadership teams aligned around common goals.",
      icon: <Users className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Leadership Analytics",
      description: "Data-driven insights to measure and optimize leadership effectiveness and development.",
      icon: <LineChart className="h-8 w-8 text-blue-600" />
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
                  <Users className="h-4 w-4 mr-2" />
                  <span>Leadership Excellence</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Leadership & Professional Development
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Build exceptional leaders who drive organizational performance, innovation, and engagement through our comprehensive development solutions.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#programs">Explore Our Programs</a>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920" 
                  alt="Leadership team in a strategy discussion" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Development Approach</h2>
              <p className="text-muted-foreground text-lg">
                We believe effective leadership development combines assessment, challenging experiences, coaching, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-center">Assess</h3>
                  <p className="text-muted-foreground text-center">
                    Comprehensive leadership assessment to identify strengths and development areas.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-center">Develop</h3>
                  <p className="text-muted-foreground text-center">
                    Targeted development through workshops, experiences, and personalized learning.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-center">Apply</h3>
                  <p className="text-muted-foreground text-center">
                    Real-world application through challenging assignments and action learning projects.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-center">Sustain</h3>
                  <p className="text-muted-foreground text-center">
                    Continuous growth through coaching, feedback, and ongoing learning communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Programs */}
        <section id="programs" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Development Programs</h2>
              <p className="text-muted-foreground text-lg">
                Our specialized leadership programs address the unique needs of leaders at every level of your organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <div className="flex items-center mb-4 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.focus.map((area, i) => (
                          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link to="/contact">Request Program Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Offerings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Leadership Services</h2>
              <p className="text-muted-foreground text-lg">
                Complement our leadership programs with specialized services that accelerate leader effectiveness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {offerings.map((offering, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          {offering.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-2">{offering.title}</h3>
                        <p className="text-muted-foreground">
                          {offering.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920" 
                  alt="Leadership team celebrating success" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl font-bold">Measurable Leadership Impact</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our leadership development solutions deliver tangible business results that you can measure and see.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">25-40% increase</span> in leadership effectiveness scores as measured by 360° feedback
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">15-20% improvement</span> in employee engagement in teams led by program participants
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">30% reduction</span> in leadership turnover and improved succession readiness
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Measurable improvement</span> in team performance, innovation, and business results
                    </p>
                  </div>
                </div>
                
                <Button className="w-fit" asChild>
                  <Link to="/research/leadership-development-impact">
                    Read Our Leadership Research <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Develop Exceptional Leaders</h2>
              <p className="text-xl opacity-90 mb-8">
                Partner with us to build leadership capabilities that drive performance, engagement, and sustainable business results.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
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
