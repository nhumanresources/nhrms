
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

// Research focus areas data
export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "Leadership Development Impact on Organizational Performance",
    authors: "",
    journal: "Journal of Leadership Studies",
    year: "2025",
    abstract: "This research focus area examines the correlation between structured leadership development programs and key performance indicators across industries.",
    category: "Leadership",
    link: "/research/leadership-development-impact"
  },
  {
    id: 2,
    title: "Quantifying ROI of Employee Experience Initiatives",
    authors: "",
    journal: "Human Resource Management Review",
    year: "2024",
    abstract: "A research area focused on employee experience programs and their measurable impact on retention, productivity, and financial outcomes.",
    category: "Employee Experience",
    link: "/research/employee-experience-roi"
  },
  {
    id: 3,
    title: "Psychological Safety in Virtual Work Environments",
    authors: "",
    journal: "Organizational Behavior Journal",
    year: "2024",
    abstract: "Research exploring how psychological safety is established and maintained in remote and hybrid work settings.",
    category: "Team Dynamics",
    link: "/research/psychological-safety-virtual"
  },
  {
    id: 4,
    title: "Generative AI Applications in HR Operations",
    authors: "",
    journal: "Technology in HR Quarterly",
    year: "2025",
    abstract: "An examination of current and emerging applications of generative AI across the HR function, with case studies and implementation frameworks.",
    category: "HR Technology",
    link: "/research/generative-ai-hr"
  },
  {
    id: 5,
    title: "Strategic Workforce Planning in the Age of Automation",
    authors: "",
    journal: "Future of Work Studies",
    year: "2025",
    abstract: "This research area presents models for workforce planning that account for increasing automation and changing skill requirements.",
    category: "Workforce Planning",
    link: "/research/workforce-planning-automation"
  }
];
