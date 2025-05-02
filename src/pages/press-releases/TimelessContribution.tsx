
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TimelessContribution() {
  const pageTitle = "Timeless Contribution to Organisational Behaviour | nHRMS";
  const pageDescription = "Exploring the lasting impact of organizational behavior principles on modern workplace dynamics and HR practices.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3",
    "datePublished": "2025-05-02",
    "publisher": {
      "@type": "Organization",
      "name": "nHRMS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nhrms.com/logo.png"
      }
    },
    "author": {
      "@type": "Person",
      "name": "nHRMS Research Team"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="organizational behavior, HR practices, workplace dynamics, leadership principles"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-8">
            <Link to="/press-releases">
              <Button variant="ghost" className="px-0 hover:bg-transparent">
                <ArrowLeft size={18} className="mr-2" /> Back to Press Releases
              </Button>
            </Link>
          </div>
          
          <article className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Timeless Contribution to the Discipline of Organisational Behaviour</h1>
            
            <div className="flex items-center justify-between mb-8 text-sm text-muted-foreground border-y border-border py-3">
              <span>Published on May 2, 2025</span>
              <span>Source: BusinessManager.in</span>
            </div>
            
            <div className="aspect-video mb-8 overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3" 
                alt="Organizational Behaviour" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose max-w-none">
              <p className="lead text-xl mb-6">
                This article is available on BusinessManager.in. Please click the link below to read the full article.
              </p>
              
              <div className="bg-muted/30 p-6 rounded-lg my-8 text-center">
                <p className="mb-4">The complete article is available on the external website.</p>
                <a 
                  href="https://www.businessmanager.in/timeless-contribution-to-the-discipline-of-organisational-behaviour/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Read Full Article <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
              
              <h2>About Organisational Behaviour</h2>
              <p>
                Organisational Behaviour (OB) is a field of study that investigates the impact that individuals, groups, and structures have on behavior within organizations. It applies the knowledge gained through systematic study to improve an organization's effectiveness. 
              </p>
              
              <p>
                The discipline draws from several behavioral disciplines, including psychology, sociology, social psychology, anthropology, and political science. Each of these disciplines provides unique insights into understanding human behavior in organizational settings.
              </p>
              
              <h2>Key Contributions to Modern HR Practices</h2>
              <p>
                The principles of Organisational Behaviour have significantly influenced how businesses approach human resource management. From employee motivation theories to leadership models, OB has provided frameworks that continue to shape workplace dynamics.
              </p>
              
              <p>
                At nHRMS, we integrate these time-tested principles with modern HR technology to create solutions that address both the human and technical aspects of organizational management.
              </p>
              
              <div className="mt-10 pt-8 border-t border-border">
                <p>
                  To read the complete article with detailed analysis and case studies, please visit the original publication on BusinessManager.in using the link above.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
