import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  FileCheck, 
  Building2, 
  Users, 
  Scale, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react";

const complianceServices = [
  {
    id: "hr-compliance",
    icon: Shield,
    title: "HR Compliance Services",
    shortDescription: "End-to-end compliance management for your organization",
    details: {
      whatItCovers: "Comprehensive HR compliance management including policy development, employee handbook creation, workplace safety protocols, and ongoing compliance monitoring across all labor regulations.",
      whoNeedsIt: "All organizations with employees, regardless of size. Essential for companies expanding operations, entering new states, or undergoing regulatory audits.",
      keyRequirements: [
        "Maintain updated HR policies and procedures",
        "Regular compliance audits and gap assessments",
        "Employee awareness training programs",
        "Documentation and record-keeping protocols"
      ],
      penalties: "Non-compliance can result in fines ranging from ₹10,000 to ₹10 lakhs, criminal prosecution in severe cases, and reputational damage.",
      howWeHelp: "We conduct thorough compliance assessments, develop tailored HR policies, implement monitoring systems, and provide ongoing advisory support to ensure your organization stays compliant."
    }
  },
  {
    id: "se-registration",
    icon: Building2,
    title: "Shops & Establishments (S&E) Act",
    shortDescription: "State-level registration and compliance for commercial establishments",
    details: {
      whatItCovers: "The Shops and Establishments Act is a state-level legislation regulating conditions of work in commercial establishments. It covers working hours, rest intervals, opening/closing hours, holidays, leave entitlements, wages, employment conditions, and workplace facilities.",
      whoNeedsIt: "All shops, commercial establishments, restaurants, hotels, theatres, entertainment venues, and other places of public amusement. Applicable to businesses employing even a single worker.",
      keyRequirements: [
        "Registration within 30 days of commencement",
        "Display of registration certificate at premises",
        "Maintain prescribed registers (attendance, wages, leave)",
        "Annual renewal of registration",
        "Compliance with working hour restrictions",
        "Provide weekly holidays and leave entitlements"
      ],
      penalties: "Failure to register: ₹1,000-₹25,000. Continued violation: ₹100-₹500 per day. Operating without registration can lead to closure orders.",
      howWeHelp: "We handle complete S&E registration across all states, maintain registers, ensure renewals, and conduct periodic compliance checks to prevent violations."
    }
  },
  {
    id: "clra",
    icon: Users,
    title: "Contract Labour (CLRA) Act",
    shortDescription: "Compliance for organizations engaging contract workers",
    details: {
      whatItCovers: "The Contract Labour (Regulation and Abolition) Act, 1970 regulates the employment of contract labour and provides for its abolition in certain circumstances. It ensures welfare and working conditions for contract workers engaged through contractors.",
      whoNeedsIt: "Principal employers engaging 20 or more contract workers, and contractors supplying 20 or more workers. Applicable across manufacturing, construction, IT services, facilities management, and security services.",
      keyRequirements: [
        "Principal employer registration (Form I)",
        "Contractor licensing (Form IV)",
        "Maintain registers of contract workers",
        "Ensure payment of wages through contractors",
        "Provide welfare facilities (canteen, rest rooms, first aid)",
        "Half-yearly returns submission",
        "Equal pay for equal work provisions"
      ],
      penalties: "Operating without registration/license: Up to ₹10,000 fine and/or 3 months imprisonment. Non-payment of wages: Principal employer becomes directly liable.",
      howWeHelp: "We manage the entire CLRA compliance lifecycle including registration, licensing, contractor audits, wage verification, and statutory returns filing."
    }
  },
  {
    id: "bocw",
    icon: Scale,
    title: "Building & Construction Workers (BOCW) Act",
    shortDescription: "Welfare and safety compliance for construction industry",
    details: {
      whatItCovers: "The Building and Other Construction Workers Act, 1996 regulates employment conditions and safety of building and construction workers. It mandates registration, welfare boards, safety measures, and social security benefits for construction workers.",
      whoNeedsIt: "All establishments engaged in building or construction work employing 10 or more workers. Includes real estate developers, infrastructure companies, contractors, and any entity undertaking construction activities.",
      keyRequirements: [
        "Registration as establishment with State BOCW Board",
        "Worker registration with welfare board",
        "Collection and remittance of BOCW cess (1-2% of construction cost)",
        "Safety officer appointment (for 500+ workers)",
        "Maintain accident records and safety equipment",
        "Provide welfare facilities at construction sites"
      ],
      penalties: "Non-registration: Up to ₹1 lakh fine. Cess default: Interest + penalties. Safety violations: ₹5,000-₹2 lakh and/or imprisonment.",
      howWeHelp: "We handle BOCW registration, cess computation and remittance, worker enrollment, safety compliance audits, and liaison with welfare boards for benefit claims."
    }
  },
  {
    id: "posh",
    icon: FileCheck,
    title: "Prevention of Sexual Harassment (POSH) Act",
    shortDescription: "Creating safe workplaces free from sexual harassment",
    details: {
      whatItCovers: "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 mandates a safe working environment free from sexual harassment. It requires prevention mechanisms, complaint committees, and defined procedures for handling complaints.",
      whoNeedsIt: "All workplaces with 10 or more employees must constitute an Internal Complaints Committee (ICC). Organizations with less than 10 employees can approach the Local Complaints Committee (LCC).",
      keyRequirements: [
        "Constitution of Internal Complaints Committee (ICC)",
        "Presiding officer must be a senior woman employee",
        "External member from NGO/women's organization required",
        "Display of POSH policy at conspicuous places",
        "Conduct awareness training for all employees",
        "Annual report submission to District Officer",
        "Maintain confidential complaint records"
      ],
      penalties: "First violation: Up to ₹50,000 fine. Repeat violation: Double penalty and/or license cancellation. Non-compliance with ICC order: Penalty as per service rules.",
      howWeHelp: "We assist in ICC formation, draft comprehensive POSH policies, conduct mandatory awareness workshops, handle complaint procedures, and ensure annual reporting compliance."
    }
  },
  {
    id: "statutory-payments",
    icon: BookOpen,
    title: "Statutory Payments & Filings",
    shortDescription: "Timely compliance with PF, ESI, Gratuity, and LWF",
    details: {
      whatItCovers: "Management of all statutory contributions including Provident Fund (PF), Employee State Insurance (ESI), Gratuity, Labour Welfare Fund (LWF), Professional Tax, and related filings and returns.",
      whoNeedsIt: "PF: Establishments with 20+ employees. ESI: Establishments with 10+ employees (wages ≤₹21,000). Gratuity: All establishments with 10+ employees. LWF: Varies by state.",
      keyRequirements: [
        "PF: 12% contribution each from employer and employee",
        "ESI: 3.25% employer + 0.75% employee contribution",
        "Gratuity: 15 days wages for each year of service",
        "Monthly/quarterly returns and challans",
        "Annual returns for all statutory compliances",
        "Maintain wage registers and contribution records"
      ],
      penalties: "PF delay: 12% simple interest + damages up to 100%. ESI delay: 12% interest + 5% damages. Gratuity default: Up to ₹20,000 fine and/or 1 year imprisonment.",
      howWeHelp: "We manage end-to-end statutory compliance including computation, timely payments, return filings, and handle inspections and assessments by authorities."
    }
  }
];

const whyChooseUs = [
  {
    title: "16+ Years Expertise",
    description: "Deep experience navigating India's complex labor law landscape"
  },
  {
    title: "423 Clients Served",
    description: "Proven track record across diverse industries and company sizes"
  },
  {
    title: "Proactive Monitoring",
    description: "Stay ahead of regulatory changes with our alert systems"
  },
  {
    title: "Dedicated Support",
    description: "Assigned compliance officers for personalized service"
  }
];

const ComplianceServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="HR Compliance Services | Labour Law Compliance | nHRMS"
        description="Navigate India's complex labor laws with confidence. Expert compliance services for S&E, CLRA, BOCW, POSH, PF, ESI, and new Labour Codes implementation."
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            Compliance Solutions
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            HR Compliance Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Navigate India's complex labor laws with confidence. Stay compliant, avoid penalties, and focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request Free Compliance Audit</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              <a href="tel:+1-314-485-4747">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Compliance Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From registration to ongoing compliance management, we handle every aspect of labor law compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="details" className="border-none">
                      <AccordionTrigger className="text-primary hover:no-underline py-2 text-sm">
                        View Details
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">What It Covers</h4>
                          <p className="text-muted-foreground">{service.details.whatItCovers}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Who Needs It</h4>
                          <p className="text-muted-foreground">{service.details.whoNeedsIt}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Key Requirements</h4>
                          <ul className="space-y-1">
                            {service.details.keyRequirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Penalties for Non-Compliance</h4>
                          <p className="text-red-600/80">{service.details.penalties}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">How nHRMS Helps</h4>
                          <p className="text-muted-foreground">{service.details.howWeHelp}</p>
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-full mt-2">
                          <Link to="/contact">
                            Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Labour Codes CTA */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              New Labour Codes Implementation
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              India's four new labour codes are transforming workplace compliance. Is your organization ready for the transition?
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/labour-codes">
                Learn About Labour Codes <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose nHRMS for Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with experts who understand the intricacies of Indian labor law
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <Card key={idx} className="text-center p-6 border-border/50">
                <CardContent className="pt-4">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Compliance Health Check
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Our experts will assess your current compliance status and identify potential risks before they become costly problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Schedule Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white/10">
              <a href="mailto:info@nhrms.com">
                info@nhrms.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServices;