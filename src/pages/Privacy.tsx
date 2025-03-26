
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              At nHRMS, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you 
              visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. The Data We Collect</h2>
            <p>
              Personal data means any information about an individual from which that person can be identified. 
              We may collect, use, store and transfer different kinds of personal data about you including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Identity Data: first name, last name, username or similar identifier, title</li>
              <li>Contact Data: billing address, delivery address, email address, telephone numbers</li>
              <li>Technical Data: internet protocol (IP) address, login data, browser type and version</li>
              <li>Usage Data: information about how you use our website, products and services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests</li>
              <li>Where we need to comply with a legal or regulatory obligation</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal 
              data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of your personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: privacy@nhrms.com</p>
              <p>Phone: +1 (314) 301-8402</p>
              <p>Address: nHRMS Inc., 123 Corporate Plaza, Suite 500, St. Louis, MO 63101</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Changes to This Policy</h2>
            <p>
              We keep our privacy policy under regular review. This version was last updated on March 26, 2025. 
              Historic versions can be obtained by contacting us.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
