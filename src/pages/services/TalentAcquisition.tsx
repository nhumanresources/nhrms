
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, CheckCircle, ArrowRight, Target, Briefcase, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TalentAcquisition() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Talent Acquisition - Build Teams | nHRMS";
  }, []);

  const industries = [
    { name: 'Sales', description: 'Business development, account management, sales leadership' },
    { name: 'Marketing', description: 'Brand management, digital marketing, market research' },
    { name: 'Human Resources', description: 'HR leadership, talent management, compensation specialists' },
    { name: 'Finance', description: 'Financial analysis, accounting, financial planning' },
    { name: 'Technology', description: 'Software development, IT infrastructure, data science' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium">
                <Users className="h-4 w-4 mr-2" />
                <span>Talent Acquisition Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Building High-Performance Teams That Drive Success
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Our specialized talent acquisition service helps organizations identify, attract, and retain top talent across functional areas including Sales, Marketing, HR, Finance, and Technology.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild>
                  <Link to="/contact" className="gap-2">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=1920" 
                  alt="Diverse team in a modern office environment" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Talent Acquisition Approach</h2>
            <p className="text-muted-foreground">
              We partner with organizations to build high-performing teams that align with business objectives and cultural values.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Strategic Talent Planning</h3>
                <p className="text-muted-foreground">
                  We work with you to understand your business goals and develop a tailored talent acquisition strategy that aligns with your long-term vision.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Industry Specialization</h3>
                <p className="text-muted-foreground">
                  Our recruiters specialize in specific industries and functions, giving us deep insight into talent markets across Sales, Marketing, HR, Finance, and Technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium mb-2">Data-Driven Process</h3>
                <p className="text-muted-foreground">
                  We leverage analytics and market intelligence to optimize your talent acquisition process, reducing time-to-hire and improving quality-of-hire metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Functional Areas We Specialize In</h2>
            <p className="text-muted-foreground">
              Our recruiters bring deep expertise across key business functions to build high-performing teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="border border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Executive
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Mid-level
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Specialized
                    </span>
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
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=1920" 
                alt="HR professionals in a meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl font-bold">Why Choose Our Talent Acquisition Services</h2>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Industry-Specific Expertise</h3>
                    <p className="text-muted-foreground">Our recruiters specialize in specific sectors, ensuring deep understanding of your talent needs.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">End-to-End Talent Solutions</h3>
                    <p className="text-muted-foreground">From job analysis and sourcing to onboarding and retention strategies.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Cultural Alignment</h3>
                    <p className="text-muted-foreground">We find candidates who not only have the right skills but also fit your organizational culture.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">Global Talent Reach</h3>
                    <p className="text-muted-foreground">With presence in both the US and India, we can source talent across major global markets.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild>
                <Link to="/contact" className="gap-2">
                  <Briefcase className="h-4 w-4" /> Get Started
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
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your High-Performance Team?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our talent acquisition experts help you find and retain the best talent for your organization across Sales, Marketing, HR, Finance, and Tech functions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Our Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
