
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              These terms and conditions govern your use of the nHRMS website and services; by using our website, 
              you accept these terms and conditions in full. If you disagree with these terms and conditions or any 
              part of these terms and conditions, you must not use our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. License to Use Website</h2>
            <p>
              Unless otherwise stated, nHRMS and/or its licensors own the intellectual property rights in the website 
              and material on the website. Subject to the license below, all these intellectual property rights are reserved.
            </p>
            <p className="mt-2">
              You may view, download for caching purposes only, and print pages from the website for your own personal use, 
              subject to the restrictions set out below and elsewhere in these terms and conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Acceptable Use</h2>
            <p>
              You must not use our website in any way that causes, or may cause, damage to the website or impairment of 
              the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful.
            </p>
            <p className="mt-2">
              You must not use our website to copy, store, host, transmit, send, use, publish or distribute any material 
              which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, 
              rootkit or other malicious computer software.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Limitations of Liability</h2>
            <p>
              The information on this website is provided free-of-charge, and you acknowledge that it would be unreasonable 
              to hold us liable in respect of this website and the information on this website.
            </p>
            <p className="mt-2">
              To the maximum extent permitted by applicable law we exclude all representations, warranties and conditions 
              relating to this website and the use of this website (including, without limitation, any warranties implied 
              by law of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill).
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Breaches of These Terms and Conditions</h2>
            <p>
              Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions 
              in any way, we may take such action as we deem appropriate to deal with the breach, including suspending your 
              access to the website, prohibiting you from accessing the website, blocking computers using your IP address from 
              accessing the website, contacting your internet service provider to request that they block your access to the 
              website and/or bringing court proceedings against you.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Variation</h2>
            <p>
              We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use 
              of our website from the date of the publication of the revised terms and conditions on our website. Please check 
              this page regularly to ensure you are familiar with the current version.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United States, 
              and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of 
              the courts of Missouri.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about these terms of service, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: legal@nhrms.com</p>
              <p>Phone: +1 (314) 301-8402</p>
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
