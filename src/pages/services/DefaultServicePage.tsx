
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function DefaultServicePage() {
  const { serviceName } = useParams();
  const formattedServiceName = serviceName 
    ? serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'This Service';

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${formattedServiceName} | nHRMS`;
  }, [formattedServiceName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-100 via-future-300/30 to-neural-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920')] bg-cover bg-center opacity-10 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-neural-700 bg-clip-text text-transparent">{formattedServiceName}</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Our specialized solutions and consulting services for {formattedServiceName.toLowerCase()}.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-neural-600 hover:from-neural-600 hover:to-primary transition-all duration-300 shadow-lg" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 shadow-lg" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About {formattedServiceName}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our {formattedServiceName.toLowerCase()} services are designed to help organizations optimize their human capital and achieve business objectives through expert consultation, proven methodologies, and innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We work with organizations of all sizes across various industries to deliver tailored solutions that address specific challenges and opportunities in {formattedServiceName.toLowerCase()}.
              </p>
              
              <div className="bg-future-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Enhanced strategic alignment with business objectives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Improved operational efficiency and effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Data-driven insights for informed decision making</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Future-proofed strategies adaptable to changing business needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-future-700/90 to-neural-700/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start?</h2>
              <p className="text-xl text-white/80 mb-8">
                Connect with our team to discuss how our {formattedServiceName.toLowerCase()} solutions can help your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 shadow-lg" asChild>
                  <Link to="/services">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Services
                  </Link>
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
