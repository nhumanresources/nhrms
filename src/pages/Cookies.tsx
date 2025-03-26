
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        
        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry 
              standard options for disabling cookies without completely disabling the functionality and features they add 
              to this site.
            </p>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as 
                security, network management, and account access. You may disable these by changing your browser settings, 
                but this may affect how the website functions.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Analytics Cookies</h3>
              <p>
                We use analytics cookies to help us understand how visitors interact with our website by collecting and 
                reporting information anonymously. These cookies help us improve our website and your experience.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant 
                and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Disabling Cookies</h2>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling 
              cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will 
              usually result in disabling certain functionality and features of this site.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. The Cookies We Set</h2>
            <div>
              <h3 className="font-medium text-foreground mb-2">Account related cookies</h3>
              <p>
                If you create an account with us, we will use cookies for the management of the signup process and general 
                administration. These cookies will usually be deleted when you log out; however, in some cases, they may 
                remain afterward to remember your site preferences.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Login related cookies</h3>
              <p>
                We use cookies when you are logged in so that we can remember this fact. This prevents you from having to 
                log in every time you visit a new page. These cookies are typically removed or cleared when you log out to 
                ensure that you can only access restricted features and areas when logged in.
              </p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Site preferences cookies</h3>
              <p>
                To provide you with a great experience on this site, we provide the functionality to set your preferences 
                for how this site runs when you use it. To remember your preferences, we need to set cookies so that this 
                information can be called whenever you interact with a page affected by your preferences.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Cookies</h2>
            <p>
              In some special cases, we also use cookies provided by trusted third parties. The following section details 
              which third-party cookies you might encounter through this site.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                This site uses Google Analytics, one of the most widespread and trusted analytics solutions on the web, to help 
                us understand how you use the site and ways that we can improve your experience.
              </li>
              <li>
                From time to time, we test new features and make subtle changes to the way that the site is delivered. When 
                we are still testing new features, these cookies may be used to ensure that you receive a consistent experience 
                whilst on the site.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. More Information</h2>
            <p>
              If you are looking for more information about cookies specifically, or would like to learn more about how to manage them:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Contact us at privacy@nhrms.com</li>
              <li>Visit www.aboutcookies.org for more information about cookies and how to manage them</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this cookie policy from time to time in order to reflect changes to the cookies we use or for 
              legal or operational reasons. Please therefore re-visit this cookie policy regularly to stay informed about 
              our use of cookies and related technologies.
            </p>
            <p className="mt-2">
              The date at the top of this cookie policy indicates when it was last updated.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
