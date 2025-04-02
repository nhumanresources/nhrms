
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HRTech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-future-100 via-future-300/30 to-neural-100/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920')] bg-cover bg-center opacity-15 z-0"></div>
          <div className="absolute inset-0 bg-pattern opacity-20 z-0"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-future-600 to-neural-600 bg-clip-text text-transparent">Custom HR Tech Advisory Solutions</h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Strategic guidance for organizations navigating the complex landscape of HR technology selection, implementation, and optimization.
              </p>
              <Button className="bg-gradient-to-r from-future-600 to-neural-600 hover:from-neural-600 hover:to-future-600 transition-all duration-300 shadow-lg text-white px-8 py-3 rounded-md" asChild>
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Navigating the HR Technology Ecosystem</h2>
              
              <p>
                In today's rapidly evolving business landscape, HR technology has become a critical enabler of organizational success. 
                Yet, with thousands of vendors, overlapping capabilities, and competing claims, navigating the HR tech ecosystem can 
                be overwhelming. At nHRMS, we specialize in providing customized HR technology advisory services that align technology 
                decisions with your unique organizational needs, culture, and strategic objectives.
              </p>

              <p>
                Our approach is vendor-agnostic and results-focused. We recognize that successful HR technology implementation is not 
                just about selecting the right software but also about driving adoption, optimizing processes, and measuring impact. 
                Our team of experienced HR technology consultants combines deep domain expertise with practical implementation 
                experience to guide you through every stage of the HR technology lifecycle.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Our Custom HR Tech Advisory Services</h3>

              <h4 className="text-xl font-medium mt-8 mb-2">HR Technology Strategy Development</h4>
              <p>
                We help you craft a comprehensive HR technology strategy that aligns with your business goals and HR vision. 
                Our consultants work closely with your leadership team to understand your unique requirements, assess your 
                current technology landscape, identify gaps, and develop a roadmap for technology acquisition and implementation. 
                This strategic foundation ensures that your HR technology investments deliver measurable value and support your 
                organizational objectives.
              </p>

              <h4 className="text-xl font-medium mt-8 mb-2">Vendor Selection & Evaluation</h4>
              <p>
                The HR tech marketplace is crowded with vendors offering similar solutions, making it challenging to identify 
                the right fit for your organization. Our consultants leverage their extensive market knowledge and structured 
                evaluation frameworks to help you navigate the vendor landscape. We assist in defining selection criteria, 
                creating RFPs, evaluating proposals, arranging demonstrations, and conducting reference checks. Our rigorous 
                evaluation process ensures you select technology partners that meet your functional requirements, align with 
                your budget, and share your vision for success.
              </p>

              <h4 className="text-xl font-medium mt-8 mb-2">Implementation Strategy & Change Management</h4>
              <p>
                Technology implementations often fail not because of the technology itself but due to inadequate planning and 
                change management. Our consultants help you develop a comprehensive implementation strategy that covers system 
                configuration, data migration, integration with existing systems, user training, and organizational change 
                management. We work alongside your implementation teams to ensure smooth delivery, stakeholder engagement, 
                and successful adoption.
              </p>

              <h4 className="text-xl font-medium mt-8 mb-2">HR Technology Optimization</h4>
              <p>
                Many organizations underutilize their existing HR technology investments. Our optimization services help you 
                maximize the return on your technology investments by identifying opportunities to enhance system configuration, 
                streamline processes, improve integration, and leverage advanced features. We conduct thorough assessments of 
                your current systems, identify improvement opportunities, and implement changes that enhance functionality, 
                user experience, and business impact.
              </p>

              <h4 className="text-xl font-medium mt-8 mb-2">HR Analytics & Reporting Strategy</h4>
              <p>
                Data-driven decision-making is essential for modern HR functions. We help you develop an effective HR analytics 
                and reporting strategy that transforms raw data into actionable insights. Our consultants assist in defining key 
                metrics, designing dashboards, implementing reporting solutions, and building analytical capabilities within your 
                HR team. We ensure that your HR technology ecosystem supports your analytics ambitions and enables evidence-based 
                decision-making.
              </p>

              <h3 className="text-2xl font-semibold mt-10 mb-4">Why Choose nHRMS for HR Technology Advisory</h3>
              <p>
                Our HR technology advisory services stand apart due to our vendor-neutral approach, deep industry expertise, 
                and focus on measurable outcomes. We understand that technology is a means to an end, not an end in itself. 
                Our consultants bring practical experience from hundreds of implementation projects across various industries, 
                geographies, and organizational sizes. We combine this experience with a structured methodology that ensures 
                consistent, high-quality outcomes while accommodating your unique organizational context.
              </p>

              <p>
                Whether you're selecting your first HR system, replacing legacy applications, or optimizing your existing 
                technology ecosystem, our consultants provide objective guidance, practical support, and expert insights that 
                help you make informed decisions and maximize the value of your HR technology investments.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-future-700/90 to-neural-700/90 relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Transform Your HR Technology Strategy</h2>
              <p className="text-xl text-white/80 mb-8">
                Ready to make informed HR technology decisions that drive business value? Our consultants are here to help you navigate the complex world of HR tech.
              </p>
              <Button size="lg" className="bg-white text-future-700 hover:bg-white/90 shadow-lg px-8 py-3 rounded-md" asChild>
                <Link to="/contact" className="inline-flex items-center">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
