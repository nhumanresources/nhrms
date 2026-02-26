import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, UserSearch, BarChart, Users, ArrowRight, CheckCircle2, FileCheck, Briefcase, Star, Globe, MapPin, Award, Target, Shield, Zap, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import SEO from '@/components/SEO';

export default function ExecutiveSearch() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const regions = [
    { name: "North America", cities: "New York, San Francisco, Toronto, Chicago" },
    { name: "Europe", cities: "London, Frankfurt, Amsterdam, Paris" },
    { name: "Middle East & Africa", cities: "Dubai, Riyadh, Johannesburg, Nairobi" },
    { name: "Asia Pacific", cities: "Singapore, Mumbai, Sydney, Tokyo" },
    { name: "India", cities: "Mumbai, Bangalore, Delhi NCR, Hyderabad" },
    { name: "Latin America", cities: "São Paulo, Mexico City, Buenos Aires" },
  ];

  const industries = [
    "Technology & SaaS", "Financial Services & Banking", "Healthcare & Life Sciences",
    "Manufacturing & Industrial", "Consumer & Retail", "Energy & Infrastructure",
    "Professional Services", "Media & Entertainment", "Telecommunications",
    "Automotive & Mobility", "Real Estate & Hospitality", "Education & EdTech"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Worldwide Executive Search | nHRMS"
        description="nHRMS delivers world-class executive search across 30+ countries. Find exceptional C-suite and senior leaders with our proven A-Method© Scorecard framework."
      />
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section - Premium Dark */}
        <section className="relative py-20 md:py-32 bg-foreground overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          {/* Gradient accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-primary font-medium text-sm uppercase tracking-widest">Worldwide Executive Search</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
                  Leaders Who Shape <br className="hidden md:block" />
                  <span className="text-primary">the Future</span>
                </h1>
                <p className="text-lg text-background/70 mb-8 max-w-lg leading-relaxed">
                  We identify, assess, and place exceptional C-suite and senior executives across 30+ countries. Our worldwide reach, combined with deep local expertise, ensures the right leadership fit — anywhere in the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="text-base">
                    <Link to="/contact">
                      Start Your Search <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="text-base border-background/20 text-background hover:bg-background/10">
                    <a href="#process">Our Methodology</a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-background/5 border border-background/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-primary mb-1">30+</div>
                      <div className="text-background/60 text-sm">Countries Served</div>
                    </div>
                    <div className="bg-background/5 border border-background/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-primary mb-1">92%</div>
                      <div className="text-background/60 text-sm">Placement Success Rate</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-background/5 border border-background/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-primary mb-1">500+</div>
                      <div className="text-background/60 text-sm">Executive Placements</div>
                    </div>
                    <div className="bg-background/5 border border-background/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl font-bold text-primary mb-1">12+</div>
                      <div className="text-background/60 text-sm">Industry Verticals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Global Presence</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Search Without Borders</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Our executive search practice operates across six continents, with on-the-ground expertise in key markets worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <div key={region.name} className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold">{region.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{region.cities}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Search For */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Leadership Roles</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Roles We Specialize In</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From C-suite to senior functional leaders, we search for executives who transform organizations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "C-Suite", desc: "CEO, COO, CFO, CTO, CHRO, CMO, CIO" },
                { icon: Users, title: "Board & Advisory", desc: "Independent Directors, Advisory Board Members" },
                { icon: Award, title: "Senior VPs & Directors", desc: "SVP, VP, Senior Directors across functions" },
                { icon: Zap, title: "Functional Heads", desc: "Country Heads, Business Unit Leads, Practice Heads" },
              ].map((role) => (
                <div key={role.title} className="bg-background border border-border/50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <role.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* A-Method Scorecard Section */}
        <section id="process" className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Our Framework</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The A-Method© Scorecard Framework</h2>
              <p className="text-muted-foreground text-lg">
                We use Jeff Smart's renowned A-Method© Scorecard to ensure objective, evidence-based hiring decisions — globally.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="components">Key Components</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">What is the A-Method© Scorecard?</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        The A-Method© Scorecard is a structured evaluation framework that transforms traditional, subjective hiring into an objective, evidence-based process. It provides a consistent method for defining role requirements, evaluating candidates, and making hiring decisions.
                      </p>
                      <p className="text-muted-foreground">
                        Unlike traditional job descriptions that focus on responsibilities and qualifications, the Scorecard focuses on outcomes and competencies, creating a clear definition of what "good" looks like — regardless of geography or culture.
                      </p>
                      <div className="mt-6 bg-primary/5 rounded-lg p-6">
                        <div className="flex items-start">
                          <FileCheck className="h-10 w-10 text-primary flex-shrink-0 mt-0.5 mr-4" />
                          <div>
                            <h4 className="font-bold mb-2">The core principle:</h4>
                            <p className="italic">"When you clearly define success before the search begins, you significantly increase the likelihood of making the right hire."</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="components" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">Scorecard Components</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        {[
                          { num: "1", title: "Mission", desc: "A clear statement of the role's purpose and how it contributes to organizational success. This provides alignment with strategic objectives and sets the context for performance expectations." },
                          { num: "2", title: "Outcomes", desc: "Specific, measurable results the person in the role must achieve, typically within the first 6-18 months. These are the 'what' of the role — concrete accomplishments with timeframes.", list: ["3-8 critical outcomes", "Specific, measurable, and time-bound", "Aligned with organizational priorities"] },
                          { num: "3", title: "Competencies", desc: "The 'how' of the role — behaviors, skills, and traits required for success. These include both technical competencies specific to the role and leadership competencies that align with your organizational culture.", list: ["Technical competencies (role-specific expertise)", "Leadership competencies (cultural and behavioral fit)", "Each competency includes observable behaviors"] },
                        ].map((item) => (
                          <div key={item.num} className="flex items-start">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                              <span className="text-primary font-bold">{item.num}</span>
                            </div>
                            <div>
                              <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                              <p className="text-muted-foreground">{item.desc}</p>
                              {item.list && (
                                <ul className="mt-3 pl-5 list-disc text-muted-foreground">
                                  {item.list.map((l) => <li key={l}>{l}</li>)}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <h3 className="text-2xl font-bold">Benefits of the Scorecard Approach</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          { title: "Alignment", desc: "Creates alignment among stakeholders on what success looks like before the search begins." },
                          { title: "Objectivity", desc: "Reduces subjective bias in assessment through specific, measurable criteria." },
                          { title: "Focus", desc: "Keeps the search focused on candidates who can deliver specific outcomes." },
                          { title: "Accountability", desc: "Provides a clear framework for performance management after hiring." },
                          { title: "Interview Quality", desc: "Enables focused, structured interviews that assess candidates against specific outcomes." },
                          { title: "Onboarding Acceleration", desc: "Provides new hires with a clear roadmap for success from day one." },
                        ].map((b) => (
                          <div key={b.title} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium mb-1">{b.title}</h4>
                              <p className="text-sm text-muted-foreground">{b.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 bg-primary/5 p-6 rounded-lg">
                        <div className="flex items-center justify-center mb-4">
                          <Star className="h-6 w-6 text-primary mr-2" />
                          <h4 className="text-xl font-medium">Success Rate</h4>
                          <Star className="h-6 w-6 text-primary ml-2" />
                        </div>
                        <p className="text-center">
                          Organizations using the A-Method© Scorecard approach report a <span className="font-bold">92% success rate</span> with executive hires, compared to the industry average of 50%.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">The Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Executive Search Process</h2>
              <p className="text-muted-foreground text-lg">
                A systematic and proven approach to identifying and securing leadership talent — across borders and time zones.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Discovery & Strategy", desc: "In-depth consultations to understand your organizational needs, culture, and leadership requirements — contextualized for your market.", items: ["Stakeholder interviews", "Scorecard development", "Global market mapping"] },
                { step: "02", title: "Search & Assessment", desc: "We leverage worldwide networks and proprietary databases to identify and rigorously assess potential candidates across geographies.", items: ["Cross-border talent mapping", "Structured scorecard interviews", "Rigorous reference checking"] },
                { step: "03", title: "Selection & Onboarding", desc: "We facilitate the selection process and provide ongoing support to ensure a smooth transition — including cross-cultural integration.", items: ["Final candidate presentation", "Offer negotiation support", "Onboarding & integration planning"] },
              ].map((p) => (
                <div key={p.step} className="bg-background border border-border/50 p-8 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">{p.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <ul className="space-y-2 text-sm">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Industry Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve Worldwide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Deep domain expertise across 12+ industry verticals, with an understanding of sector-specific leadership demands in every market.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <div key={industry} className="bg-card border border-border/50 p-5 rounded-xl text-center hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <Briefcase className="h-7 w-7 mx-auto mb-3 text-primary/60" />
                  <h3 className="font-medium text-sm">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why nHRMS for Executive Search */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Why nHRMS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The nHRMS Advantage</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Globe, title: "Worldwide Reach, Local Depth", desc: "Searches executed across 30+ countries with on-the-ground market intelligence and cultural understanding." },
                { icon: Shield, title: "Confidential & Discreet", desc: "Every engagement is handled with the highest level of confidentiality for both clients and candidates." },
                { icon: FileCheck, title: "Proven Methodology", desc: "A-Method© Scorecard ensures evidence-based, objective hiring — eliminating costly mis-hires." },
                { icon: Award, title: "Exclusive Networks", desc: "Access to passive candidates and hidden talent pools that traditional recruiting cannot reach." },
                { icon: Target, title: "Guaranteed Outcomes", desc: "Performance-backed placements with replacement guarantees that reflect our confidence in every search." },
                { icon: Users, title: "An RYT Group Firm", desc: "Backed by the RYT Group's ecosystem of advisory and consulting capabilities for a holistic approach." },
              ].map((adv) => (
                <div key={adv.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <adv.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{adv.title}</h3>
                    <p className="text-sm text-muted-foreground">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Slider */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-14">
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-3 block">Success Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Hear from organizations that found their transformative leaders through nHRMS Executive Search.
              </p>
            </div>

            <div className="max-w-5xl mx-auto px-8 md:px-14">
              <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <CarouselContent>
                  {[
                    { quote: "nHRMS helped us find our CTO across three continents. Their A-Method© Scorecard approach gave us confidence that we were making the right choice — and it proved exactly that.", name: "Rajesh Mehta", role: "CEO", company: "Global FinTech Company, Singapore" },
                    { quote: "We needed a Country Head for our Middle East expansion. nHRMS delivered three exceptional shortlisted candidates within four weeks — all with deep regional expertise.", name: "Sarah Johnson", role: "CHRO", company: "Fortune 500 Manufacturing, USA" },
                    { quote: "The level of confidentiality and professionalism throughout our board-level search was outstanding. nHRMS understood our culture and found leaders who truly fit.", name: "Dr. Ananya Sharma", role: "Managing Director", company: "Healthcare Group, India" },
                    { quote: "From our first consultation to final onboarding support, the nHRMS team operated as a true extension of our leadership team. A world-class executive search experience.", name: "Michael Chen", role: "Group CEO", company: "Technology Conglomerate, Hong Kong" },
                    { quote: "Their global network is unmatched. We hired our CFO from a talent pool we would never have accessed through traditional recruiting channels.", name: "Emma Okafor", role: "Board Chair", company: "Energy & Infrastructure, Nigeria" },
                  ].map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 p-2">
                      <Card className="h-full border-border/50 bg-card">
                        <CardContent className="p-8 flex flex-col justify-between h-full">
                          <div>
                            <Quote className="h-8 w-8 text-primary/30 mb-4" />
                            <p className="text-muted-foreground leading-relaxed mb-6 italic">
                              "{testimonial.quote}"
                            </p>
                          </div>
                          <div className="border-t border-border/50 pt-4">
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-background border border-border" />
                <CarouselNext className="bg-background border border-border" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">Ready to Find Your Next Leader?</h2>
              <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
                Whether you're hiring a CEO in New York or a Country Head in Singapore, our worldwide executive search delivers results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base">
                  <Link to="/contact">
                    Start a Search <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base border-background/20 text-background hover:bg-background/10">
                  <Link to="/services/strategic-advisory">Explore Advisory Services</Link>
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
