
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactContent from '@/components/contact/ContactContent';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    document.title = "Contact Us - n Human Resources and Management Systems";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact n Human Resources and Management Systems for all your HR consulting needs. Get in touch with our expert team for inquiries about executive search, HR advisory, and HR technology solutions.');
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
