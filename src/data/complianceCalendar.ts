export interface ComplianceItem {
  id: string;
  requirement: string;
  act: string;
  formNo: string;
  frequency: 'Monthly' | 'Quarterly' | 'Half-Yearly' | 'Annual' | 'As Required';
  dueDate: string;
  description: string;
  penalty?: string;
  state?: string;
}

export const labourLawCompliances: ComplianceItem[] = [
  // Monthly Compliances
  {
    id: 'epf-monthly',
    requirement: 'EPF Monthly Contribution',
    act: 'Employees\' Provident Funds Act, 1952',
    formNo: 'ECR',
    frequency: 'Monthly',
    dueDate: '15th of every month',
    description: 'Monthly EPF contribution for all eligible employees',
    penalty: 'Up to 100% of arrears + imprisonment up to 3 years'
  },
  {
    id: 'esi-monthly',
    requirement: 'ESI Monthly Contribution',
    act: 'Employees\' State Insurance Act, 1948',
    formNo: 'Online Challan',
    frequency: 'Monthly',
    dueDate: '15th of every month',
    description: 'Monthly ESI contribution for employees earning up to ₹21,000',
    penalty: 'Up to 12% interest p.a. + damages'
  },
  {
    id: 'pt-monthly',
    requirement: 'Professional Tax Return',
    act: 'State Professional Tax Acts',
    formNo: 'As per state',
    frequency: 'Monthly',
    dueDate: 'Last day of every month',
    description: 'Monthly deduction and remittance of professional tax',
    penalty: 'Varies by state (typically 1.25% per month)'
  },
  {
    id: 'min-wage-register',
    requirement: 'Minimum Wages Register',
    act: 'Minimum Wages Act, 1948',
    formNo: 'Form X',
    frequency: 'Monthly',
    dueDate: '7th of every subsequent month',
    description: 'Maintain register of wages paid to employees'
  },
  
  // Quarterly Compliances
  {
    id: 'tds-quarterly',
    requirement: 'TDS Quarterly Return (Salary)',
    act: 'Income Tax Act, 1961',
    formNo: 'Form 24Q',
    frequency: 'Quarterly',
    dueDate: 'Q1: Jul 31, Q2: Oct 31, Q3: Jan 31, Q4: May 31',
    description: 'Quarterly TDS return for salary deductions',
    penalty: '₹200 per day of delay'
  },
  {
    id: 'epf-quarterly',
    requirement: 'EPF Quarterly Return',
    act: 'Employees\' Provident Funds Act, 1952',
    formNo: 'Form 5/10',
    frequency: 'Quarterly',
    dueDate: '25th of month following quarter',
    description: 'Declaration of new members joining/leaving'
  },
  
  // Half-Yearly Compliances
  {
    id: 'esi-halfyearly',
    requirement: 'ESI Half-Yearly Return',
    act: 'Employees\' State Insurance Act, 1948',
    formNo: 'Form 6',
    frequency: 'Half-Yearly',
    dueDate: 'Apr-Sep: Nov 11, Oct-Mar: May 12',
    description: 'Half-yearly return of contributions'
  },
  {
    id: 'lwf-halfyearly',
    requirement: 'Labour Welfare Fund Contribution',
    act: 'State Labour Welfare Fund Acts',
    formNo: 'As per state',
    frequency: 'Half-Yearly',
    dueDate: 'Jun 15 & Jan 15',
    description: 'Contribution to state labour welfare fund',
    penalty: 'Interest + penalty as per state rules'
  },
  {
    id: 'contract-labour-return',
    requirement: 'Contract Labour Half-Yearly Return',
    act: 'Contract Labour (R&A) Act, 1970',
    formNo: 'Form XXV',
    frequency: 'Half-Yearly',
    dueDate: '15th Jan & 15th Jul',
    description: 'Return showing number of contract workers employed'
  },
  
  // Annual Compliances
  {
    id: 'epf-annual',
    requirement: 'EPF Annual Return',
    act: 'Employees\' Provident Funds Act, 1952',
    formNo: 'Form 3A/6A',
    frequency: 'Annual',
    dueDate: 'April 25',
    description: 'Annual contribution statement for all members'
  },
  {
    id: 'pt-annual',
    requirement: 'Professional Tax Annual Return',
    act: 'State Professional Tax Acts',
    formNo: 'As per state',
    frequency: 'Annual',
    dueDate: 'March 31',
    description: 'Annual professional tax return'
  },
  {
    id: 'factories-annual',
    requirement: 'Factories Act Annual Return',
    act: 'Factories Act, 1948',
    formNo: 'Form 22',
    frequency: 'Annual',
    dueDate: 'January 31',
    description: 'Annual return on working conditions, accidents, etc.'
  },
  {
    id: 'bonus-annual',
    requirement: 'Payment of Bonus',
    act: 'Payment of Bonus Act, 1965',
    formNo: 'Form D',
    frequency: 'Annual',
    dueDate: 'Within 8 months from close of accounting year',
    description: 'Payment of bonus to eligible employees',
    penalty: '₹1,000 + imprisonment up to 6 months'
  },
  {
    id: 'shops-annual',
    requirement: 'Shops & Establishment Annual Return',
    act: 'State Shops & Establishment Acts',
    formNo: 'As per state',
    frequency: 'Annual',
    dueDate: 'Varies by state (typically Jan 31)',
    description: 'Annual return for commercial establishments'
  },
  {
    id: 'gratuity-annual',
    requirement: 'Gratuity Insurance/Fund Status',
    act: 'Payment of Gratuity Act, 1972',
    formNo: 'Form L',
    frequency: 'Annual',
    dueDate: 'Within 30 days of completing 5 years',
    description: 'Gratuity fund/insurance compliance report'
  },
  {
    id: 'maternity-annual',
    requirement: 'Maternity Benefit Register',
    act: 'Maternity Benefit Act, 1961',
    formNo: 'Form A',
    frequency: 'Annual',
    dueDate: 'January 21',
    description: 'Register of women employees and maternity benefits'
  },
  
  // As Required Compliances
  {
    id: 'posh-committee',
    requirement: 'POSH Internal Complaints Committee',
    act: 'Sexual Harassment of Women at Workplace Act, 2013',
    formNo: 'ICC Constitution',
    frequency: 'As Required',
    dueDate: 'Within 30 days of establishment',
    description: 'Constitution of Internal Complaints Committee',
    penalty: '₹50,000 fine, cancellation of license'
  },
  {
    id: 'posh-annual',
    requirement: 'POSH Annual Report',
    act: 'Sexual Harassment of Women at Workplace Act, 2013',
    formNo: 'Annual Report',
    frequency: 'Annual',
    dueDate: 'December 31',
    description: 'Annual report on complaints received and disposed'
  },
  {
    id: 'standing-orders',
    requirement: 'Standing Orders Certification',
    act: 'Industrial Employment (Standing Orders) Act, 1946',
    formNo: 'As prescribed',
    frequency: 'As Required',
    dueDate: 'Within 6 months of applicability',
    description: 'Certification of standing orders for establishments with 100+ workers'
  }
];

export const stateWisePTDueDates: { state: string; dueDate: string; act: string; form: string }[] = [
  { state: 'Andhra Pradesh', dueDate: '9th', act: 'AP State Tax on Professions Act, 1987', form: 'Form V' },
  { state: 'Assam', dueDate: '28th', act: 'Assam Professions Tax Act, 1947', form: 'Form III/IIIA' },
  { state: 'Gujarat', dueDate: '14th', act: 'Gujarat State Tax on Professions Act, 1976', form: 'Form 5' },
  { state: 'Jharkhand', dueDate: '14th', act: 'Jharkhand Tax on Profession Act', form: 'Form JPT-03/04' },
  { state: 'Karnataka', dueDate: '21st', act: 'Karnataka Tax on Profession Act, 1976', form: 'Form 5A' },
  { state: 'Kerala', dueDate: '4th', act: 'Kerala Shops Workers Welfare Fund Act', form: 'Form 6' },
  { state: 'Madhya Pradesh', dueDate: '9th', act: 'MP State Tax on Professions Act, 1995', form: 'Challan' },
  { state: 'Maharashtra', dueDate: '30th', act: 'Maharashtra State Tax on Professions Act, 1975', form: 'Form III B' },
  { state: 'Meghalaya', dueDate: '28th', act: 'Meghalaya Professions Tax Act, 1947', form: 'Form III' },
  { state: 'Odisha', dueDate: '28th', act: 'Odisha State Tax on Professions Act, 2000', form: 'Form 5' },
  { state: 'Sikkim', dueDate: '14th', act: 'Sikkim Tax on Professions Act, 2006', form: 'Challan' },
  { state: 'Telangana', dueDate: '9th', act: 'Telangana State Tax on Professions Act, 1987', form: 'Form V' },
  { state: 'Tripura', dueDate: '28th', act: 'Tripura Professions Tax Act, 1997', form: 'Form VII' },
  { state: 'West Bengal', dueDate: '20th', act: 'WB State Tax on Professions Rules, 1979', form: 'Monthly Return' }
];

export const frequencyColors: Record<string, string> = {
  'Monthly': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'Quarterly': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Half-Yearly': 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  'Annual': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'As Required': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
};
