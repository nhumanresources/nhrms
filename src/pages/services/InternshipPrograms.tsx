
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Building, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InternshipPrograms() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Internship Programs | nHRMS";
  }, []);

  const internshipPrograms = [
    {
      title: "HR Analytics Internship",
      location: "Bangalore, India",
      duration: "3 months",
      type: "Full-time",
      description: "Gain hands-on experience with HR data analysis, dashboard creation, and insights generation for business decisions.",
      skills: ["Data Analysis", "Visualization", "Statistical Methods", "HR Metrics"],
      link: "/careers/internships/bangalore"
    },
    {
      title: "Talent Acquisition Internship",
      location: "Remote",
      duration: "6 months",
      type: "Part-time",
      description: "Learn recruitment processes, candidate sourcing, screening, and selection techniques from industry experts.",
      skills: ["Recruiting", "Interviewing", "Sourcing", "Candidate Experience"],
      link: "/contact"
    },
    {
      title: "HR Technology Internship",
      location: "New York, USA",
      duration: "4 months",
      type: "Full-time",
      description: "Work with leading HR technology platforms, implementing solutions and optimizing processes.",
      skills: ["HRIS", "Workflow Automation", "System Configuration", "Process Design"],
      link: "/contact"
    },
    {
      title: "Organizational Development Internship",
      location: "London, UK",
      duration: "6 months",
      type: "Full-time",
      description: "Contribute to culture initiatives, engagement programs, and organizational effectiveness projects.",
      skills: ["Org Design", "Culture Assessment", "Change Management", "Employee Engagement"],
      link: "/contact"
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
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <span>Student Development</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                  Internship Programs
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-xl">
                  Launch your career with real-world experience through our structured internship programs designed to develop future HR leaders.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link to="/careers/internships">View All Programs</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Information</Link>
                  </Button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920" 
                  alt="Students collaborating in an internship program" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Program Benefits</h2>
              <p className="text-muted-foreground text-lg">
                Our internship programs are designed to provide valuable learning experiences and career growth opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Mentorship</h3>
                  <p className="text-muted-foreground">
                    Work directly with experienced professionals who will provide guidance, feedback, and career advice throughout your internship.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Real Projects</h3>
                  <p className="text-muted-foreground">
                    Contribute to meaningful projects with actual business impact, building a portfolio of work that demonstrates your capabilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Learning & Development</h3>
                  <p className="text-muted-foreground">
                    Access specialized training sessions, workshops, and learning resources to build technical and professional skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Available Internships */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Internship Programs</h2>
              <p className="text-muted-foreground text-lg">
                Explore our current internship opportunities across different specializations and locations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {internshipPrograms.map((program, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <Building className="h-3 w-3 mr-1" /> {program.location}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Calendar className="h-3 w-3 mr-1" /> {program.duration}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          <Clock className="h-3 w-3 mr-1" /> {program.type}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to={program.link} className="inline-flex items-center justify-center">
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Start Your HR Career Journey</h2>
              <p className="text-xl opacity-90 mb-8">
                Our internship programs are the perfect way to gain valuable experience, build your network, and launch your career in HR.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/careers/internships">Browse All Internships</Link>
                </Button>
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" size="lg" asChild>
                  <Link to="/contact">Contact Program Coordinators</Link>
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
