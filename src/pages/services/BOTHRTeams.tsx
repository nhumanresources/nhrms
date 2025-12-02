import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, Settings, ArrowRight, Building, Briefcase, Shuffle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BOTHRTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Operate Transfer HR Teams</h1>
                <p className="text-lg text-primary font-medium mb-4">Fractional HR Solutions</p>
                <p className="text-xl text-muted-foreground mb-8">
                  End-to-end HR team development and transition services to establish effective HR operations aligned with your business needs. Access experienced HR professionals on a fractional basis.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Custom HR team design based on your organizational requirements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Experienced HR professionals to operate your HR function</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Seamless knowledge transfer and transition to your internal team</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1920"
                  alt="Team of HR professionals in a planning meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our BOT Approach</h2>
              <p className="text-muted-foreground">
                A three-phase process to establish, operate, and transition effective HR teams.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">BUILD</h3>
                <p className="text-muted-foreground mb-4">
                  We design and establish your HR function based on your organizational needs and industry best practices.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>HR needs assessment and team design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>HR systems and process implementation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Talent acquisition and team assembly</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">OPERATE</h3>
                <p className="text-muted-foreground mb-4">
                  Our experienced professionals manage your HR operations while continuously improving processes and outcomes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Day-to-day HR operations management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Process optimization and performance measurement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Strategic HR guidance and support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shuffle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">TRANSFER</h3>
                <p className="text-muted-foreground mb-4">
                  We ensure a seamless transition of HR operations to your internal team through comprehensive knowledge transfer.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Knowledge documentation and transfer planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Training and mentoring of internal staff</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Graduated handover and ongoing support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Our BOT Model</h2>
              <p className="text-muted-foreground">
                Why companies choose our Build Operate Transfer approach for their HR teams.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Reduced Time-to-Value</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Establish effective HR operations much faster than building from scratch internally.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Expert Best Practices</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Implement industry-leading HR processes, systems, and practices from day one.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Risk Mitigation</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reduce the risks associated with building an HR function with our proven methodology.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Cost Optimization</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  More cost-effective than traditional consulting or permanent outsourcing models.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Capability Development</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Build internal HR capabilities through comprehensive knowledge transfer and training.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-medium">Scalable Solution</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Easily scale your HR function up or down based on business needs during the transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Case Study: Tech Scale-up</h2>
                <p className="text-muted-foreground mb-6">
                  Built and operated the entire HR function for a rapidly growing tech company, supporting growth from 50 to 250 employees over 18 months before successful transfer to their internal team.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/case-studies" className="inline-flex items-center">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Establish an Effective HR Function</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our Build Operate Transfer model can help you establish a high-performing HR function aligned with your business goals.
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
