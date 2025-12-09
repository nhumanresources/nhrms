
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 15, 2024</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the nHRMS website and services (the "Service") operated by nHRMS Inc. ("us", "we", or "our").
            </p>
            <p className="mt-2">
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you do not have permission to access the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Communications</h2>
            <p>
              By creating an account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mt-2">
              By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Intellectual Property Rights</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of nHRMS Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of nHRMS Inc.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. User Accounts</h2>
            <p>
              When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
            </p>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Prohibited Uses</h2>
            <p>
              You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm or offend the Company or users of the Service or expose them to liability.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Analytics</h2>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            <p className="mt-2">
              For information about the cookies we use and how we handle your data, please refer to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. No Use By Minors</h2>
            <p>
              The Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using the Service, you warrant and represent that you are at least eighteen (18) years of age and have the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of the Terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall nHRMS Inc., its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">10. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
            <p className="mt-2">
              nHRMS Inc. its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
            <p className="mt-2">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mt-2">
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: legal@nhrms.com</p>
              <p>Phone: +1-314-485-4747</p>
              <p>Address: nHRMS Inc., 123 Corporate Plaza, Suite 500, St. Louis, MO 63101</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
