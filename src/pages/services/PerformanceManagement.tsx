import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Award,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Cog,
  LineChart,
  ClipboardCheck,
  Download,
  FileText,
  Loader2
} from "lucide-react";
import { generatePMSChecklist, generateGoalSettingTemplate } from "@/utils/generatePMSResources";
import { toast } from "sonner";
const PerformanceManagement = () => {
  const [downloadingChecklist, setDownloadingChecklist] = useState(false);
  const [downloadingTemplate, setDownloadingTemplate] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Performance Management Systems | nHRMS";
  }, []);

  const handleDownloadChecklist = () => {
    setDownloadingChecklist(true);
    try {
      generatePMSChecklist();
      toast.success("PMS Implementation Checklist downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download checklist. Please try again.");
    } finally {
      setDownloadingChecklist(false);
    }
  };

  const handleDownloadTemplate = () => {
    setDownloadingTemplate(true);
    try {
      generateGoalSettingTemplate();
      toast.success("Goal-Setting Templates downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download template. Please try again.");
    } finally {
      setDownloadingTemplate(false);
    }
  };

  const services = [
    {
      icon: Target,
      title: "PMS Design & Architecture",
      description: "Custom performance management framework design aligned with your organizational goals, culture, and growth trajectory."
    },
    {
      icon: Cog,
      title: "System Implementation",
      description: "End-to-end implementation support including technology selection, configuration, and integration with existing HR systems."
    },
    {
      icon: ClipboardCheck,
      title: "Goal Setting Frameworks",
      description: "Design and deploy OKR, KPI, or hybrid goal-setting methodologies that drive accountability and results."
    },
    {
      icon: LineChart,
      title: "Continuous Feedback Systems",
      description: "Build real-time feedback mechanisms that foster ongoing development and agile performance conversations."
    },
    {
      icon: Users,
      title: "360° Review Programs",
      description: "Comprehensive multi-rater feedback systems that provide holistic insights into employee performance and potential."
    },
    {
      icon: Award,
      title: "Rewards & Recognition Integration",
      description: "Link performance outcomes to compensation, bonuses, and recognition programs for maximum impact."
    }
  ];

  const phases = [
    {
      phase: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current performance culture, processes, and pain points to understand your unique requirements.",
      items: ["Stakeholder interviews", "Current state analysis", "Benchmark comparison", "Gap identification"]
    },
    {
      phase: "02",
      title: "Design & Blueprint",
      description: "Create a tailored PMS framework that aligns with your organizational strategy and employee experience goals.",
      items: ["Framework design", "Competency mapping", "Rating scale development", "Workflow design"]
    },
    {
      phase: "03",
      title: "Implementation & Rollout",
      description: "Execute the implementation with comprehensive change management and stakeholder engagement.",
      items: ["Technology setup", "Manager training", "Employee communication", "Pilot programs"]
    },
    {
      phase: "04",
      title: "Optimization & Support",
      description: "Continuous improvement through data analysis, feedback loops, and ongoing refinement.",
      items: ["Performance analytics", "Process refinement", "Annual calibration", "Ongoing support"]
    }
  ];

  const benefits = [
    "Improved employee engagement and retention",
    "Clear alignment between individual and organizational goals",
    "Data-driven talent decisions and succession planning",
    "Reduced bias through structured evaluation processes",
    "Enhanced manager-employee relationships",
    "Measurable ROI on human capital investments"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <BarChart3 className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Talent Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Performance Management{" "}
              <span className="text-gradient-warm">Systems</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              Design, implement, and run high-impact performance management systems that drive organizational excellence and employee growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                asChild
              >
                <a href="mailto:krishna@nhrms.com">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                asChild
              >
                <Link to="/services/talent-solutions">
                  Explore Talent Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive PMS Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From strategy to execution, we provide end-to-end performance management expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Proven Four-Phase Methodology
            </h2>
            <p className="text-lg text-muted-foreground">
              Our structured approach ensures successful PMS design and implementation with measurable outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {phase.phase}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Invest in a{" "}
                <span className="text-gradient-warm">Strategic PMS?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                A well-designed performance management system is the cornerstone of organizational success, driving engagement, productivity, and sustainable growth.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
              <div className="relative p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-white/80 mx-auto mb-6" />
                  <div className="text-5xl font-bold mb-2">87%</div>
                  <p className="text-white/70 text-lg">
                    of organizations with effective PMS report higher employee engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <Download className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Free Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              PMS Implementation Toolkit
            </h2>
            <p className="text-lg text-muted-foreground">
              Download practical tools to kickstart your performance management transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Checklist Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <ClipboardCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  PMS Implementation Checklist
                </h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive step-by-step checklist covering all four phases of PMS implementation—from discovery to optimization.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    20+ actionable items
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    Pro tips included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    Print-ready format
                  </li>
                </ul>
                <Button 
                  onClick={handleDownloadChecklist}
                  disabled={downloadingChecklist}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {downloadingChecklist ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Template Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Goal-Setting Templates
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ready-to-use SMART goals and OKR templates with examples to help your teams set clear, measurable objectives.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    SMART goals worksheet
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    OKR framework template
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    Real-world examples
                  </li>
                </ul>
                <Button 
                  onClick={handleDownloadTemplate}
                  disabled={downloadingTemplate}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {downloadingTemplate ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Performance Culture?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's design a performance management system that drives results and empowers your people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                asChild
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold px-8"
                asChild
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceManagement;
