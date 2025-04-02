
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function LearningSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = "Learning Solutions - Academia to Corporate | n Human Resources and Management Systems";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Specialized training programs bridging academia to corporate for Marketing, Finance, Sales & HR specialization. Transform your career or organization with our learning solutions.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Academia to Corporate - Bridging the gap between theoretical knowledge and practical application
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button asChild>
                  <a href="#training-programs">View Training Programs</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Approach to Learning</h2>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                We design specialized training programs that help professionals transition from academic knowledge to corporate application, enhancing skills in Marketing, Finance, Sales, and HR domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
                  <GraduationCap size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Academia Foundation</h3>
                  <p className="text-muted-foreground">
                    We build upon academic frameworks, transforming theoretical concepts into practical business applications.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-primary/5 rounded-lg">
                  <BookOpen size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Corporate Application</h3>
                  <p className="text-muted-foreground">
                    Our programs focus on real-world scenarios and industry-specific challenges faced by modern organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Section */}
        <section id="training-programs" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Specialized Training Programs</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Our specialized training programs are designed for professionals at all levels seeking to enhance their skills and knowledge in specific domains.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Marketing Program */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Marketing Specialization</CardTitle>
                  <CardDescription>Strategic Marketing for Modern Businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Digital Marketing Strategies</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Brand Management & Positioning</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Consumer Behavior Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Marketing Analytics & Metrics</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Finance Program */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Finance Specialization</CardTitle>
                  <CardDescription>Financial Management Excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Corporate Financial Analysis</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Investment Strategy & Portfolio Management</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Risk Assessment & Mitigation</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Financial Decision Making</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* Sales Program */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Sales Specialization</CardTitle>
                  <CardDescription>Advanced Sales Techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Consultative Selling Approaches</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Account Management & Growth</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Sales Team Leadership</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Pipeline Management & Forecasting</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              {/* HR Program */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>HR Specialization</CardTitle>
                  <CardDescription>Strategic Human Resource Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Talent Acquisition & Retention</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Performance Management Systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>Organizational Development</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary mt-0.5" />
                      <span>HR Analytics & Decision Making</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Program Delivery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Program Delivery</h2>
              <p className="text-lg mb-12 text-center">
                Our programs are delivered through a combination of formats designed for maximum learning impact
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">In-Person Workshops</h3>
                  <p className="text-muted-foreground">
                    Intensive hands-on sessions with industry experts and interactive learning activities
                  </p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Virtual Learning</h3>
                  <p className="text-muted-foreground">
                    Flexible online modules and live sessions accessible from anywhere in the world
                  </p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Blended Approach</h3>
                  <p className="text-muted-foreground">
                    Combination of in-person and virtual sessions for comprehensive learning experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to discuss your organization's specific learning needs and how our specialized programs can help achieve your goals.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
