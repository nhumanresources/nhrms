
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/sections/CTASection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, MapPin, Calendar, ArrowRight } from 'lucide-react';

export default function Internships() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Internship Opportunities | nHRMS";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 lg:pt-28">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-sm font-medium mb-6">
                <GraduationCap className="h-4 w-4 mr-2" />
                <span>Launch Your Career</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Internship Opportunities
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Start your career journey with nHRMS. Our internship programs are designed to provide meaningful experience, mentorship, and a pathway to professional growth.
              </p>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Available Internship Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Bangalore Internship Card */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-blue-50 rounded-t-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">Career Development Program</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" /> Bangalore, India
                        </CardDescription>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        6 Months
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">
                      A comprehensive 6-month program designed to transform promising graduates into industry-ready professionals. Gain experience in Marketing, Finance, Sales, or HR specializations.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Next batch starts: June 10th, 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                      <Link to="/careers/internships/bangalore" className="flex items-center justify-center">
                        View Details <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                {/* New York Internship Card - Coming Soon */}
                <Card className="relative group">
                  <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg z-10">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">
                      Coming Soon
                    </div>
                  </div>
                  <CardHeader className="bg-gray-50 rounded-t-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">Summer Internship Program</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" /> New York, USA
                        </CardDescription>
                      </div>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                        3 Months
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground">
                      An intensive summer internship program focusing on HR consulting, talent acquisition, and executive search. Work alongside seasoned professionals on real client projects.
                    </p>
                    <div className="flex items-center mt-4 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Applications opening: September 2025</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button disabled variant="outline" className="w-full">
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
            
            <Separator className="my-12" />
            
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose an Internship at nHRMS?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Meaningful Experience</h3>
                  <p className="text-muted-foreground">
                    Work on real-world projects that have actual business impact. No coffee runs or busywork — just valuable professional experience.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Dedicated Mentorship</h3>
                  <p className="text-muted-foreground">
                    Each intern is paired with a senior professional who provides guidance, feedback, and career advice throughout the program.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Career Pathways</h3>
                  <p className="text-muted-foreground">
                    Top-performing interns are regularly offered full-time positions. We're committed to developing talent for the long term.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-6">Internship Process</h2>
              <div className="relative">
                <div className="absolute left-7 top-0 h-full w-0.5 bg-blue-100"></div>
                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 z-10">
                      <span className="text-lg font-semibold">1</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <h3 className="font-semibold text-lg">Application</h3>
                      <p className="text-muted-foreground mt-1">
                        Submit your resume, cover letter, and complete a brief questionnaire about your interests and career goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 z-10">
                      <span className="text-lg font-semibold">2</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <h3 className="font-semibold text-lg">Assessment</h3>
                      <p className="text-muted-foreground mt-1">
                        Complete a skills assessment relevant to your area of interest and participate in a video interview with HR.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 z-10">
                      <span className="text-lg font-semibold">3</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <h3 className="font-semibold text-lg">Final Interview</h3>
                      <p className="text-muted-foreground mt-1">
                        Meet with department managers and team members to discuss specific projects and mutual expectations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 z-10">
                      <span className="text-lg font-semibold">4</span>
                    </div>
                    <div className="ml-4 mt-2">
                      <h3 className="font-semibold text-lg">Onboarding</h3>
                      <p className="text-muted-foreground mt-1">
                        Selected candidates receive comprehensive orientation and training before beginning their project work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
