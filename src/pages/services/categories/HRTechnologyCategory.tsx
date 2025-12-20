import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Settings, 
  Search, 
  Layers, 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  Users,
  Sparkles
} from 'lucide-react';
import { GradientOrb, PremiumBadge, ServiceIconWrapper } from '@/components/ui/decorative-elements';

const hrTechServices = [
  {
    icon: Search,
    title: "HR Technology Strategy",
    description: "Comprehensive assessment and roadmap development for your HR technology ecosystem.",
    link: "/services/hr-tech"
  },
  {
    icon: Layers,
    title: "Vendor Selection & Evaluation",
    description: "Vendor-neutral guidance to identify the right technology partners for your needs.",
    link: "/services/hr-tech"
  },
  {
    icon: Settings,
    title: "Implementation & Integration",
    description: "End-to-end implementation support with seamless integration across your tech stack.",
    link: "/services/hr-tech"
  },
  {
    icon: BarChart3,
    title: "HR Analytics & Reporting",
    description: "Transform your HR data into actionable insights with advanced analytics solutions.",
    link: "/services/hr-tech"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Accelerated Time-to-Value",
    description: "Reduce implementation timelines by 40% with our proven methodology."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Vendor-neutral guidance protects against costly technology missteps."
  },
  {
    icon: Users,
    title: "Change Adoption",
    description: "Comprehensive change management ensures high user adoption rates."
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Data-driven approach delivers quantifiable business outcomes."
  }
];

const stats = [
  { value: "100+", label: "HR Tech Implementations" },
  { value: "40%", label: "Faster Go-Live" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "50+", label: "Technology Partners" }
];

export default function HRTechnologyCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="HR Technology Solutions | Systems Integration | nHRMS"
        description="Transform your HR function with expert technology advisory, implementation, and optimization services. Your trusted HR Systems Integrator."
        keywords="HR technology, HRIS implementation, HR systems integrator, HCM solutions, HR tech advisory"
      />
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
          
          {/* Decorative Elements */}
          <GradientOrb className="absolute -top-40 -right-40 opacity-30" size="xl" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-20" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <PremiumBadge variant="light" className="mb-6">
                <Monitor className="h-4 w-4 mr-2" />
                Core Expertise
              </PremiumBadge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                HR Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
                Your trusted Systems Integrator for end-to-end HR technology advisory, 
                implementation, and optimization. Transform your HR function with the right technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-primary-premium" asChild>
                  <Link to="/contact">Request Technology Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-secondary via-secondary/95 to-accent relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover-lift">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-50" />
          <GradientOrb className="absolute top-20 right-10 opacity-10" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <PremiumBadge variant="warm" className="mb-4">
                <Sparkles className="h-4 w-4 mr-2" />
                Our Services
              </PremiumBadge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Our HR Technology Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology solutions across the entire HR technology lifecycle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {hrTechServices.map((service, index) => (
                <Card key={index} className="card-premium group">
                  <CardHeader>
                    <ServiceIconWrapper variant="warm">
                      <service.icon className="h-7 w-7 text-secondary" />
                    </ServiceIconWrapper>
                    <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80 group-hover:translate-x-1 transition-transform" asChild>
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

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-15" size="xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
              <p className="text-lg text-muted-foreground">
                We bring deep expertise and a proven track record in HR technology transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="card-premium text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Implementation Approach</h2>
              <p className="text-lg text-muted-foreground">
                A structured methodology that ensures successful outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Assess", desc: "Evaluate current state and define requirements" },
                { step: "2", title: "Design", desc: "Architect solution and select technology partners" },
                { step: "3", title: "Implement", desc: "Configure, integrate, and deploy with precision" },
                { step: "4", title: "Optimize", desc: "Continuous improvement and value realization" }
              ].map((phase, index) => (
                <div key={index} className="relative group hover-lift">
                  <div className="bg-gradient-to-br from-secondary to-accent text-white w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-diagonal-pattern opacity-20" />
          <GradientOrb className="absolute -top-20 -right-20 opacity-20" size="xl" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-15" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Technology?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let our experts assess your current technology landscape and recommend solutions 
                that drive measurable business value.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/services/hr-tech">Explore Services</Link>
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
