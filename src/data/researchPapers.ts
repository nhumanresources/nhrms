
export interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  category: string;
  link: string;
}

// Research papers data
export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "The Impact of Leadership Development on Organizational Performance",
    authors: "Johnson, L., & Smith, A.",
    journal: "Journal of Leadership Studies",
    year: "2025",
    abstract: "This study examines the correlation between structured leadership development programs and key performance indicators across industries.",
    category: "Leadership",
    link: "/research/leadership-development-impact"
  },
  {
    id: 2,
    title: "Quantifying the ROI of Employee Experience Initiatives",
    authors: "Chen, M., Williams, K., & Patel, S.",
    journal: "Human Resource Management Review",
    year: "2024",
    abstract: "A comprehensive analysis of employee experience programs and their measurable impact on retention, productivity, and financial outcomes.",
    category: "Employee Experience",
    link: "/research/employee-experience-roi"
  },
  {
    id: 3,
    title: "Psychological Safety and Team Performance in Virtual Environments",
    authors: "Rodriguez, J., & Kim, H.",
    journal: "Organizational Behavior Journal",
    year: "2024",
    abstract: "Research exploring how psychological safety is established and maintained in remote and hybrid work settings.",
    category: "Team Dynamics",
    link: "/research/psychological-safety-virtual"
  },
  {
    id: 4,
    title: "Generative AI Applications in HR Operations",
    authors: "Gupta, R., Thompson, E., & Okafor, N.",
    journal: "Technology in HR Quarterly",
    year: "2025",
    abstract: "An examination of current and emerging applications of generative AI across the HR function, with case studies and implementation frameworks.",
    category: "HR Technology",
    link: "/research/generative-ai-hr"
  },
  {
    id: 5,
    title: "Strategic Workforce Planning in the Age of Automation",
    authors: "Nakamura, T., & Anderson, P.",
    journal: "Future of Work Studies",
    year: "2025",
    abstract: "This paper presents models for workforce planning that account for increasing automation and changing skill requirements.",
    category: "Workforce Planning",
    link: "/research/workforce-planning-automation"
  }
];
