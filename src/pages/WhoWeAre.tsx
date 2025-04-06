
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
      linkedin: "https://linkedin.com/in/saikrshna/",
      imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Usha Sai",
      title: "Partner",
      bio: "Usha brings 15+ years of operational leadership experience, specializing in scaling professional services organizations and optimizing service delivery.",
      linkedin: "https://linkedin.com/in/ushasai/",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Ajoy Varma",
      title: "Head of Research",
      bio: "Ajoy leads our research initiatives with over 18 years of experience in HR analytics and workforce insights, driving innovation through data-driven approaches.",
      linkedin: "https://linkedin.com/in/ajoyvarma/",
      imageSrc: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
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
