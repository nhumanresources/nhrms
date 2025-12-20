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
  Users
} from 'lucide-react';

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
        {/* Hero Section - Premium styling for primary category */}
        <section className="relative py-28 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-100 via-future-300/40 to-neural-200/60" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-future-600 to-neural-600 text-white rounded-full text-sm font-semibold mb-6">
                <Monitor className="h-4 w-4 mr-2" />
                Core Expertise
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">
                  HR Technology Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Your trusted Systems Integrator for end-to-end HR technology advisory, 
                implementation, and optimization. Transform your HR function with the right technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-future-600 to-neural-600 hover:from-neural-600 hover:to-future-600 text-white shadow-lg" asChild>
                  <Link to="/contact">Request Technology Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2" asChild>
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-future-600 to-neural-600">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our HR Technology Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive technology solutions across the entire HR technology lifecycle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {hrTechServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-future-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-future-100 to-neural-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-future-200 group-hover:to-neural-200 transition-colors">
                      <service.icon className="h-7 w-7 text-future-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Button variant="ghost" className="p-0 h-auto text-future-600 hover:text-future-700" asChild>
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
              <p className="text-lg text-muted-foreground">
                We bring deep expertise and a proven track record in HR technology transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center border-0 shadow-md">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-future-100 to-neural-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-future-600" />
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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
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
                <div key={index} className="relative">
                  <div className="bg-gradient-to-br from-future-600 to-neural-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
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
        <section className="py-24 bg-gradient-to-br from-future-700 to-neural-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your HR Technology?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let our experts assess your current technology landscape and recommend solutions 
                that drive measurable business value.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" asChild>
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
