
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Target, BarChart, Rocket, ArrowRight, LineChart, Users, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GoToMarket() {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Go to Market Strategy & Execution</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Strategic planning and execution to launch your HR products and services successfully in the market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Comprehensive market analysis and positioning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Strategic pricing and competitive differentiation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">Integrated sales and marketing execution plans</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <Rocket className="w-32 h-32 text-primary/40" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Go to Market Services</h2>
              <p className="text-muted-foreground">
                Comprehensive solutions to help you successfully bring your HR products and services to market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Market Strategy</h3>
                <p className="text-muted-foreground">
                  Define your target market, positioning, and value proposition to set a strong foundation for success.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Pricing & Packaging</h3>
                <p className="text-muted-foreground">
                  Develop strategic pricing models and packaging options to maximize market penetration and revenue.
                </p>
              </div>
              
              <div className="bg-background border border-border/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <PieChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Channel Strategy</h3>
                <p className="text-muted-foreground">
                  Identify and develop the most effective distribution channels to reach your target customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Go to Market Process</h2>
              <p className="text-muted-foreground">
                A structured approach to planning and executing your market entry or product launch.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-background p-6 rounded-lg text-center relative z-10">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">01</span>
                  </div>
                  <h3 className="font-medium mb-2">Market Analysis</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive market research and competitive analysis.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg text-center relative z-10">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">02</span>
                  </div>
                  <h3 className="font-medium mb-2">Strategy Development</h3>
                  <p className="text-sm text-muted-foreground">Creation of positioning, pricing, and channel strategies.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg text-center relative z-10">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">03</span>
                  </div>
                  <h3 className="font-medium mb-2">Launch Planning</h3>
                  <p className="text-sm text-muted-foreground">Detailed execution plans for all go-to-market activities.</p>
                </div>
                
                <div className="bg-background p-6 rounded-lg text-center relative z-10">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold">04</span>
                  </div>
                  <h3 className="font-medium mb-2">Execution & Optimization</h3>
                  <p className="text-sm text-muted-foreground">Implementation, measurement, and continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Preview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Case Study: HR Tech Startup</h2>
                <p className="text-muted-foreground mb-6">
                  Developed and executed a go-to-market strategy for an HR tech startup, resulting in 200% growth in the first year and successful Series A funding.
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
              <h2 className="text-3xl font-bold mb-4">Launch Your HR Solution with Confidence</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our go-to-market expertise can help you successfully bring your HR products and services to market.
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
