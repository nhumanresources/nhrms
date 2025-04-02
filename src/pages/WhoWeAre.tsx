import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, Award, Globe, ArrowRight, Calendar, BookOpen, Briefcase, Linkedin, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title and meta description for SEO
    document.title = "Who are we | n Human Resources and Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about n Human Resources and Management Systems (nHRMS), a leading HR management consulting firm dedicated to helping organizations optimize their human capital.');
    }
  }, []);

  const leadershipTeam = [
    {
      name: "Sai Varma",
      title: "Partner, CEO",
      bio: "With over 20 years of experience in HR consulting, Sai has led transformational HR initiatives for Fortune 500 companies across multiple industries.",
      linkedin: "https://linkedin.com/in/saikrshna/"
    },
    {
      name: "Usha Sai",
      title: "Partner, COO",
      bio: "Usha brings 15+ years of operational leadership experience, specializing in scaling professional services organizations and optimizing service delivery.",
      linkedin: "https://linkedin.com/in/ushasai/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who are we</h1>
              <p className="text-xl text-muted-foreground">
                n Human Resources and Management Systems (nHRMS) is a leading HR management consulting firm dedicated to helping organizations optimize their human capital and achieve business success through strategic HR solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Our Aim Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Our Aim</h2>
                <div className="h-1 w-20 bg-primary mx-auto"></div>
              </div>
              
              <div className="bg-primary/5 rounded-xl p-8 shadow-sm border border-primary/10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                        <Target className="h-16 w-16 text-primary" />
                      </div>
                      <div className="absolute -top-3 -right-3 bg-background border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center text-sm font-bold text-primary">
                        2035
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4">Creating 1 Million Jobs by 2035</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      We aim to work and collaborate with people and organizations who can create jobs, with a target of 10 Lakh / 1 million jobs by 2035.
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <Button variant="outline" asChild>
                        <Link to="/services" className="flex items-center gap-2">
                          Learn How We Do It <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border/40">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Strategic Partnerships</h4>
                        <p className="text-sm text-muted-foreground">Collaborating with job creators across industries</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Skills Development</h4>
                        <p className="text-sm text-muted-foreground">Building the workforce of tomorrow</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sustainable Growth</h4>
                        <p className="text-sm text-muted-foreground">Creating long-term employment opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We empower organizations to achieve exceptional performance through their people by delivering innovative, tailored HR solutions that align human capital strategy with business objectives.
                </p>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted HR management consulting partner, recognized globally for our expertise, innovation, and measurable impact on organizational success.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Excellence</h3>
                      <p className="text-muted-foreground">We are committed to delivering exceptional quality and results in everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Innovation</h3>
                      <p className="text-muted-foreground">We continuously seek new and better ways to solve complex HR challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Integrity</h3>
                      <p className="text-muted-foreground">We operate with the highest ethical standards and unwavering commitment to doing what's right.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Partnership</h3>
                      <p className="text-muted-foreground">We build collaborative relationships with our clients based on trust, respect, and shared success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Founded in 2009</h3>
                    <p className="text-muted-foreground">
                      nHRMS was founded by a team of experienced HR executives with a vision to transform how organizations approach human capital management. Starting with a focus on executive search, we quickly expanded our services to address the full spectrum of HR challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Global Expansion</h3>
                    <p className="text-muted-foreground">
                      By 2015, we had established a presence in key markets across North America, Europe, and Asia, allowing us to serve multinational clients with consistent quality and local expertise.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Innovation & Thought Leadership</h3>
                    <p className="text-muted-foreground">
                      Throughout our journey, we've maintained a commitment to innovation and thought leadership, regularly publishing research and developing proprietary methodologies to address emerging HR challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Today</h3>
                    <p className="text-muted-foreground">
                      Today, nHRMS stands as a trusted partner to hundreds of organizations worldwide, from fast-growing startups to Fortune 500 companies, helping them build and maintain world-class HR functions that drive business success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
              <p className="text-muted-foreground">
                Led by experienced professionals with deep expertise in HR and business strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="bg-background border border-border/50 rounded-lg overflow-hidden hover:shadow-md transition-shadow p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                      <p className="text-primary text-sm">{leader.title}</p>
                    </div>
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${leader.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">16+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-muted-foreground">Clients Served</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3</div>
                <p className="text-muted-foreground">Global Offices</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-muted-foreground">HR Consultants</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Function?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our team of experts can help you address your most pressing HR challenges and drive business success.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
