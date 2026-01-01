export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  topic: 'recruiting' | 'hr-management' | 'payroll' | 'compliance' | 'hr-tech';
  level: 'beginner' | 'intermediate' | 'advanced';
  format: 'video' | 'article' | 'webinar' | 'guide';
  duration: string;
  modules: CourseModule[];
  instructor: string;
  learningObjectives: string[];
  targetAudience: string[];
  thumbnail?: string;
  featured?: boolean;
}

export interface CourseModule {
  title: string;
  duration: string;
  description: string;
}

export const topicLabels: Record<Course['topic'], string> = {
  'recruiting': 'Recruiting & Talent',
  'hr-management': 'HR Management',
  'payroll': 'Payroll & Compensation',
  'compliance': 'Compliance',
  'hr-tech': 'HR Technology',
};

export const topicColors: Record<Course['topic'], string> = {
  'recruiting': 'bg-blue-500/10 text-blue-600 border-blue-200',
  'hr-management': 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  'payroll': 'bg-amber-500/10 text-amber-600 border-amber-200',
  'compliance': 'bg-rose-500/10 text-rose-600 border-rose-200',
  'hr-tech': 'bg-violet-500/10 text-violet-600 border-violet-200',
};

export const levelLabels: Record<Course['level'], string> = {
  'beginner': 'Beginner',
  'intermediate': 'Intermediate',
  'advanced': 'Advanced',
};

export const formatLabels: Record<Course['format'], string> = {
  'video': 'Video Course',
  'article': 'Article',
  'webinar': 'Webinar',
  'guide': 'Comprehensive Guide',
};

export const courses: Course[] = [
  // Recruiting & Talent Acquisition
  {
    id: 'talent-acquisition-strategy',
    title: 'Building a Talent Acquisition Strategy from Scratch',
    description: 'Learn how to create a comprehensive talent acquisition framework that aligns with your business goals and scales with your organization.',
    longDescription: 'This comprehensive course walks you through building a talent acquisition strategy from the ground up. Whether you\'re a founder hiring your first employees or an HR leader looking to systematize your hiring process, you\'ll learn proven frameworks and practical techniques used by successful organizations.',
    topic: 'recruiting',
    level: 'beginner',
    format: 'guide',
    duration: '2 hours',
    instructor: 'Talent Advisory Team',
    featured: true,
    learningObjectives: [
      'Define your employer value proposition (EVP)',
      'Create job descriptions that attract top talent',
      'Build a structured interview process',
      'Develop a candidate experience framework',
      'Set up recruitment metrics and KPIs',
    ],
    targetAudience: [
      'Founders building their first team',
      'HR managers setting up talent acquisition',
      'Business owners scaling their workforce',
    ],
    modules: [
      { title: 'Understanding Your Hiring Needs', duration: '20 min', description: 'Assess current and future talent requirements' },
      { title: 'Crafting Your Employer Brand', duration: '25 min', description: 'Build a compelling employer value proposition' },
      { title: 'Job Description Best Practices', duration: '20 min', description: 'Write JDs that attract the right candidates' },
      { title: 'Interview Process Design', duration: '30 min', description: 'Structure interviews for consistent evaluation' },
      { title: 'Metrics That Matter', duration: '25 min', description: 'Track and improve your hiring effectiveness' },
    ],
  },
  {
    id: 'interview-best-practices',
    title: 'Interview Best Practices for Non-HR Founders',
    description: 'Master the art of interviewing candidates even without formal HR training. Learn techniques used by top companies.',
    longDescription: 'Designed specifically for founders and managers who find themselves conducting interviews without formal HR training. This course provides practical, actionable frameworks that help you evaluate candidates effectively and make confident hiring decisions.',
    topic: 'recruiting',
    level: 'beginner',
    format: 'video',
    duration: '1.5 hours',
    instructor: 'HR Advisory Team',
    learningObjectives: [
      'Prepare structured interview questions',
      'Evaluate candidates objectively',
      'Avoid common interview biases',
      'Make data-driven hiring decisions',
      'Create a positive candidate experience',
    ],
    targetAudience: [
      'Startup founders',
      'First-time managers',
      'Technical leads hiring for their teams',
    ],
    modules: [
      { title: 'Interview Preparation', duration: '20 min', description: 'Set yourself up for successful interviews' },
      { title: 'Behavioral Interviewing', duration: '25 min', description: 'Use STAR method to assess past performance' },
      { title: 'Avoiding Bias', duration: '20 min', description: 'Recognize and mitigate unconscious bias' },
      { title: 'Decision Making Framework', duration: '25 min', description: 'Evaluate candidates consistently' },
    ],
  },
  {
    id: 'recruitment-metrics',
    title: 'Understanding Recruitment Metrics That Matter',
    description: 'Learn which hiring metrics actually drive business value and how to track them effectively.',
    longDescription: 'Not all recruitment metrics are created equal. This course helps you identify which metrics truly matter for your organization and teaches you how to collect, analyze, and act on recruitment data to continuously improve your hiring outcomes.',
    topic: 'recruiting',
    level: 'intermediate',
    format: 'article',
    duration: '45 min',
    instructor: 'Analytics Team',
    learningObjectives: [
      'Identify key recruitment KPIs',
      'Set up tracking systems',
      'Analyze hiring funnel data',
      'Benchmark against industry standards',
      'Present metrics to stakeholders',
    ],
    targetAudience: [
      'HR managers',
      'Talent acquisition specialists',
      'People operations leaders',
    ],
    modules: [
      { title: 'Essential Recruitment Metrics', duration: '15 min', description: 'Time-to-hire, cost-per-hire, quality of hire' },
      { title: 'Setting Up Tracking', duration: '15 min', description: 'Tools and processes for data collection' },
      { title: 'Analysis and Action', duration: '15 min', description: 'Turn data into hiring improvements' },
    ],
  },
  {
    id: 'employer-branding-startup',
    title: 'Employer Branding on a Startup Budget',
    description: 'Build a compelling employer brand without expensive agencies. Practical strategies for resource-constrained teams.',
    longDescription: 'You don\'t need a massive budget to build a strong employer brand. This course shows you how to leverage authentic storytelling, employee advocacy, and smart digital strategies to attract top talent—even when competing against larger, better-funded companies.',
    topic: 'recruiting',
    level: 'beginner',
    format: 'webinar',
    duration: '1 hour',
    instructor: 'Brand Strategy Team',
    learningObjectives: [
      'Define your unique employer story',
      'Leverage social media effectively',
      'Build employee advocacy programs',
      'Create compelling career content',
      'Measure employer brand impact',
    ],
    targetAudience: [
      'Startup HR leaders',
      'Founders',
      'Marketing teams supporting hiring',
    ],
    modules: [
      { title: 'Your Employer Story', duration: '20 min', description: 'Find and articulate what makes you unique' },
      { title: 'Digital Presence', duration: '20 min', description: 'Social media and career page optimization' },
      { title: 'Employee Advocacy', duration: '20 min', description: 'Turn employees into brand ambassadors' },
    ],
  },

  // HR Management
  {
    id: 'first-hr-function',
    title: 'Setting Up Your First HR Function',
    description: 'A comprehensive guide for organizations transitioning from ad-hoc people management to a structured HR function.',
    longDescription: 'When your organization grows beyond 20-30 people, ad-hoc people management no longer works. This course provides a roadmap for establishing your first formal HR function, covering everything from basic compliance to employee experience.',
    topic: 'hr-management',
    level: 'beginner',
    format: 'guide',
    duration: '3 hours',
    instructor: 'HR Advisory Team',
    featured: true,
    learningObjectives: [
      'Assess your current HR maturity',
      'Prioritize HR initiatives by business impact',
      'Set up essential HR processes',
      'Choose between hiring HR vs outsourcing',
      'Build an HR technology foundation',
    ],
    targetAudience: [
      'Founders of growing startups',
      'Operations leaders taking on HR',
      'First-time HR managers',
    ],
    modules: [
      { title: 'HR Maturity Assessment', duration: '30 min', description: 'Understand where you are today' },
      { title: 'Essential HR Processes', duration: '45 min', description: 'Must-have processes for any organization' },
      { title: 'Compliance Foundations', duration: '30 min', description: 'Legal requirements you cannot ignore' },
      { title: 'HR Technology Basics', duration: '30 min', description: 'Tools to support your HR function' },
      { title: 'Building vs Buying HR', duration: '30 min', description: 'When to hire vs outsource' },
      { title: 'Your 90-Day HR Plan', duration: '25 min', description: 'Actionable roadmap to get started' },
    ],
  },
  {
    id: 'performance-management-fundamentals',
    title: 'Performance Management Fundamentals',
    description: 'Design a performance management system that drives results without creating bureaucracy.',
    longDescription: 'Effective performance management goes beyond annual reviews. Learn how to create a performance culture that motivates employees, develops talent, and drives business results through continuous feedback and clear goal-setting.',
    topic: 'hr-management',
    level: 'intermediate',
    format: 'video',
    duration: '2 hours',
    instructor: 'Performance Advisory Team',
    learningObjectives: [
      'Design goal-setting frameworks (OKRs, KPIs)',
      'Implement continuous feedback systems',
      'Conduct effective performance conversations',
      'Handle underperformance fairly',
      'Link performance to compensation',
    ],
    targetAudience: [
      'HR managers',
      'People operations leaders',
      'Department heads',
    ],
    modules: [
      { title: 'Goal Setting Frameworks', duration: '30 min', description: 'OKRs, SMART goals, and more' },
      { title: 'Continuous Feedback', duration: '25 min', description: 'Build a feedback culture' },
      { title: 'Performance Reviews', duration: '30 min', description: 'Structure meaningful evaluations' },
      { title: 'Managing Underperformance', duration: '20 min', description: 'Fair and effective interventions' },
      { title: 'Performance & Pay', duration: '15 min', description: 'Link results to rewards' },
    ],
  },
  {
    id: 'employee-onboarding',
    title: 'Employee Onboarding That Works',
    description: 'Create an onboarding experience that accelerates new hire productivity and boosts retention.',
    longDescription: 'The first 90 days are critical for new employee success. This course teaches you how to design an onboarding program that helps new hires become productive faster while building the foundation for long-term engagement and retention.',
    topic: 'hr-management',
    level: 'beginner',
    format: 'article',
    duration: '1 hour',
    instructor: 'Employee Experience Team',
    learningObjectives: [
      'Design a structured onboarding program',
      'Create onboarding checklists and materials',
      'Set up buddy and mentorship systems',
      'Measure onboarding effectiveness',
      'Personalize onboarding by role',
    ],
    targetAudience: [
      'HR professionals',
      'Hiring managers',
      'Operations teams',
    ],
    modules: [
      { title: 'Pre-boarding Essentials', duration: '15 min', description: 'Start before day one' },
      { title: 'First Week Framework', duration: '20 min', description: 'Make the first week count' },
      { title: 'First 30-60-90 Days', duration: '15 min', description: 'Structure the onboarding journey' },
      { title: 'Measuring Success', duration: '10 min', description: 'Track onboarding effectiveness' },
    ],
  },
  {
    id: 'hr-policies-growing-teams',
    title: 'Building HR Policies for Growing Teams',
    description: 'Create clear, fair, and legally compliant HR policies that scale with your organization.',
    longDescription: 'As your team grows, informal practices need to become documented policies. Learn how to create HR policies that are clear, fair, legally compliant, and flexible enough to evolve with your organization.',
    topic: 'hr-management',
    level: 'intermediate',
    format: 'guide',
    duration: '2.5 hours',
    instructor: 'Policy Advisory Team',
    learningObjectives: [
      'Identify essential policies for your stage',
      'Write clear, understandable policies',
      'Ensure legal compliance',
      'Communicate and implement policies',
      'Review and update policies regularly',
    ],
    targetAudience: [
      'HR managers',
      'Legal and compliance teams',
      'Founders formalizing their practices',
    ],
    modules: [
      { title: 'Policy Essentials', duration: '30 min', description: 'Which policies you need and when' },
      { title: 'Writing Effective Policies', duration: '30 min', description: 'Best practices for policy writing' },
      { title: 'Legal Compliance', duration: '45 min', description: 'Stay on the right side of the law' },
      { title: 'Policy Templates', duration: '30 min', description: 'Ready-to-use policy frameworks' },
      { title: 'Implementation', duration: '15 min', description: 'Roll out policies successfully' },
    ],
  },

  // Payroll & Compensation
  {
    id: 'payroll-basics-india',
    title: 'Payroll Basics for Indian Businesses',
    description: 'Master the fundamentals of payroll processing in India, including statutory compliance and tax calculations.',
    longDescription: 'Running payroll in India involves navigating complex statutory requirements. This course breaks down payroll processing into understandable steps, covering everything from CTC structuring to statutory deductions and tax calculations.',
    topic: 'payroll',
    level: 'beginner',
    format: 'guide',
    duration: '2 hours',
    instructor: 'Payroll Compliance Team',
    featured: true,
    learningObjectives: [
      'Understand CTC vs gross vs net salary',
      'Calculate statutory deductions (EPF, ESI, PT)',
      'Process TDS on salaries',
      'Generate compliant payslips',
      'File statutory returns on time',
    ],
    targetAudience: [
      'HR professionals new to payroll',
      'Founders managing their own payroll',
      'Accounts teams handling salaries',
    ],
    modules: [
      { title: 'Salary Structure Basics', duration: '25 min', description: 'CTC, gross, net, and components' },
      { title: 'EPF and ESI', duration: '30 min', description: 'Provident fund and insurance compliance' },
      { title: 'TDS on Salaries', duration: '25 min', description: 'Tax deduction at source calculations' },
      { title: 'Professional Tax', duration: '15 min', description: 'State-wise PT requirements' },
      { title: 'Payroll Processing', duration: '25 min', description: 'End-to-end payroll workflow' },
    ],
  },
  {
    id: 'ctc-structures',
    title: 'Understanding CTC Structures',
    description: 'Learn how to design and communicate compensation packages that are competitive and compliant.',
    longDescription: 'CTC structuring is both an art and a science. This course teaches you how to design compensation structures that maximize employee take-home while optimizing for tax efficiency and statutory compliance.',
    topic: 'payroll',
    level: 'intermediate',
    format: 'video',
    duration: '1.5 hours',
    instructor: 'Compensation Advisory Team',
    learningObjectives: [
      'Design tax-efficient CTC structures',
      'Balance fixed and variable components',
      'Include benefits and perquisites',
      'Create transparent salary breakdowns',
      'Benchmark compensation competitively',
    ],
    targetAudience: [
      'HR professionals',
      'Compensation specialists',
      'Finance teams',
    ],
    modules: [
      { title: 'CTC Components Deep Dive', duration: '30 min', description: 'Fixed, variable, and benefits' },
      { title: 'Tax Optimization', duration: '25 min', description: 'Legal ways to reduce tax burden' },
      { title: 'Benefits Design', duration: '20 min', description: 'Insurance, allowances, and perks' },
      { title: 'Communication', duration: '15 min', description: 'Help employees understand their CTC' },
    ],
  },
  {
    id: 'compensation-strategies',
    title: 'Designing Compensation Strategies',
    description: 'Build a comprehensive compensation philosophy and strategy that attracts and retains talent.',
    longDescription: 'Your compensation strategy communicates what you value as an organization. Learn how to develop a compensation philosophy that aligns with your business goals, culture, and market positioning while remaining financially sustainable.',
    topic: 'payroll',
    level: 'advanced',
    format: 'webinar',
    duration: '2 hours',
    instructor: 'Total Rewards Team',
    learningObjectives: [
      'Develop a compensation philosophy',
      'Conduct market benchmarking',
      'Design pay bands and grades',
      'Implement pay equity practices',
      'Communicate compensation decisions',
    ],
    targetAudience: [
      'HR leaders',
      'C-suite executives',
      'Compensation committee members',
    ],
    modules: [
      { title: 'Compensation Philosophy', duration: '30 min', description: 'Define your pay principles' },
      { title: 'Market Analysis', duration: '30 min', description: 'Benchmark against competitors' },
      { title: 'Pay Structures', duration: '30 min', description: 'Bands, grades, and ranges' },
      { title: 'Pay Equity', duration: '30 min', description: 'Ensure fair compensation practices' },
    ],
  },
  {
    id: 'payroll-compliance-checklist',
    title: 'Payroll Compliance Checklist',
    description: 'A comprehensive checklist to ensure your payroll is compliant with all statutory requirements.',
    longDescription: 'Missing payroll compliance deadlines can result in penalties and legal issues. This course provides a month-by-month compliance calendar and checklists to ensure you never miss a deadline.',
    topic: 'payroll',
    level: 'beginner',
    format: 'article',
    duration: '30 min',
    instructor: 'Compliance Team',
    learningObjectives: [
      'Understand all compliance deadlines',
      'Set up compliance reminders',
      'Prepare required documentation',
      'File returns accurately',
      'Handle compliance audits',
    ],
    targetAudience: [
      'Payroll administrators',
      'HR professionals',
      'Business owners',
    ],
    modules: [
      { title: 'Monthly Compliance', duration: '10 min', description: 'Monthly deadlines and filings' },
      { title: 'Quarterly Requirements', duration: '10 min', description: 'Quarterly returns and payments' },
      { title: 'Annual Compliance', duration: '10 min', description: 'Year-end requirements' },
    ],
  },

  // Compliance
  {
    id: 'labour-codes-explained',
    title: "India's New Labour Codes Explained",
    description: 'Comprehensive guide to understanding and implementing the four new labour codes in India.',
    longDescription: 'The consolidation of 29 labour laws into 4 codes represents the biggest labour reform in India in decades. This course explains what the new codes mean for your organization and how to prepare for implementation.',
    topic: 'compliance',
    level: 'intermediate',
    format: 'guide',
    duration: '4 hours',
    instructor: 'Labour Law Advisory Team',
    featured: true,
    learningObjectives: [
      'Understand all four labour codes',
      'Identify changes affecting your organization',
      'Prepare for compliance requirements',
      'Update policies and processes',
      'Train your team on new requirements',
    ],
    targetAudience: [
      'HR leaders',
      'Compliance officers',
      'Legal teams',
      'Business owners',
    ],
    modules: [
      { title: 'Code on Wages', duration: '45 min', description: 'Wage definitions, payment, and deductions' },
      { title: 'Industrial Relations Code', duration: '60 min', description: 'Trade unions, disputes, and standing orders' },
      { title: 'Social Security Code', duration: '60 min', description: 'EPF, ESI, gratuity, and maternity' },
      { title: 'OSH Code', duration: '45 min', description: 'Occupational safety, health, and conditions' },
      { title: 'Implementation Roadmap', duration: '30 min', description: 'Prepare your organization' },
    ],
  },
  {
    id: 'posh-compliance',
    title: 'POSH Compliance for Organizations',
    description: 'Everything you need to know about Prevention of Sexual Harassment compliance and implementation.',
    longDescription: 'POSH compliance is not optional—it\'s a legal requirement for every organization with 10 or more employees. This course covers the legal requirements, implementation steps, and best practices for creating a harassment-free workplace.',
    topic: 'compliance',
    level: 'intermediate',
    format: 'video',
    duration: '2 hours',
    instructor: 'POSH Advisory Team',
    learningObjectives: [
      'Understand POSH Act requirements',
      'Set up Internal Committee (IC)',
      'Develop a POSH policy',
      'Conduct awareness training',
      'Handle complaints properly',
    ],
    targetAudience: [
      'HR professionals',
      'IC members',
      'Legal and compliance teams',
    ],
    modules: [
      { title: 'Legal Framework', duration: '30 min', description: 'POSH Act and Rules explained' },
      { title: 'Internal Committee', duration: '30 min', description: 'Constitution and responsibilities' },
      { title: 'Policy Development', duration: '25 min', description: 'Create a comprehensive POSH policy' },
      { title: 'Complaint Handling', duration: '35 min', description: 'Investigation and resolution process' },
    ],
  },
  {
    id: 'epf-esi-essentials',
    title: 'EPF & ESI Essentials',
    description: 'Master the intricacies of Employee Provident Fund and Employee State Insurance compliance.',
    longDescription: 'EPF and ESI are fundamental statutory benefits that affect most employers in India. This course demystifies these schemes, covering applicability, registration, contributions, and compliance requirements.',
    topic: 'compliance',
    level: 'beginner',
    format: 'article',
    duration: '1.5 hours',
    instructor: 'Statutory Compliance Team',
    learningObjectives: [
      'Determine EPF and ESI applicability',
      'Calculate contributions correctly',
      'Complete registration process',
      'File monthly returns',
      'Handle inspections and audits',
    ],
    targetAudience: [
      'HR professionals',
      'Payroll administrators',
      'Business owners',
    ],
    modules: [
      { title: 'EPF Deep Dive', duration: '45 min', description: 'Everything about provident fund' },
      { title: 'ESI Coverage', duration: '30 min', description: 'Employee state insurance explained' },
      { title: 'Compliance Calendar', duration: '15 min', description: 'Key dates and deadlines' },
    ],
  },
  {
    id: 'shops-establishments-act',
    title: 'Understanding S&E Act Requirements',
    description: 'Navigate the Shops and Establishments Act requirements for your state and industry.',
    longDescription: 'The Shops and Establishments Act varies by state but affects almost every business. Learn what registrations you need, what rules apply to your establishment, and how to maintain compliance.',
    topic: 'compliance',
    level: 'beginner',
    format: 'webinar',
    duration: '1 hour',
    instructor: 'Legal Compliance Team',
    learningObjectives: [
      'Understand S&E Act applicability',
      'Complete required registrations',
      'Comply with working hours rules',
      'Maintain required registers',
      'Display mandatory notices',
    ],
    targetAudience: [
      'Business owners',
      'HR professionals',
      'Compliance officers',
    ],
    modules: [
      { title: 'S&E Act Overview', duration: '20 min', description: 'Purpose and applicability' },
      { title: 'Registration Process', duration: '20 min', description: 'How to register your establishment' },
      { title: 'Ongoing Compliance', duration: '20 min', description: 'Maintain continuous compliance' },
    ],
  },

  // HR Technology
  {
    id: 'choosing-first-hrms',
    title: 'Choosing Your First HRMS',
    description: 'A framework for evaluating and selecting the right HR management system for your organization.',
    longDescription: 'Choosing an HRMS is a significant decision that will affect your organization for years. This course provides a structured framework for evaluating vendors, understanding your requirements, and making a decision you won\'t regret.',
    topic: 'hr-tech',
    level: 'beginner',
    format: 'guide',
    duration: '2 hours',
    instructor: 'HR Tech Advisory Team',
    featured: true,
    learningObjectives: [
      'Assess your HRMS requirements',
      'Evaluate vendor options',
      'Conduct effective demos',
      'Negotiate contracts wisely',
      'Plan for implementation',
    ],
    targetAudience: [
      'HR leaders',
      'IT decision makers',
      'Founders and COOs',
    ],
    modules: [
      { title: 'Requirements Assessment', duration: '30 min', description: 'Define what you really need' },
      { title: 'Market Landscape', duration: '25 min', description: 'Understand your options' },
      { title: 'Vendor Evaluation', duration: '30 min', description: 'Structured evaluation framework' },
      { title: 'Demo Best Practices', duration: '20 min', description: 'Get the most from vendor demos' },
      { title: 'Decision Making', duration: '15 min', description: 'Make a confident final choice' },
    ],
  },
  {
    id: 'hr-tech-evaluation',
    title: 'HR Tech Vendor Evaluation Framework',
    description: 'A systematic approach to evaluating HR technology vendors beyond feature lists and pricing.',
    longDescription: 'Features and pricing are just the beginning. Learn how to evaluate vendors on factors that really matter—implementation support, integration capabilities, security, scalability, and long-term viability.',
    topic: 'hr-tech',
    level: 'intermediate',
    format: 'video',
    duration: '1.5 hours',
    instructor: 'Tech Advisory Team',
    learningObjectives: [
      'Create evaluation scorecards',
      'Assess vendor viability',
      'Evaluate security and compliance',
      'Understand integration options',
      'Negotiate effectively',
    ],
    targetAudience: [
      'HR technology buyers',
      'IT teams',
      'Procurement professionals',
    ],
    modules: [
      { title: 'Beyond Features', duration: '25 min', description: 'What really matters in vendor selection' },
      { title: 'Technical Evaluation', duration: '30 min', description: 'Security, integrations, and scalability' },
      { title: 'Vendor Assessment', duration: '20 min', description: 'Evaluate vendor health and support' },
      { title: 'Negotiation Tips', duration: '15 min', description: 'Get the best deal' },
    ],
  },
  {
    id: 'hr-tech-implementation',
    title: 'Implementing HR Technology Successfully',
    description: 'Best practices for planning and executing HR technology implementations that deliver value.',
    longDescription: 'Most HR tech implementations fail not because of technology but because of poor change management and planning. Learn how to implement HR technology in a way that drives adoption and delivers the promised value.',
    topic: 'hr-tech',
    level: 'intermediate',
    format: 'webinar',
    duration: '2 hours',
    instructor: 'Implementation Team',
    learningObjectives: [
      'Plan implementation phases',
      'Manage stakeholders effectively',
      'Drive user adoption',
      'Handle data migration',
      'Measure implementation success',
    ],
    targetAudience: [
      'HR project managers',
      'Implementation leads',
      'HR directors',
    ],
    modules: [
      { title: 'Implementation Planning', duration: '30 min', description: 'Set up for success from day one' },
      { title: 'Change Management', duration: '30 min', description: 'Get buy-in and drive adoption' },
      { title: 'Data Migration', duration: '30 min', description: 'Move data safely and accurately' },
      { title: 'Go-Live and Beyond', duration: '30 min', description: 'Launch and continuous improvement' },
    ],
  },
  {
    id: 'data-driven-hr',
    title: 'Data-Driven HR Decision Making',
    description: 'Learn to leverage HR data and analytics to make better people decisions.',
    longDescription: 'HR has access to more data than ever before, but few organizations use it effectively. This course teaches you how to collect, analyze, and act on HR data to make decisions that drive business results.',
    topic: 'hr-tech',
    level: 'advanced',
    format: 'video',
    duration: '2.5 hours',
    instructor: 'People Analytics Team',
    learningObjectives: [
      'Identify valuable HR metrics',
      'Build analytics dashboards',
      'Conduct workforce analysis',
      'Predict attrition and performance',
      'Present data to leadership',
    ],
    targetAudience: [
      'HR analysts',
      'People operations leaders',
      'HR technology specialists',
    ],
    modules: [
      { title: 'HR Analytics Fundamentals', duration: '30 min', description: 'What to measure and why' },
      { title: 'Data Collection', duration: '30 min', description: 'Build your data foundation' },
      { title: 'Analysis Techniques', duration: '40 min', description: 'Turn data into insights' },
      { title: 'Predictive Analytics', duration: '30 min', description: 'Forecast future trends' },
      { title: 'Storytelling with Data', duration: '20 min', description: 'Communicate insights effectively' },
    ],
  },
];

export function getCoursesByTopic(topic: Course['topic']): Course[] {
  return courses.filter(course => course.topic === topic);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter(course => course.featured);
}

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getRelatedCourses(courseId: string, limit: number = 3): Course[] {
  const course = getCourseById(courseId);
  if (!course) return [];
  
  return courses
    .filter(c => c.id !== courseId && c.topic === course.topic)
    .slice(0, limit);
}
