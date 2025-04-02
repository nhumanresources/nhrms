
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Calendar, Briefcase, CheckCircle, Clock } from 'lucide-react';

export default function BangaloreInternship() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Bangalore 6-Month Internship Program | nHRMS";
  }, []);

  const handleApplyNow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:krishna@nhrms.com?subject=Application for 6-Month Internship Program&body=Dear Krishna,%0D%0A%0D%0AI am interested in applying for the 6-Month Career Development Program. Please find my attached resume and cover letter.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
  };

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
                <span>Academia to Corporate</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Bangalore 6-Month Career Development Program
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Not just an internship, but a comprehensive career journey designed to transform promising graduates into industry-ready professionals.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm border border-blue-100">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>6 Month Duration</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm border border-blue-100">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  <span>Industry Specific Training</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm border border-blue-100">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Full-time Opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Career Development Journey</h2>
                <p className="text-muted-foreground mb-4">
                  Our 6-month career development program in Bangalore is designed as a comprehensive journey from academia to industry, not just a traditional internship. 
                  We focus on building long-term career foundations with personalized mentorship, professional networking, and career path planning.
                </p>
                <p className="text-muted-foreground">
                  Participants work on meaningful projects with real business impact, develop essential industry skills, and receive guidance on career 
                  progression pathways to set them up for long-term professional growth and success.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Program Structure</h2>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="ml-4">
                    <span className="font-medium">Career Orientation & Foundation (2 weeks)</span>
                    <p className="text-muted-foreground ml-6 mt-1">Introduction to professional work culture, career planning fundamentals, and personal branding development.</p>
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">Specialization Training (4 weeks)</span>
                    <p className="text-muted-foreground ml-6 mt-1">Intensive training in your chosen specialization (Marketing, Finance, Sales or HR) delivered by industry experts.</p>
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">Project Work (16 weeks)</span>
                    <p className="text-muted-foreground ml-6 mt-1">Hands-on experience working on actual projects under the guidance of mentors, building your professional portfolio.</p>
                  </li>
                  <li className="ml-4">
                    <span className="font-medium">Career Planning & Assessment (2 weeks)</span>
                    <p className="text-muted-foreground ml-6 mt-1">Project presentations, performance evaluation, and personalized career roadmap development sessions.</p>
                  </li>
                </ol>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Specialization Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Marketing</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Digital marketing strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Brand management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Content creation & analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Finance</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Financial analysis & reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Budget planning & control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Investment management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Sales</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">B2B & B2C sales strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Client relationship management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Sales analytics & forecasting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3">Human Resources</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Talent acquisition & retention</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Performance management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Employee engagement initiatives</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-blue-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-4">Application Criteria</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Final year students or recent graduates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Strong academic record (minimum 70% throughout)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Relevant coursework in chosen specialization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Strong communication & analytical skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Availability for full 6-month duration</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Monthly stipend</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Career development roadmap</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Opportunity for full-time roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Networking with industry professionals</span>
                  </li>
                </ul>
                
                <Separator className="my-6" />
                
                <div className="text-center">
                  <Button className="w-full mb-3" size="lg" onClick={handleApplyNow}>
                    Apply Now
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Next batch starts on June 10th, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-12" />
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
            <p className="text-muted-foreground mb-6">
              Our career development program is designed to give you the skills, experience, and professional network 
              needed to build a successful long-term career, not just find your first job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={handleApplyNow}>
                Apply for Career Program <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact For Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
