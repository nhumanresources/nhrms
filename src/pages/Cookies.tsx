
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 mt-16 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: June 15, 2024</p>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
            <p className="mt-2">
              Cookies set by the website owner (in this case, nHRMS) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (such as advertising, interactive content and analytics).
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.
            </p>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You may disable these by changing your browser settings, but this may affect how the website functions.
              </p>
              <p className="mt-2 text-sm italic">Example: Session cookies for managing user authentication.</p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Performance and Analytics Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
              </p>
              <p className="mt-2 text-sm italic">Example: Google Analytics cookies to track page views and user journeys.</p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <p className="mt-2 text-sm italic">Example: Cookies that remember your preferences and settings.</p>
            </div>
            
            <div className="mt-4">
              <h3 className="font-medium text-foreground mb-2">Targeting/Marketing Cookies</h3>
              <p>
                These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
              </p>
              <p className="mt-2 text-sm italic">Example: Cookies used by advertising partners to build a profile of your interests.</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Cookies We Use</h2>
            <p>The following table explains the cookies we use and why:</p>
            
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-200 mt-2">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border-b border-r">Cookie Name</th>
                    <th className="px-4 py-2 text-left border-b border-r">Purpose</th>
                    <th className="px-4 py-2 text-left border-b border-r">Duration</th>
                    <th className="px-4 py-2 text-left border-b">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">_ga</td>
                    <td className="px-4 py-2 border-b border-r">Used to distinguish users for analytics</td>
                    <td className="px-4 py-2 border-b border-r">2 years</td>
                    <td className="px-4 py-2 border-b">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">_gid</td>
                    <td className="px-4 py-2 border-b border-r">Used to distinguish users for analytics</td>
                    <td className="px-4 py-2 border-b border-r">24 hours</td>
                    <td className="px-4 py-2 border-b">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">_gat</td>
                    <td className="px-4 py-2 border-b border-r">Used to throttle request rate</td>
                    <td className="px-4 py-2 border-b border-r">1 minute</td>
                    <td className="px-4 py-2 border-b">Analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">sessionid</td>
                    <td className="px-4 py-2 border-b border-r">Maintains user session</td>
                    <td className="px-4 py-2 border-b border-r">Session</td>
                    <td className="px-4 py-2 border-b">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">csrf_token</td>
                    <td className="px-4 py-2 border-b border-r">Security token to prevent CSRF attacks</td>
                    <td className="px-4 py-2 border-b border-r">Session</td>
                    <td className="px-4 py-2 border-b">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-r">user_preferences</td>
                    <td className="px-4 py-2 border-b border-r">Stores user preferences</td>
                    <td className="px-4 py-2 border-b border-r">1 year</td>
                    <td className="px-4 py-2 border-b">Functional</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Managing Cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
            <p className="mt-2">
              Different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Internet Explorer</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Opera</a></li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Cookie Consent</h2>
            <p>
              When you first visit our website, we will ask for your consent to use cookies (except for essential cookies which are necessary for the website to function properly). You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
            </p>
            <p className="mt-2">
              By using our website, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree to our use of cookies, you should set your browser settings accordingly or not use our website.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and improve our services:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Google Analytics</strong>: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.
              </li>
              <li>
                <strong>Social Media</strong>: We use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites including LinkedIn, Twitter, and Facebook, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Your Choices Regarding Cookies</h2>
            <p>
              If you want to delete cookies that are already on your device, please refer to the instructions for your file management software to locate the file or directory that stores cookies. Please note that by deleting our cookies or disabling future cookies you may not be able to access certain areas or features of our website.
            </p>
            <p className="mt-2">
              For more information on managing cookies, please visit:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><a href="https://www.allaboutcookies.org/manage-cookies/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.allaboutcookies.org/manage-cookies/</a></li>
              <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.youronlinechoices.eu/</a> (for EU residents)</li>
              <li><a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutads.info/choices/</a> (for US residents)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
            <p className="mt-2">
              You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
            </p>
            <div className="mt-2">
              <p>Email: privacy@nhrms.com</p>
              <p>Phone: +1 (314) 301-8402</p>
              <p>Address: nHRMS Inc., 123 Corporate Plaza, Suite 500, St. Louis, MO 63101</p>
            </div>
            <div className="mt-4">
              <p>
                For more information about how we handle your personal data, please see our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
