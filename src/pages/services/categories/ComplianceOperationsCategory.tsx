import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  FileCheck, 
  Scale, 
  BookOpen, 
  ArrowRight, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Phone,
  Sparkles
} from 'lucide-react';
import { GradientOrb, PremiumBadge, ServiceIconWrapper } from '@/components/ui/decorative-elements';

const complianceServices = [
  {
    icon: Shield,
    title: "HR Compliance Services",
    description: "Comprehensive compliance management including policy development, audits, and ongoing monitoring.",
    link: "/services/compliance"
  },
  {
    icon: Scale,
    title: "Labour Codes Compliance",
    description: "Navigate India's new labour code framework with expert guidance and implementation support.",
    link: "/labour-codes"
  },
  {
    icon: FileCheck,
    title: "Statutory Compliance",
    description: "Timely management of PF, ESI, Gratuity, LWF, and other statutory obligations.",
    link: "/services/compliance"
  },
  {
    icon: BookOpen,
    title: "POSH & Workplace Safety",
    description: "Create safe workplaces with POSH compliance, ICC formation, and safety protocols.",
    link: "/services/compliance"
  }
];

const riskStats = [
  { 
    icon: AlertTriangle, 
    title: "₹10 Lakhs+", 
    subtitle: "Potential Penalties",
    description: "Non-compliance fines can reach significant amounts"
  },
  { 
    icon: Clock, 
    title: "100+ Laws", 
    subtitle: "To Navigate",
    description: "Central and state-level labor regulations"
  },
  { 
    icon: Shield, 
    title: "16+ Years", 
    subtitle: "Experience",
    description: "Navigating India's complex labor law landscape"
  },
  { 
    icon: CheckCircle, 
    title: "Zero", 
    subtitle: "Compliance Gaps",
    description: "Our goal for every client engagement"
  }
];

const labourCodes = [
  { name: "Code on Wages", description: "Consolidating wage-related laws" },
  { name: "Code on Social Security", description: "Unified social security framework" },
  { name: "Industrial Relations Code", description: "Streamlined industrial regulations" },
  { name: "OSH Code", description: "Occupational safety and health standards" }
];

export default function ComplianceOperationsCategory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="HR Compliance Services | Labour Law Compliance | nHRMS"
        description="Navigate India's complex labor laws with confidence. Expert compliance services for S&E, CLRA, BOCW, POSH, PF, ESI, and new Labour Codes."
        keywords="HR compliance, labour codes, statutory compliance, PF ESI, POSH compliance, labour law India"
      />
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
              alt="Compliance and documentation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/60" />
          </div>
          <div className="absolute inset-0 bg-diagonal-pattern opacity-20" />
          
          {/* Decorative Elements */}
          <GradientOrb className="absolute -top-40 -right-40 opacity-25" size="xl" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-20" size="lg" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <PremiumBadge variant="light" className="mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Compliance & Operations
              </PremiumBadge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Compliance & Operations
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Stay compliant, avoid penalties, and focus on growth. 
                Expert guidance through India's complex labor law landscape.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="btn-primary-premium" asChild>
                  <Link to="/contact">Request Compliance Audit</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <a href="tel:+1-314-485-4747">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Stats Section */}
        <section className="py-14 bg-gradient-to-r from-destructive/10 via-destructive/5 to-secondary/10 border-y border-destructive/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {riskStats.map((stat, index) => (
                <div key={index} className="text-center group hover-lift">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.title}</div>
                  <div className="text-sm font-medium text-secondary">{stat.subtitle}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Compliance Services</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive compliance management from registration to ongoing monitoring.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {complianceServices.map((service, index) => (
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

        {/* Labour Codes Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <GradientOrb className="absolute -bottom-20 -left-20 opacity-15" size="xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <PremiumBadge variant="navy" className="mb-4">
                  <Scale className="h-4 w-4 mr-2" />
                  New Regulations
                </PremiumBadge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">India's New Labour Codes</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Four new labour codes are transforming workplace compliance in India. 
                  Consolidating 29 central labor laws, these codes bring significant changes 
                  to wages, social security, industrial relations, and occupational safety.
                </p>
                <Button size="lg" className="btn-primary-premium" asChild>
                  <Link to="/labour-codes" className="inline-flex items-center">
                    Labour Codes Guide <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {labourCodes.map((code, index) => (
                  <Card key={index} className="card-premium">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">{code.name}</h3>
                      <p className="text-sm text-muted-foreground">{code.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-subtle-pattern opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Compliance Areas</h2>
                <p className="text-lg text-muted-foreground">
                  Ensure your organization is compliant across all critical areas.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Shops & Establishments (S&E)", items: ["Registration", "License Renewal", "Working Hours"] },
                  { title: "Contract Labour (CLRA)", items: ["Principal Employer Registration", "Contractor Licensing", "Wage Verification"] },
                  { title: "POSH Compliance", items: ["ICC Formation", "Awareness Training", "Annual Reporting"] },
                  { title: "Statutory Payments", items: ["PF/ESI Contributions", "Professional Tax", "Labour Welfare Fund"] }
                ].map((area, index) => (
                  <Card key={index} className="card-premium">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {area.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Compliance Health Check</h2>
              <p className="text-xl text-white/90 mb-8">
                Our experts will assess your current compliance status and identify 
                potential risks before they become costly problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Schedule Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm" asChild>
                  <Link to="/services/compliance">View All Services</Link>
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
