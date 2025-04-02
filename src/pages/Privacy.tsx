
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 15, 2024</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              At nHRMS, we respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you 
              visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            <p className="mt-2">
              This policy is compliant with the General Data Protection Regulation (GDPR), the Information Technology Act, 2000 and Information Technology 
              (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India, 
              and applicable United States federal and state data protection and privacy laws, including the California Consumer Privacy Act (CCPA).
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
              <li>Special Categories of Personal Data: In compliance with GDPR Article 9 and India's Information Technology Rules, we do not collect or process any special categories of personal data (details about race, ethnicity, religious beliefs, etc.) unless explicitly required and with proper legal basis.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Legal Basis for Processing</h2>
            <p>
              Under GDPR, we will only process your personal data when we have a lawful basis:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Consent: Where you have given explicit consent</li>
              <li>Contractual Obligation: Processing necessary for a contract with you</li>
              <li>Legal Obligation: Processing necessary for compliance with a legal obligation</li>
              <li>Legitimate Interests: Processing necessary for our legitimate interests</li>
            </ul>
            <p className="mt-2">
              Under Indian law, we collect and process data based on your consent and legitimate business purposes as per the IT Act.
            </p>
            <p className="mt-2">
              For US users, we process data in accordance with the stated purposes in this policy and as permitted by applicable US laws.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. How We Use Your Data</h2>
            <p>
              We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason compatible with the original purpose. Common uses include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide and manage our services</li>
              <li>To communicate with you about our services</li>
              <li>To comply with legal obligations</li>
              <li>To improve our website and services</li>
              <li>For marketing purposes (with your consent where required by law)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p className="mt-2">
              In determining the appropriate retention period, we consider the amount, nature, and sensitivity of the data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process the data, and applicable legal requirements.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. International Transfers</h2>
            <p>
              We may transfer your personal data to countries outside your country of residence. When we do so, we ensure appropriate safeguards are in place:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>For transfers to the EU/EEA: We comply with GDPR requirements</li>
              <li>For transfers from India: We comply with the requirements under the IT Act</li>
              <li>For transfers to/from the US: We comply with applicable US data protection laws</li>
            </ul>
            <p className="mt-2">
              These safeguards may include Standard Contractual Clauses approved by regulatory authorities or other legally approved mechanisms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments and testing</li>
              <li>Access controls and authentication procedures</li>
              <li>Staff training on data protection</li>
              <li>Business continuity and disaster recovery plans</li>
            </ul>
            <p className="mt-2">
              In India, we follow reasonable security practices as prescribed under the Information Technology Rules, 2011.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Your Legal Rights</h2>
            <p>
              Depending on your location, you have different rights regarding your personal data:
            </p>
            <h3 className="font-medium text-foreground mt-4 mb-2">For EU/EEA Residents (GDPR)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (the "right to be forgotten")</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Rights related to automated decision making and profiling</li>
            </ul>
            
            <h3 className="font-medium text-foreground mt-4 mb-2">For Indian Residents</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to confirmation and access</li>
              <li>Right to correction of inaccurate or incomplete data</li>
              <li>Right to opt-out of providing personal information</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h3 className="font-medium text-foreground mt-4 mb-2">For US Residents</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether personal information is sold or disclosed and to whom</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to access personal information</li>
              <li>Right to equal service and price (non-discrimination)</li>
              <li>Additional rights may apply based on your state of residence</li>
            </ul>
            
            <p className="mt-4">
              To exercise any of these rights, please contact us using the details provided in the Contact section. We may need to request specific information from you to help us confirm your identity.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="mt-2">
              For more information about the cookies we use and how to manage them, please see our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. We encourage you to read the privacy policy of every website you visit.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Contact</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: privacy@nhrms.com</p>
              <p>Phone: +1 (314) 301-8402</p>
              <p>Address: nHRMS Inc., 123 Corporate Plaza, Suite 500, St. Louis, MO 63101</p>
            </div>
            <p className="mt-2">
              For EU/EEA residents: You have the right to lodge a complaint with your local data protection authority if you are unhappy with how we have handled your personal data.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
