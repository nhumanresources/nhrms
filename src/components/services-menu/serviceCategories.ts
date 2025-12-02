
import { ServiceCategoryType } from "./types";

export const serviceCategories: ServiceCategoryType[] = [
  {
    id: "solutions",
    title: "Solutions",
    items: [
      {
        name: "Executive Search",
        link: "/services/executive-search",
        description: "Find exceptional leaders who align with your organization's vision."
      },
      {
        name: "HR Advisory",
        link: "/services/hr-advisory",
        description: "Strategic consulting to optimize your human capital strategy."
      },
      {
        name: "Go to Market",
        link: "/services/go-to-market",
        description: "Specialized strategies to bring your HR solutions to market."
      },
      {
        name: "Talent Acquisition",
        link: "/services/talent-acquisition",
        description: "Build high-performing teams that drive success."
      },
      {
        name: "Fractional HR Solutions (BOT)",
        link: "/services/bot-hr-teams",
        description: "Build-Operate-Transfer HR teams and fractional HR solutions."
      },
      {
        name: "HR Technology",
        link: "/services/hr-tech",
        description: "Implementation and optimization of HR technology systems."
      }
    ]
  },
  {
    id: "services",
    title: "Services",
    items: [
      {
        name: "Organization Strategy",
        link: "/services/organization-strategy",
        description: "Align your organizational design with business objectives."
      },
      {
        name: "Total Rewards",
        link: "/services/total-rewards",
        description: "Develop compensation and benefits strategies to attract talent."
      },
      {
        name: "Leadership Development",
        link: "/services/leadership-&-professional-development",
        description: "Build leadership capabilities across your organization."
      },
      {
        name: "Career Development",
        link: "/services/career-development",
        description: "Create pathways for employee growth and advancement."
      },
      {
        name: "Diversity & Inclusion",
        link: "/services/hr-advisory",
        description: "Build inclusive cultures that embrace diversity."
      },
      {
        name: "Workforce Transformation",
        link: "/services/hr-advisory",
        description: "Navigate change and prepare your workforce for the future."
      }
    ]
  },
  {
    id: "learning",
    title: "Learning",
    items: [
      {
        name: "Learning Solutions",
        link: "/learning-solutions",
        description: "Comprehensive training programs for professional development."
      },
      {
        name: "Certifications",
        link: "/services/certifications",
        description: "Industry-recognized certifications for HR professionals."
      },
      {
        name: "Internship Programs",
        link: "/services/internship-programs",
        description: "Structured programs for students seeking HR experience."
      },
      {
        name: "Research Opportunities",
        link: "/research",
        description: "Participate in cutting-edge HR research and studies."
      }
    ]
  }
];
