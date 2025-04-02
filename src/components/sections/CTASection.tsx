
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export default function CTASection() {
  const location = useLocation();
  const isCareerPage = location.pathname.includes('/careers');

  // Function to handle career application clicks
  const handleCareerApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:info@nhrms.com?subject=Career Application&body=Dear nHRMS Team,%0D%0A%0D%0AI am interested in exploring career opportunities with your organization. Please find my attached resume.%0D%0A%0D%0AThank you for your consideration.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
  };

  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {isCareerPage ? (
            <>
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our team of HR and business professionals. We're always looking for talented individuals who are passionate about making an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="#" onClick={handleCareerApply}>Apply Now</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/who-we-are">Learn About Our Culture</Link>
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR Function?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our team of experts can help you address your most pressing HR challenges and drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
