
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, BookOpen, PenTool, Database, BrainCog } from 'lucide-react';
import { toast } from 'sonner';

export default function ResearchOpportunities() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research Associate Job | nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our team as a Research Associate at nHRMS in Whitefield, Bangalore. Contribute to cutting-edge HR research and technology development.');
    }
    
    // Check if the URL has a success parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Your application has been submitted successfully! We will get back to you soon.');
    }
  }, []);

  const handleApplyNow = () => {
    // Create a form and submit it programmatically to the FormSubmit.co service
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/info@nhrms.com';
    
    // Set hidden fields
    const subjectField = document.createElement('input');
    subjectField.type = 'hidden';
    subjectField.name = '_subject';
    subjectField.value = 'Research Associate Application';
    form.appendChild(subjectField);
    
    const captchaField = document.createElement('input');
    captchaField.type = 'hidden';
    captchaField.name = '_captcha';
    captchaField.value = 'false';
    form.appendChild(captchaField);
    
    const nextField = document.createElement('input');
    nextField.type = 'hidden';
    nextField.name = '_next';
    nextField.value = window.location.origin + '/research-opportunities?success=true';
    form.appendChild(nextField);
    
    const messageField = document.createElement('input');
    messageField.type = 'hidden';
    messageField.name = 'message';
    messageField.value = 'I am interested in the Research Associate position at nHRMS in Whitefield, Bangalore.';
    form.appendChild(messageField);
    
    // Hide the form and append to body
    form.style.display = 'none';
    document.body.appendChild(form);
    
    // Submit the form
    setIsSubmitting(true);
    form.submit();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Associate</h1>
              <div className="flex items-center justify-center mb-4 text-muted-foreground">
                <MapPin className="h-5 w-5 mr-2" />
                <p className="text-lg">Whitefield, Bangalore</p>
              </div>
              <p className="text-xl text-muted-foreground">
                Join our team to drive innovation in HR technology and organizational psychology research.
              </p>
            </div>
          </div>
        </section>

        {/* Job Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Position Overview</h2>
              <p className="text-lg mb-8">
                We're looking for a talented Research Associate to join our team in Whitefield, Bangalore. In this role, you'll contribute to innovative research projects in HR technology, organizational psychology, and workforce analytics. You'll work alongside a diverse team of researchers, data scientists, and HR practitioners to develop evidence-based insights and solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                      <p>Full-time position, flexible working hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <BookOpen className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experience</h3>
                      <p>2+ years of research experience preferred</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Responsibilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <PenTool className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Research Design & Execution</h3>
                    <p>Design and implement research methodologies, including surveys, interviews, and data analysis to address key questions in HR and organizational effectiveness.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <Database className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
                    <p>Analyze quantitative and qualitative data using statistical methods and tools to extract meaningful insights and patterns related to workforce trends.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <BrainCog className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Literature Review</h3>
                    <p>Stay current with academic research and industry practices in HR, organizational psychology, and related fields to inform research initiatives.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-start mb-4">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reporting & Communication</h3>
                    <p>Prepare research reports, white papers, and presentations to communicate findings to internal teams and clients in clear, actionable formats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Qualifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Required</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Master's degree in Industrial/Organizational Psychology, HR Management, Analytics, or related field</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Strong quantitative and qualitative research skills</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Proficiency with statistical analysis software (R, SPSS, or similar)</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Excellent written and verbal communication skills</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Preferred</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>2+ years of experience in HR research or consulting</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Experience with data visualization tools (Tableau, Power BI)</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Knowledge of AI/ML applications in HR</p>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p>Publications in relevant academic or professional journals</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Apply Now</h2>
              <p className="text-lg mb-8">
                Join our dynamic team and contribute to groundbreaking research in HR technology and practices at our Whitefield, Bangalore location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={handleApplyNow}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Apply Now'}
                </Button>
                <Button variant="outline" size="lg">
                  <a href="mailto:careers@nhrms.com">careers@nhrms.com</a>
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
