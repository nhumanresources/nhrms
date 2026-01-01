export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  moduleCount: number;
  modules: PathModule[];
  targetAudience: string[];
  outcomes: string[];
  featured?: boolean;
}

export interface PathModule {
  order: number;
  courseId: string;
  title: string;
  duration: string;
  description: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: 'founders-hr-essentials',
    title: "Founder's HR Essentials",
    description: "Everything a startup founder needs to know about HR—from hiring your first employee to building a scalable people function. No jargon, just practical knowledge.",
    level: 'beginner',
    duration: '4 hours',
    moduleCount: 8,
    featured: true,
    targetAudience: [
      'First-time founders',
      'Solo entrepreneurs scaling their team',
      'Technical founders with no HR background',
    ],
    outcomes: [
      'Confidently hire your first 10 employees',
      'Stay compliant with essential labour laws',
      'Know when to make your first HR hire',
      'Set up basic HR processes that scale',
    ],
    modules: [
      {
        order: 1,
        courseId: 'interview-best-practices',
        title: 'Interviewing Without HR Training',
        duration: '30 min',
        description: 'Learn to evaluate candidates effectively',
      },
      {
        order: 2,
        courseId: 'talent-acquisition-strategy',
        title: 'Building Your Hiring Process',
        duration: '30 min',
        description: 'Create a repeatable hiring framework',
      },
      {
        order: 3,
        courseId: 'employee-onboarding',
        title: 'Onboarding New Hires',
        duration: '30 min',
        description: 'Set employees up for success from day one',
      },
      {
        order: 4,
        courseId: 'payroll-basics-india',
        title: 'Payroll Fundamentals',
        duration: '30 min',
        description: 'Understand salary structures and compliance',
      },
      {
        order: 5,
        courseId: 'epf-esi-essentials',
        title: 'Statutory Compliance Basics',
        duration: '30 min',
        description: 'EPF, ESI, and essential registrations',
      },
      {
        order: 6,
        courseId: 'posh-compliance',
        title: 'POSH Requirements',
        duration: '30 min',
        description: 'Prevention of sexual harassment compliance',
      },
      {
        order: 7,
        courseId: 'first-hr-function',
        title: 'When to Hire HR',
        duration: '30 min',
        description: 'Decide between hiring or outsourcing',
      },
      {
        order: 8,
        courseId: 'choosing-first-hrms',
        title: 'Choosing Your First HR Tool',
        duration: '30 min',
        description: 'Select technology that grows with you',
      },
    ],
  },
  {
    id: 'hr-manager-tech-toolkit',
    title: "HR Manager's Tech Toolkit",
    description: "Master the technology skills every modern HR professional needs. From selecting the right tools to implementing them successfully, become the tech-savvy HR leader your organization needs.",
    level: 'intermediate',
    duration: '6 hours',
    moduleCount: 10,
    featured: true,
    targetAudience: [
      'HR managers looking to modernize',
      'People operations professionals',
      'HR generalists expanding their skills',
    ],
    outcomes: [
      'Evaluate and select HR technology confidently',
      'Lead successful HRMS implementations',
      'Use data to drive HR decisions',
      'Integrate HR systems effectively',
    ],
    modules: [
      {
        order: 1,
        courseId: 'choosing-first-hrms',
        title: 'HRMS Selection Framework',
        duration: '40 min',
        description: 'Evaluate and choose the right system',
      },
      {
        order: 2,
        courseId: 'hr-tech-evaluation',
        title: 'Vendor Evaluation Deep Dive',
        duration: '40 min',
        description: 'Beyond features—what really matters',
      },
      {
        order: 3,
        courseId: 'hr-tech-implementation',
        title: 'Implementation Planning',
        duration: '40 min',
        description: 'Set up for implementation success',
      },
      {
        order: 4,
        courseId: 'hr-tech-implementation',
        title: 'Change Management',
        duration: '30 min',
        description: 'Drive adoption across the organization',
      },
      {
        order: 5,
        courseId: 'hr-tech-implementation',
        title: 'Data Migration',
        duration: '30 min',
        description: 'Move data safely and accurately',
      },
      {
        order: 6,
        courseId: 'data-driven-hr',
        title: 'HR Analytics Basics',
        duration: '40 min',
        description: 'Start measuring what matters',
      },
      {
        order: 7,
        courseId: 'data-driven-hr',
        title: 'Building Dashboards',
        duration: '30 min',
        description: 'Visualize HR data effectively',
      },
      {
        order: 8,
        courseId: 'recruitment-metrics',
        title: 'Recruitment Analytics',
        duration: '30 min',
        description: 'Measure hiring effectiveness',
      },
      {
        order: 9,
        courseId: 'data-driven-hr',
        title: 'Predictive HR Analytics',
        duration: '30 min',
        description: 'Forecast attrition and performance',
      },
      {
        order: 10,
        courseId: 'data-driven-hr',
        title: 'Presenting to Leadership',
        duration: '30 min',
        description: 'Communicate insights that drive action',
      },
    ],
  },
  {
    id: 'compliance-mastery',
    title: 'Compliance Mastery',
    description: "Become the compliance expert your organization needs. From the new labour codes to POSH, master the regulatory landscape and keep your organization protected.",
    level: 'advanced',
    duration: '8 hours',
    moduleCount: 12,
    featured: true,
    targetAudience: [
      'HR compliance officers',
      'Legal and compliance teams',
      'HR leaders responsible for compliance',
    ],
    outcomes: [
      'Master all four new labour codes',
      'Implement comprehensive compliance programs',
      'Prepare for and handle audits confidently',
      'Train others on compliance requirements',
    ],
    modules: [
      {
        order: 1,
        courseId: 'labour-codes-explained',
        title: 'Labour Codes Overview',
        duration: '45 min',
        description: 'Understand the new regulatory framework',
      },
      {
        order: 2,
        courseId: 'labour-codes-explained',
        title: 'Code on Wages',
        duration: '45 min',
        description: 'Wage definitions, minimums, and payments',
      },
      {
        order: 3,
        courseId: 'labour-codes-explained',
        title: 'Industrial Relations Code',
        duration: '45 min',
        description: 'Trade unions, disputes, and standing orders',
      },
      {
        order: 4,
        courseId: 'labour-codes-explained',
        title: 'Social Security Code',
        duration: '45 min',
        description: 'EPF, ESI, gratuity, and maternity',
      },
      {
        order: 5,
        courseId: 'labour-codes-explained',
        title: 'OSH Code',
        duration: '45 min',
        description: 'Occupational safety, health, and conditions',
      },
      {
        order: 6,
        courseId: 'epf-esi-essentials',
        title: 'EPF Deep Dive',
        duration: '40 min',
        description: 'Provident fund compliance and administration',
      },
      {
        order: 7,
        courseId: 'epf-esi-essentials',
        title: 'ESI Deep Dive',
        duration: '30 min',
        description: 'Employee state insurance compliance',
      },
      {
        order: 8,
        courseId: 'posh-compliance',
        title: 'POSH Compliance',
        duration: '45 min',
        description: 'Prevention of sexual harassment requirements',
      },
      {
        order: 9,
        courseId: 'shops-establishments-act',
        title: 'Shops & Establishments',
        duration: '30 min',
        description: 'State-specific compliance requirements',
      },
      {
        order: 10,
        courseId: 'payroll-compliance-checklist',
        title: 'Payroll Compliance',
        duration: '30 min',
        description: 'Statutory deductions and filings',
      },
      {
        order: 11,
        courseId: 'hr-policies-growing-teams',
        title: 'Compliance Policies',
        duration: '45 min',
        description: 'Draft and implement compliant policies',
      },
      {
        order: 12,
        courseId: 'labour-codes-explained',
        title: 'Audit Preparation',
        duration: '35 min',
        description: 'Prepare for compliance audits',
      },
    ],
  },
  {
    id: 'scalable-talent-function',
    title: 'Building a Scalable Talent Function',
    description: "Transform ad-hoc hiring into a strategic talent acquisition machine. Learn to build processes, metrics, and employer brand that attract top talent consistently.",
    level: 'intermediate',
    duration: '5 hours',
    moduleCount: 10,
    targetAudience: [
      'Talent acquisition leaders',
      'HR managers scaling hiring',
      'Founders moving past ad-hoc recruiting',
    ],
    outcomes: [
      'Build a structured recruiting process',
      'Develop a compelling employer brand',
      'Implement recruitment metrics that matter',
      'Scale hiring without losing quality',
    ],
    modules: [
      {
        order: 1,
        courseId: 'talent-acquisition-strategy',
        title: 'Talent Strategy Foundations',
        duration: '35 min',
        description: 'Align hiring with business goals',
      },
      {
        order: 2,
        courseId: 'talent-acquisition-strategy',
        title: 'Job Architecture',
        duration: '30 min',
        description: 'Create job families and levels',
      },
      {
        order: 3,
        courseId: 'talent-acquisition-strategy',
        title: 'Sourcing Strategy',
        duration: '30 min',
        description: 'Build a diverse candidate pipeline',
      },
      {
        order: 4,
        courseId: 'interview-best-practices',
        title: 'Interview Process Design',
        duration: '35 min',
        description: 'Structure interviews for consistency',
      },
      {
        order: 5,
        courseId: 'interview-best-practices',
        title: 'Interviewer Training',
        duration: '25 min',
        description: 'Enable hiring managers to interview well',
      },
      {
        order: 6,
        courseId: 'employer-branding-startup',
        title: 'Employer Brand Strategy',
        duration: '35 min',
        description: 'Build your employer value proposition',
      },
      {
        order: 7,
        courseId: 'employer-branding-startup',
        title: 'Candidate Experience',
        duration: '25 min',
        description: 'Create a memorable hiring journey',
      },
      {
        order: 8,
        courseId: 'recruitment-metrics',
        title: 'Metrics Framework',
        duration: '30 min',
        description: 'Measure what drives results',
      },
      {
        order: 9,
        courseId: 'recruitment-metrics',
        title: 'Quality of Hire',
        duration: '25 min',
        description: 'Track and improve hiring outcomes',
      },
      {
        order: 10,
        courseId: 'choosing-first-hrms',
        title: 'Recruitment Technology',
        duration: '30 min',
        description: 'Tools that scale your process',
      },
    ],
  },
];

export function getFeaturedPaths(): LearningPath[] {
  return learningPaths.filter(path => path.featured);
}

export function getPathById(id: string): LearningPath | undefined {
  return learningPaths.find(path => path.id === id);
}
