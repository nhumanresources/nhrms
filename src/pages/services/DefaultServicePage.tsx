
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

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
      <main className="flex-grow pt-16">
        {/* Hero Section - Simplified */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{formattedServiceName}</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Our specialized solutions and consulting services for {formattedServiceName.toLowerCase()}.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Description - Simplified */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">About {formattedServiceName}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our {formattedServiceName.toLowerCase()} services are designed to help organizations optimize their human capital and achieve business objectives through expert consultation and proven methodologies.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-xl mb-8 mt-10">
                <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Strategic alignment with business objectives</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Improved operational efficiency and effectiveness</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Data-driven insights for informed decision making</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Future-proofed strategies adaptable to changing needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Simplified */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
              <p className="text-xl opacity-90 mb-8">
                Connect with our team to discuss how our {formattedServiceName.toLowerCase()} solutions can help your organization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                  <Link to="/contact" className="inline-flex items-center">
                    Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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
