export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'template' | 'checklist' | 'calculator' | 'whitepaper' | 'infographic' | 'webinar';
  topic: 'recruiting' | 'hr-management' | 'payroll' | 'compliance' | 'hr-tech';
  downloadUrl?: string;
  premium?: boolean;
}

export const resourceTypeLabels: Record<Resource['type'], string> = {
  'template': 'Template',
  'checklist': 'Checklist',
  'calculator': 'Calculator',
  'whitepaper': 'Whitepaper',
  'infographic': 'Infographic',
  'webinar': 'Webinar Recording',
};

export const resourceTypeIcons: Record<Resource['type'], string> = {
  'template': 'FileText',
  'checklist': 'CheckSquare',
  'calculator': 'Calculator',
  'whitepaper': 'BookOpen',
  'infographic': 'Image',
  'webinar': 'Video',
};

export const resources: Resource[] = [
  // Templates
  {
    id: 'jd-template-pack',
    title: 'Job Description Template Pack',
    description: '20+ ready-to-use job description templates covering common roles across departments.',
    type: 'template',
    topic: 'recruiting',
  },
  {
    id: 'offer-letter-template',
    title: 'Offer Letter Template',
    description: 'Legally compliant offer letter template with all essential clauses.',
    type: 'template',
    topic: 'recruiting',
  },
  {
    id: 'hr-policy-handbook',
    title: 'HR Policy Handbook Template',
    description: 'Comprehensive HR policy handbook covering leave, conduct, benefits, and more.',
    type: 'template',
    topic: 'hr-management',
    premium: true,
  },
  {
    id: 'performance-review-template',
    title: 'Performance Review Templates',
    description: 'Annual and mid-year performance review templates with rating scales.',
    type: 'template',
    topic: 'hr-management',
  },
  {
    id: 'exit-interview-template',
    title: 'Exit Interview Template',
    description: 'Structured exit interview questionnaire to gather valuable feedback.',
    type: 'template',
    topic: 'hr-management',
  },
  {
    id: 'appointment-letter-template',
    title: 'Appointment Letter Template',
    description: 'Compliant appointment letter with all statutory requirements.',
    type: 'template',
    topic: 'compliance',
  },
  
  // Checklists
  {
    id: 'onboarding-checklist',
    title: 'New Employee Onboarding Checklist',
    description: 'Day 1 to Day 90 onboarding activities for a smooth new hire experience.',
    type: 'checklist',
    topic: 'hr-management',
  },
  {
    id: 'offboarding-checklist',
    title: 'Employee Offboarding Checklist',
    description: 'Complete offboarding checklist including knowledge transfer and exit formalities.',
    type: 'checklist',
    topic: 'hr-management',
  },
  {
    id: 'compliance-audit-checklist',
    title: 'HR Compliance Audit Checklist',
    description: 'Self-audit checklist covering all major compliance requirements.',
    type: 'checklist',
    topic: 'compliance',
    premium: true,
  },
  {
    id: 'posh-compliance-checklist',
    title: 'POSH Compliance Checklist',
    description: 'Step-by-step checklist for Prevention of Sexual Harassment compliance.',
    type: 'checklist',
    topic: 'compliance',
  },
  {
    id: 'hrms-evaluation-checklist',
    title: 'HRMS Evaluation Checklist',
    description: 'Comprehensive checklist for evaluating HR technology vendors.',
    type: 'checklist',
    topic: 'hr-tech',
  },
  {
    id: 'labour-codes-readiness-checklist',
    title: 'Labour Codes Readiness Checklist',
    description: 'Assess your organization\'s readiness for the new labour codes.',
    type: 'checklist',
    topic: 'compliance',
    premium: true,
  },
  
  // Calculators
  {
    id: 'ctc-calculator',
    title: 'CTC to Take-Home Calculator',
    description: 'Calculate net take-home salary from CTC including all deductions.',
    type: 'calculator',
    topic: 'payroll',
  },
  {
    id: 'gratuity-calculator',
    title: 'Gratuity Calculator',
    description: 'Calculate gratuity amount based on years of service and last drawn salary.',
    type: 'calculator',
    topic: 'payroll',
  },
  {
    id: 'leave-encashment-calculator',
    title: 'Leave Encashment Calculator',
    description: 'Calculate leave encashment amount for various scenarios.',
    type: 'calculator',
    topic: 'payroll',
  },
  {
    id: 'epf-calculator',
    title: 'EPF Contribution Calculator',
    description: 'Calculate employee and employer EPF contributions.',
    type: 'calculator',
    topic: 'payroll',
  },
  
  // Whitepapers
  {
    id: 'labour-codes-whitepaper',
    title: 'Complete Guide to India\'s New Labour Codes',
    description: 'In-depth analysis of all four labour codes and their impact on organizations.',
    type: 'whitepaper',
    topic: 'compliance',
    premium: true,
  },
  {
    id: 'hr-tech-trends-whitepaper',
    title: 'HR Technology Trends 2024',
    description: 'Comprehensive overview of emerging HR technology trends and their implications.',
    type: 'whitepaper',
    topic: 'hr-tech',
    premium: true,
  },
  {
    id: 'remote-work-policy-whitepaper',
    title: 'Building Effective Remote Work Policies',
    description: 'Research-backed guide to creating remote and hybrid work policies.',
    type: 'whitepaper',
    topic: 'hr-management',
    premium: true,
  },
  
  // Infographics
  {
    id: 'labour-codes-infographic',
    title: 'Labour Codes at a Glance',
    description: 'Visual summary of the four new labour codes and key changes.',
    type: 'infographic',
    topic: 'compliance',
  },
  {
    id: 'payroll-compliance-calendar',
    title: 'Payroll Compliance Calendar',
    description: 'Monthly compliance deadlines for EPF, ESI, TDS, and more.',
    type: 'infographic',
    topic: 'payroll',
  },
  {
    id: 'recruitment-funnel-metrics',
    title: 'Recruitment Metrics That Matter',
    description: 'Visual guide to key recruitment KPIs and how to calculate them.',
    type: 'infographic',
    topic: 'recruiting',
  },
  
  // Webinar Recordings
  {
    id: 'labour-codes-webinar',
    title: 'Labour Codes Implementation Masterclass',
    description: 'Recorded webinar on preparing your organization for the new labour codes.',
    type: 'webinar',
    topic: 'compliance',
    premium: true,
  },
  {
    id: 'hr-tech-selection-webinar',
    title: 'How to Choose the Right HRMS',
    description: 'Expert panel discussion on HRMS selection and implementation.',
    type: 'webinar',
    topic: 'hr-tech',
  },
  {
    id: 'employer-branding-webinar',
    title: 'Building Your Employer Brand',
    description: 'Strategies for attracting top talent through employer branding.',
    type: 'webinar',
    topic: 'recruiting',
  },
];

export function getResourcesByType(type: Resource['type']): Resource[] {
  return resources.filter(resource => resource.type === type);
}

export function getResourcesByTopic(topic: Resource['topic']): Resource[] {
  return resources.filter(resource => resource.topic === topic);
}

export function getFreeResources(): Resource[] {
  return resources.filter(resource => !resource.premium);
}

export function getPremiumResources(): Resource[] {
  return resources.filter(resource => resource.premium);
}
