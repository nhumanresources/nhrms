
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactContent from '@/components/contact/ContactContent';
import { toast } from 'sonner';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Contact Us - Nurturing Human Resources & Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact nHRMS (Nurturing Human Resources & Management Systems) for all your HR consulting needs. Get in touch with our expert team for inquiries about executive search, HR advisory, and HR technology solutions.');
    }
    
    // Check for success parameter in URL to show toast message
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Your message has been sent! We will get back to you soon.');
      
      // Clean up the URL
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}
