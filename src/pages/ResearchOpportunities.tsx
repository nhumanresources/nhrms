
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ResearchOpportunities() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Research Opportunities | nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore collaborative research opportunities in HR technology and organizational psychology with nHRMS, partnering with industry leaders and academic institutions.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-pattern">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Opportunities</h1>
              <p className="text-xl text-muted-foreground">
                Collaborative research initiatives between industry and academia to advance HR technology and practices.
              </p>
            </div>
          </div>
        </section>

        {/* Industry-Academia Collaboration Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Industry-Academia Collaboration</h2>
              <p className="text-lg mb-8">
                At nHRMS, we believe that the future of HR technology and practices lies at the intersection of industry expertise and academic research. Our collaborative research program brings together HR practitioners, business leaders, and academic researchers to explore cutting-edge topics and develop evidence-based solutions.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-10">
                <h3 className="text-xl font-semibold mb-4">Why Collaborate?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p><span className="font-medium">Real-world impact:</span> Apply academic findings to solve pressing HR challenges</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p><span className="font-medium">Access to resources:</span> Leverage industry data and academic methodologies</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p><span className="font-medium">Cross-disciplinary insights:</span> Bring together diverse perspectives and expertise</p>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary/10 p-1 mr-3 mt-1">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <p><span className="font-medium">Talent development:</span> Provide opportunities for students and early-career researchers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Current Research Topics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">Current Research Opportunities in AI and HR</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">AI-Powered Skills Taxonomy Development</h3>
                <p className="mb-4">Researching methods to create dynamic, self-updating skills taxonomies that adapt to emerging job roles and changing industry requirements using large language models and labor market data.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: MIT Media Lab, Stanford HCI Group</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Ethical AI in Recruitment Decision-Making</h3>
                <p className="mb-4">Investigating frameworks for building transparent, fair, and accountable AI systems for candidate screening and selection, with particular focus on mitigating algorithmic bias.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: Oxford Internet Institute, Carnegie Mellon University</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Multimodal Learning Experience Personalization</h3>
                <p className="mb-4">Exploring how AI can deliver personalized learning experiences by adapting content formats, difficulty levels, and delivery methods to individual learning preferences and career paths.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: UC Berkeley School of Information, Georgia Tech</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Algorithmic Management and Employee Well-being</h3>
                <p className="mb-4">Studying the psychological and performance impacts of AI-driven management systems, and developing frameworks for human-centered algorithmic management practices.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: Harvard Labor and Worklife Program, INSEAD</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Generative AI for Organizational Knowledge Management</h3>
                <p className="mb-4">Researching applications of generative AI in capturing, organizing, and making accessible institutional knowledge while balancing information accuracy and privacy concerns.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: Northwestern University, University of Toronto</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics for Workforce Planning</h3>
                <p className="mb-4">Developing advanced ML models that integrate internal workforce data with external economic indicators to improve long-term workforce planning and talent pipeline development.</p>
                <div className="text-sm text-muted-foreground mt-2">
                  <p>Collaborating institutions: Wharton School, London School of Economics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Interested in Collaboration?</h2>
              <p className="text-lg mb-8">
                We welcome inquiries from academic institutions, industry partners, and individual researchers interested in participating in our research initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact?subject=Research%20Collaboration">Contact Research Team</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="mailto:research@nhrms.com">research@nhrms.com</a>
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
