
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HRRoadmap() {
  const pageTitle = "HR Career Roadmap | nHRMS";
  const pageDescription = "Explore comprehensive roadmaps for different HR career paths, skills, and specializations in the modern workplace.";

  const [selectedRole, setSelectedRole] = useState<string>('hr-generalist');
  
  const roles = [
    { id: 'hr-generalist', name: 'HR Generalist' },
    { id: 'recruiter', name: 'Recruiter / Talent Acquisition' },
    { id: 'hr-business-partner', name: 'HR Business Partner' },
    { id: 'learning-development', name: 'Learning & Development Specialist' },
    { id: 'compensation-benefits', name: 'Compensation & Benefits Specialist' },
    { id: 'hr-analytics', name: 'HR Analytics Professional' },
    { id: 'chro', name: 'Chief Human Resources Officer (CHRO)' }
  ];

  const roadmaps = {
    'hr-generalist': {
      title: "HR Generalist Roadmap",
      description: "A comprehensive guide to becoming a well-rounded HR Generalist who can handle various aspects of human resources management.",
      fundamentals: [
        "Employment Law Basics",
        "HR Policies & Procedures",
        "Employee Relations",
        "Onboarding & Offboarding",
        "HRIS Systems",
        "HR Administration"
      ],
      intermediate: [
        "Performance Management",
        "Compensation & Benefits",
        "Employee Engagement",
        "Compliance & Risk Management",
        "HR Reporting"
      ],
      advanced: [
        "HR Strategy Alignment",
        "Talent Management",
        "Change Management",
        "HR Project Management",
        "HR Analytics"
      ],
      specializations: [
        "Employee Experience",
        "HR Operations",
        "HR Technology",
        "DEI Initiatives"
      ],
      certifications: [
        "SHRM-CP (Society for Human Resource Management - Certified Professional)",
        "PHR (Professional in Human Resources)",
        "HRCI Associate Professional in Human Resources (aPHR)"
      ]
    },
    'recruiter': {
      title: "Recruiter / Talent Acquisition Roadmap",
      description: "Your path to becoming an effective recruiter who can attract, assess, and secure top talent for organizations.",
      fundamentals: [
        "Talent Sourcing Techniques",
        "Job Description Development",
        "Candidate Screening",
        "Interview Techniques",
        "ATS (Applicant Tracking Systems)",
        "Recruitment Marketing"
      ],
      intermediate: [
        "Employer Branding",
        "Candidate Experience Management",
        "Recruitment Analytics",
        "Boolean Search Techniques",
        "Diversity Sourcing"
      ],
      advanced: [
        "Strategic Workforce Planning",
        "Talent Pipeline Development",
        "Recruitment Automation",
        "Predictive Hiring Analytics",
        "Executive Recruitment"
      ],
      specializations: [
        "Technical Recruitment",
        "Campus Recruitment",
        "Executive Search",
        "Global Recruitment"
      ],
      certifications: [
        "Certified Recruiter (CR)",
        "Talent Acquisition Strategist (TAS)",
        "LinkedIn Recruiter Certification"
      ]
    },
    'hr-business-partner': {
      title: "HR Business Partner Roadmap",
      description: "Develop as a strategic HR Business Partner who connects people strategies with business objectives.",
      fundamentals: [
        "Business Acumen",
        "HR Fundamentals",
        "Organizational Design",
        "Strategic Planning",
        "Stakeholder Management",
        "Consulting Skills"
      ],
      intermediate: [
        "Change Management",
        "Workforce Planning",
        "Performance Consulting",
        "Employee Relations",
        "HR Metrics & Analytics"
      ],
      advanced: [
        "Organizational Development",
        "Strategic Workforce Planning",
        "Executive Coaching",
        "Talent Strategy",
        "HR Transformation"
      ],
      specializations: [
        "Culture Transformation",
        "Mergers & Acquisitions",
        "Digital HR Transformation",
        "Global HRBP"
      ],
      certifications: [
        "SHRM-SCP (Senior Certified Professional)",
        "SPHR (Senior Professional in Human Resources)",
        "HRCI - GPHR (Global Professional in Human Resources)"
      ]
    },
    'learning-development': {
      title: "Learning & Development Specialist Roadmap",
      description: "Guide to becoming an effective L&D professional who can design, deliver, and evaluate impactful learning programs.",
      fundamentals: [
        "Adult Learning Principles",
        "Training Needs Analysis",
        "Instructional Design Basics",
        "Facilitation Skills",
        "eLearning Fundamentals",
        "Learning Program Management"
      ],
      intermediate: [
        "Learning Experience Design",
        "Blended Learning Approaches",
        "LMS Administration",
        "Learning Analytics",
        "Content Development"
      ],
      advanced: [
        "Learning Strategy Development",
        "Learning Technology Ecosystem",
        "Advanced Instructional Design",
        "Performance Consulting",
        "Learning Impact Measurement"
      ],
      specializations: [
        "Leadership Development",
        "Technical Training",
        "Sales Training",
        "Learning Technology"
      ],
      certifications: [
        "ATD Certified Professional in Learning & Performance (CPLP)",
        "Certified Training & Development Professional",
        "Instructional Design Certification"
      ]
    },
    'compensation-benefits': {
      title: "Compensation & Benefits Specialist Roadmap",
      description: "Path to specializing in designing and managing competitive compensation and benefits programs.",
      fundamentals: [
        "Compensation Fundamentals",
        "Benefits Administration",
        "Payroll Processing",
        "Job Evaluation Methods",
        "Salary Structure Development",
        "Compliance Requirements"
      ],
      intermediate: [
        "Market Pricing",
        "Total Rewards Strategy",
        "Incentive Plan Design",
        "Benefits Program Management",
        "Executive Compensation"
      ],
      advanced: [
        "Global Compensation",
        "Equity Compensation",
        "Strategic Total Rewards",
        "Compensation Analytics",
        "Financial Modeling"
      ],
      specializations: [
        "Executive Compensation",
        "Sales Compensation",
        "International Benefits",
        "Retirement Plans"
      ],
      certifications: [
        "Certified Compensation Professional (CCP)",
        "Certified Benefits Professional (CBP)",
        "Global Remuneration Professional (GRP)"
      ]
    },
    'hr-analytics': {
      title: "HR Analytics Professional Roadmap",
      description: "Guide to becoming a data-driven HR professional who can leverage analytics to drive business decisions.",
      fundamentals: [
        "HR Metrics Basics",
        "Data Collection & Cleaning",
        "Statistical Concepts",
        "Data Visualization",
        "HR Information Systems",
        "Reporting Fundamentals"
      ],
      intermediate: [
        "Advanced Excel for HR",
        "HR Dashboard Development",
        "Predictive Analytics",
        "SQL Basics",
        "Survey Design & Analysis"
      ],
      advanced: [
        "Machine Learning for HR",
        "Workforce Planning Models",
        "Advanced Statistical Analysis",
        "Storytelling with Data",
        "Prescriptive Analytics"
      ],
      specializations: [
        "Recruitment Analytics",
        "People Analytics",
        "Compensation Analytics",
        "Engagement Analytics"
      ],
      certifications: [
        "People Analytics Certification",
        "HR Data Analyst Certification",
        "Tableau or Power BI Certification"
      ]
    },
    'chro': {
      title: "Chief Human Resources Officer (CHRO) Roadmap",
      description: "Executive pathway to the top HR leadership role focusing on strategic business partnership and organizational transformation.",
      fundamentals: [
        "Strategic HR Leadership",
        "Business & Financial Acumen",
        "Organizational Design",
        "Executive Communication",
        "Change Leadership",
        "Board Relations"
      ],
      intermediate: [
        "HR Transformation",
        "Talent Strategy",
        "M&A HR Integration",
        "Crisis Management",
        "Executive Team Building"
      ],
      advanced: [
        "Organizational Culture Shaping",
        "Corporate Governance",
        "Global HR Strategy",
        "HR Innovation",
        "Succession Planning"
      ],
      specializations: [
        "Digital Transformation",
        "High-Growth Organizations",
        "Turnaround Situations",
        "Global Enterprises"
      ],
      certifications: [
        "SHRM-SCP (Senior Certified Professional)",
        "SPHR (Senior Professional in Human Resources)",
        "Corporate Director Certification"
      ]
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": pageTitle,
    "description": pageDescription,
    "provider": {
      "@type": "Organization",
      "name": "nHRMS",
      "url": "https://nhrms.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords="HR career roadmap, HR roles, HR skills, human resources development, HR career path"
        structuredData={structuredData}
      />
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-10 md:py-16 bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                HR Career Roadmaps
              </h1>
              <p className="text-lg text-muted-foreground">
                Interactive guides to help you navigate your career in Human Resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 mb-12">
              {/* Role Selection Sidebar */}
              <div className="md:col-span-2 bg-card rounded-lg p-4 border border-border/50 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 px-2">Choose a Career Path</h2>
                <div className="space-y-1">
                  {roles.map((role) => (
                    <Button 
                      key={role.id}
                      variant={selectedRole === role.id ? "default" : "ghost"} 
                      className="w-full justify-start text-left"
                      onClick={() => setSelectedRole(role.id)}
                    >
                      {selectedRole === role.id && <Check className="mr-2 h-4 w-4" />}
                      {role.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Roadmap Content */}
              <div className="md:col-span-5 bg-card rounded-lg p-6 border border-border/50 shadow-sm">
                {selectedRole && roadmaps[selectedRole as keyof typeof roadmaps] && (
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{roadmaps[selectedRole as keyof typeof roadmaps].title}</h2>
                    <p className="text-muted-foreground mb-6">
                      {roadmaps[selectedRole as keyof typeof roadmaps].description}
                    </p>
                    
                    <div className="space-y-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="fundamentals" className="border border-primary/20 rounded-lg mb-4">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/5 rounded-t-lg">
                            <span className="text-lg font-medium flex items-center">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">1</span>
                              Fundamentals
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-2">
                            <ul className="space-y-2 ml-14">
                              {roadmaps[selectedRole as keyof typeof roadmaps].fundamentals.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                    <Check size={12} />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="intermediate" className="border border-primary/20 rounded-lg mb-4">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/5 rounded-t-lg">
                            <span className="text-lg font-medium flex items-center">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">2</span>
                              Intermediate Skills
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-2">
                            <ul className="space-y-2 ml-14">
                              {roadmaps[selectedRole as keyof typeof roadmaps].intermediate.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                    <Check size={12} />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="advanced" className="border border-primary/20 rounded-lg mb-4">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/5 rounded-t-lg">
                            <span className="text-lg font-medium flex items-center">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">3</span>
                              Advanced Capabilities
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-2">
                            <ul className="space-y-2 ml-14">
                              {roadmaps[selectedRole as keyof typeof roadmaps].advanced.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                    <Check size={12} />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="specializations" className="border border-primary/20 rounded-lg mb-4">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/5 rounded-t-lg">
                            <span className="text-lg font-medium flex items-center">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">4</span>
                              Specialization Paths
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-2">
                            <ul className="space-y-2 ml-14">
                              {roadmaps[selectedRole as keyof typeof roadmaps].specializations.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                    <Check size={12} />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="certifications" className="border border-primary/20 rounded-lg">
                          <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-primary/5 rounded-t-lg">
                            <span className="text-lg font-medium flex items-center">
                              <span className="bg-primary/10 text-primary w-8 h-8 rounded-full inline-flex items-center justify-center mr-3">5</span>
                              Recommended Certifications
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 pb-4 pt-2">
                            <ul className="space-y-2 ml-14">
                              {roadmaps[selectedRole as keyof typeof roadmaps].certifications.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-2 mt-0.5">
                                    <Check size={12} />
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mt-12 pt-8 border-t border-border/30">
              <h2 className="text-2xl font-bold mb-4">Start Your HR Career Journey Today</h2>
              <p className="text-muted-foreground mb-6">
                These roadmaps are designed to guide HR professionals at every stage of their careers.
                Whether you're just starting out or looking to advance to senior leadership roles,
                we provide the insights and resources you need.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="default" size="lg">
                  Explore Training Programs
                </Button>
                <Button variant="outline" size="lg">
                  Download Roadmap PDF
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
