
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import HeroSection from '@/components/who-we-are/HeroSection';
import OurAimSection from '@/components/who-we-are/OurAimSection';
import MissionValuesSection from '@/components/who-we-are/MissionValuesSection';
import OurStorySection from '@/components/who-we-are/OurStorySection';
import LeadershipTeamSection from '@/components/who-we-are/LeadershipTeamSection';
import StatsSection from '@/components/who-we-are/StatsSection';
import CTASection from '@/components/who-we-are/CTASection';
import OurApproachSection from '@/components/who-we-are/OurApproachSection';

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Who We Are | n Human Resources and Management Systems - nHRMS";
  const pageDescription = "Learn about n Human Resources and Management Systems (nHRMS), a leading HR management consulting firm dedicated to helping organizations optimize their human capital.";

  const leadershipTeam = [
    {
      name: "Sai Varma",
      title: "Partner",
      bio: "With over 20 years of experience in HR consulting, Sai has led transformational HR initiatives for Fortune 500 companies across multiple industries.",
      linkedin: "https://linkedin.com/in/saikrshna/"
    },
    {
      name: "Usha Sai",
      title: "Partner",
      bio: "Usha brings 15+ years of operational leadership experience, specializing in scaling professional services organizations and optimizing service delivery.",
      linkedin: "https://linkedin.com/in/ushasai/"
    },
    {
      name: "Dr. Ajoy Bhupatiraju",
      title: "Head of Research",
      bio: "Dr. Bhupatiraju has an interest in interdisciplinary research and keen participant in HR Research since 2 years with nHRMS.",
      linkedin: "https://www.linkedin.com/in/ajoy-bhupatiraju-3700986/"
    },
    {
      name: "Venkat Raman",
      title: "Principal Consultant - Functional HR Tech",
      bio: "Venkat brings rich 15 years of industry experience with leading firms like Flipkart and Cipla, where he managed large HR areas and functional HR technology implementations.",
      linkedin: "https://linkedin.com/in/bvenkat/"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "nHRMS",
      "description": pageDescription,
      "foundingDate": "2003",
      "employee": leadershipTeam.map(leader => ({
        "@type": "Person",
        "name": leader.name,
        "jobTitle": leader.title,
        "description": leader.bio,
        "sameAs": leader.linkedin
      }))
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="HR consulting, HR management, human capital, leadership team, HR strategy, nHRMS"
        canonicalUrl="https://nhrms.com/who-we-are"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <OurApproachSection />
        <OurAimSection />
        <MissionValuesSection />
        <OurStorySection />
        <LeadershipTeamSection leaders={leadershipTeam} />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
