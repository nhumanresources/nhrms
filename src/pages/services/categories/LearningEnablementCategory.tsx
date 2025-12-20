import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Briefcase, 
  ArrowRight, 
  BookOpen,
  Target,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const learningServices = [
  {
    icon: BookOpen,
    title: "Learning Solutions",
    description: "Comprehensive training programs for professional development across all organizational levels.",
    link: "/learning-solutions"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Industry-recognized certifications for HR professionals to advance their careers.",
    link: "/services/certifications"
  },
  {
    icon: Briefcase,
    title: "Internship Programs",
    description: "Structured programs for students seeking practical HR experience and career exposure.",
    link: "/services/internship-programs"
  },
  {
    icon: Target,
    title: "Leadership Development",
    description: "Build leadership capabilities across all levels with targeted development programs.",
    link: "/services/leadership-&-professional-development"
  }
];

const programCategories = [
  {
    title: "Technical Skills",
    programs: ["HR Analytics", "Compensation Design", "Talent Management Systems", "Performance Management"]
  },
  {
    title: "Leadership Skills",
    programs: ["Executive Coaching", "Team Leadership", "Change Management", "Strategic Thinking"]
  },
  {
    title: "Soft Skills",
    programs: ["Communication", "Conflict Resolution", "Emotional Intelligence", "Negotiation"]
  },
  {
    title: "Compliance Training",
    programs: ["POSH Awareness", "Labour Laws", "Ethics & Governance", "Diversity & Inclusion"]
  }
];

const stats = [
  { value: "10,000+", label: "Professionals Trained" },
  { value: "200+", label: "Training Programs" },
  { value: "50+", label: "Corporate Clients" },
  { value: "95%", label: "Satisfaction Rate" }
];

export default function LearningEnablementCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Learning & Enablement | HR Training & Certifications | nHRMS"
        description="Develop your HR talent with comprehensive learning solutions, certifications, internship programs, and leadership development. Empowering HR professionals."
        keywords="HR training, HR certifications, leadership development, internship programs, learning solutions, professional development"
      />
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
              alt="Professional training session"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="h-4 w-4 mr-2" />
                Learning & Enablement
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Learning & Enablement
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Empower your HR professionals and future leaders with 
                world-class learning solutions and development programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                  <Link to="/contact">Discuss Training Needs</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 bg-transparent" asChild>
                  <Link to="/learning-solutions">View Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive development solutions for individuals and organizations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {learningServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/30">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      <Link to={service.link} className="flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Programs</h2>
              <p className="text-lg text-muted-foreground">
                Skill development across key competency areas.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.programs.map((program, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{program}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Formats */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible Delivery Formats</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our learning solutions are designed to fit your organization's 
                  preferences and constraints, with multiple delivery options available.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Users, title: "Instructor-Led Training", desc: "In-person workshops with expert facilitators" },
                    { icon: BookOpen, title: "Virtual Classrooms", desc: "Live online sessions with interactive elements" },
                    { icon: TrendingUp, title: "Self-Paced E-Learning", desc: "Flexible modules accessible anytime, anywhere" },
                    { icon: Target, title: "Blended Learning", desc: "Combination of formats for optimal outcomes" }
                  ].map((format, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <format.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{format.title}</h4>
                        <p className="text-sm text-muted-foreground">{format.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Corporate Training Benefits</h3>
                <div className="space-y-3">
                  {[
                    "Customized curriculum aligned to business goals",
                    "Experienced faculty with industry expertise",
                    "Practical, application-oriented learning",
                    "Assessment and certification options",
                    "Post-training reinforcement and support",
                    "Measurable learning outcomes and ROI tracking"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link to="/contact">Request Corporate Training Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Highlight */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
                For Students
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Launch Your HR Career With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our structured internship programs provide hands-on experience, 
                mentorship, and career exposure for aspiring HR professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/services/internship-programs">
                    View Internship Programs <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/careers/internships">
                    Current Openings
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest in Your People</h2>
              <p className="text-xl opacity-90 mb-8">
                Transform your organization through continuous learning and development. 
                Let us design a program tailored to your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <Link to="/learning-solutions">Explore Programs</Link>
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
