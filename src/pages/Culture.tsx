
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CultureHero from '@/components/culture/CultureHero';
import ExperiencePillars from '@/components/culture/ExperiencePillars';
import LearningCulture from '@/components/culture/LearningCulture';
import CultureValues from '@/components/culture/CultureValues';

export default function Culture() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title and meta description for SEO
    document.title = "Our Culture | Nurturing Human Resources & Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about the culture at nHRMS, where we are dedicated to enhancing both Customer Experience and Employee Experience through continuous learning and growth.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <CultureHero />
        <ExperiencePillars />
        <LearningCulture />
        <CultureValues />
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg mb-8">
                Become part of our culture that values continuous learning, collaboration, and meaningful contributions to both customer and employee experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="https://jobs.nhrms.com/jobs/Careers">View Current Openings</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/research-opportunities">Research Opportunities</Link>
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
