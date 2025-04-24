
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PartnersSection from '@/components/partners/PartnersSection';

export default function Partners() {
  const pageTitle = "Technology Partners | n Human Resources and Management Systems - nHRMS";
  const pageDescription = "nHRMS partners with leading technology providers like Keka, GreytHR, Oracle, Microsoft, and Google to deliver cutting-edge HR solutions.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "nHRMS",
    "description": pageDescription,
    "partner": [
      {
        "@type": "Organization",
        "name": "Keka",
        "description": "HR & Payroll Software"
      },
      {
        "@type": "Organization",
        "name": "GreytHR",
        "description": "HR Management Software"
      },
      {
        "@type": "Organization",
        "name": "Oracle",
        "description": "Enterprise Technology Solutions"
      },
      {
        "@type": "Organization",
        "name": "Microsoft",
        "description": "Enterprise Technology Solutions"
      },
      {
        "@type": "Organization",
        "name": "Google",
        "description": "Enterprise Technology Solutions"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="HR technology partners, HR software partners, Keka, GreytHR, Oracle, Microsoft, Google"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
