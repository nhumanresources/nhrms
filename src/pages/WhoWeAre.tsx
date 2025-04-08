
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/who-we-are/HeroSection';
import OurAimSection from '@/components/who-we-are/OurAimSection';
import MissionValuesSection from '@/components/who-we-are/MissionValuesSection';
import OurStorySection from '@/components/who-we-are/OurStorySection';
import LeadershipTeamSection from '@/components/who-we-are/LeadershipTeamSection';
import StatsSection from '@/components/who-we-are/StatsSection';
import CTASection from '@/components/who-we-are/CTASection';
import OurApproachSection from '@/components/who-we-are/OurApproachSection';
import InvestorsSection from '@/components/who-we-are/InvestorsSection';

export default function WhoWeAre() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Set page title and meta description for SEO
    document.title = "Who are we | n Human Resources and Management Systems - nHRMS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about n Human Resources and Management Systems (nHRMS), a leading HR management consulting firm dedicated to helping organizations optimize their human capital.');
    }
  }, []);

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
      bio: "Dr. Ajoy leads our research initiatives with over 18 years of experience in HR analytics and workforce insights, driving innovation through data-driven approaches.",
      linkedin: "https://www.linkedin.com/in/ajoy-bhupatiraju-3700986/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <OurApproachSection />
        <OurAimSection />
        <MissionValuesSection />
        <OurStorySection />
        <LeadershipTeamSection leaders={leadershipTeam} />
        <InvestorsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
