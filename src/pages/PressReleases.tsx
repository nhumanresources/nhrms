
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import PressReleasesList from '@/components/press-releases/PressReleasesList';

export default function PressReleases() {
  const pageTitle = "Press Releases & Media | n Human Resources and Management Systems - nHRMS";
  const pageDescription = "Stay updated with the latest press releases, media coverage, and articles featuring nHRMS and our contributions to the HR industry.";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "publisher": {
      "@type": "Organization",
      "name": "nHRMS",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nhrms.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="nHRMS press releases, HR management media coverage, HR technology news, organizational behavior articles"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Press Releases & Media</h1>
              <p className="text-lg text-muted-foreground">
                Stay updated with our latest press releases, media coverage, and industry insights
              </p>
            </div>
            
            <PressReleasesList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
