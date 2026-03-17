import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ReadinessHero from '@/components/labour-codes-readiness/ReadinessHero';
import TriggerSignalsSection from '@/components/labour-codes-readiness/TriggerSignalsSection';
import DifferentiatorSection from '@/components/labour-codes-readiness/DifferentiatorSection';
import CompetencyPillarsSection from '@/components/labour-codes-readiness/CompetencyPillarsSection';
import TargetSectorsSection from '@/components/labour-codes-readiness/TargetSectorsSection';
import SizeSegmentsSection from '@/components/labour-codes-readiness/SizeSegmentsSection';
import ReadinessCTASection from '@/components/labour-codes-readiness/ReadinessCTASection';

const LabourCodesReadiness = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Ready for New Labour Codes? | nHRMS"
        description="Is your organization ready for India's new Labour Codes? nHRMS provides integrated Legal + Finance + HR advisory for SMEs with 50-500 employees."
        keywords="labour codes India, labour code readiness, HR compliance, wage restructuring, PF ESIC gratuity, SME compliance"
        canonicalUrl="https://nhrms.com/labour-codes/readiness"
      />
      <Navbar />
      <main className="flex-grow">
        <ReadinessHero />
        <TriggerSignalsSection />
        <DifferentiatorSection />
        <CompetencyPillarsSection />
        <TargetSectorsSection />
        <SizeSegmentsSection />
        <ReadinessCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LabourCodesReadiness;
