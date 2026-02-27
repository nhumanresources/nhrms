import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  Clock, 
  Users, 
  Shield, 
  Heart,
  Calculator,
  ClipboardList,
  ArrowRight,
  DollarSign,
  Calendar
} from 'lucide-react';

export default function EmployerAdvisory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Employer Advisory: Impact of New Labour Codes Effective November 21, 2025",
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "nHRMS"
    },
    "publisher": {
      "@type": "Organization",
      "name": "nHRMS"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Employer Advisory: Impact of New Labour Codes | November 2025 | nHRMS"
        description="Critical compliance guide for India's Four Consolidated Labour Codes effective November 21, 2025. Learn about mandatory payroll restructuring, expanded social security coverage, and MSME-specific impacts."
        keywords="India labour codes 2025, employer advisory, labour code compliance, Code on Wages 2019, Industrial Relations Code, Social Security Code, OSHWC Code, MSME compliance, payroll restructuring"
        canonicalUrl="https://nhrms.com/employer-advisory-labour-codes"
        structuredData={structuredData}
      />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-primary-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
                Employer Advisory
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Critical Compliance Overhaul under India's Four Consolidated Labour Codes
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The Government of India has implemented the <strong>Four Labour Codes</strong> effective from <strong>November 21, 2025</strong>. 
                These Codes consolidate 29 existing central labour laws, marking a monumental shift in the regulatory landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/labour-codes">
                    Get Compliance Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Changes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                🔑 Key Changes
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Changes for All Establishments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here are the most critical, universal changes that every employer must understand and implement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Code on Wages */}
              <Card className="border-l-4 border-l-secondary shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">1. Code on Wages (CoW), 2019</CardTitle>
                      <p className="text-sm text-muted-foreground">Mandatory Payroll Restructuring</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Uniform Definition of 'Wages'</h4>
                      <p className="text-sm text-muted-foreground">
                        Basic Pay + DA must constitute at least <strong className="text-foreground">50%</strong> of total remuneration. 
                        This increases PF, Gratuity, and ESI contributions.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">National Floor Wage</h4>
                      <p className="text-sm text-muted-foreground">
                        Central Government will set a minimum National Floor Wage that states cannot set below.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Timely Wage Payment</h4>
                      <p className="text-sm text-muted-foreground">
                        Terminal dues must be paid within <strong className="text-foreground">two working days</strong> of separation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code on Social Security */}
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">2. Code on Social Security (CoSS), 2020</CardTitle>
                      <p className="text-sm text-muted-foreground">Expanded Coverage</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Universal Social Security</h4>
                      <p className="text-sm text-muted-foreground">
                        The Code significantly expands the social security net to cover more workers.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Fixed-Term Employees (FTEs)</h4>
                      <p className="text-sm text-muted-foreground">
                        FTEs now get all statutory benefits (PF, Gratuity, ESI, Leave) on par with permanent workers.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Gratuity Eligibility</h4>
                      <p className="text-sm text-muted-foreground">
                        Gratuity payable to FTEs after just <strong className="text-foreground">one year</strong> (reduced from five years).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* OSHWC Code */}
              <Card className="border-l-4 border-l-accent shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">3. Occupational Safety, Health and Working Conditions Code, 2020</CardTitle>
                      <p className="text-sm text-muted-foreground">Working Norms</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Working Hours & Overtime</h4>
                      <p className="text-sm text-muted-foreground">
                        Up to 12 hours including rest (48 hours/week). Overtime at <strong className="text-foreground">double</strong> the normal wage rate.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Annual Health Check-ups</h4>
                      <p className="text-sm text-muted-foreground">
                        Mandatory <strong className="text-foreground">free annual health check-ups</strong> for all workers above 40 years.
                      </p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Women's Employment</h4>
                      <p className="text-sm text-muted-foreground">
                        Women permitted to work at night (7 PM to 6 AM) with consent and adequate safety measures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Industrial Relations Code */}
              <Card className="border-l-4 border-l-muted-foreground shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">4. Industrial Relations Code (IRC), 2020</CardTitle>
                      <p className="text-sm text-muted-foreground">Hiring and Firing Flexibility</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Ease of Layoffs (For Large Firms)</h4>
                      <p className="text-sm text-muted-foreground">
                        Threshold for government approval for layoffs increased from 100 to <strong className="text-foreground">300 workers</strong> for industrial establishments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* MSME Impact Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                🏭 MSME Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specific Impact on MSME Establishments
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The new Labour Codes have a multi-faceted impact on MSMEs. While aimed at simplifying processes, they also introduce new costs and obligations.
              </p>
            </div>

            {/* Positive Impacts */}
            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Positive Impacts (Simplified Compliance)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Single Registration & Return</h4>
                    <p className="text-sm text-muted-foreground">
                      One Stop Portal replaces separate registrations under 29 old laws. Significantly reduced paperwork burden.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Inspector-cum-Facilitator</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus shifts from punitive enforcement to guidance and compliance support—crucial for MSMEs with limited legal expertise.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Higher Thresholds</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher applicability thresholds for certain laws ease the regulatory load for micro and small enterprises.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Challenges */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                Challenges and Compliance Burdens
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Wage Costs: 50% Rule</h4>
                    <p className="text-sm text-muted-foreground">
                      MSMEs often structure salaries with low basic. This rule mandates increase in basic pay and consequently higher PF, ESI, and Gratuity contributions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Universal Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Previously excluded small establishments now must manage and contribute to social security schemes for a wider employee base.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Gratuity after 1 Year for FTEs</h4>
                    <p className="text-sm text-muted-foreground">
                      Gratuity liability accrues much faster compared to the five-year rule, requiring careful financial provisioning.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-foreground mb-2">Welfare Facilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Mandates for drinking water, first-aid, washrooms, and potentially canteens/restrooms may require capital expenditure.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Impact Example */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
                  ⚖️ Financial Impact
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Financial Impact Calculation Example
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how the 50% 'Wages' rule affects your costs with a real-world scenario.
                </p>
              </div>

              <Card className="shadow-xl overflow-hidden">
                <CardHeader className="bg-primary text-white">
                  <CardTitle className="text-xl">
                    Scenario: Employee with ₹3,60,000 CTC (₹30,000/month)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-foreground">Component</th>
                          <th className="px-6 py-4 text-center font-semibold text-foreground">Pre-Code (Basic ≈30%)</th>
                          <th className="px-6 py-4 text-center font-semibold text-foreground">Post-Code (Basic ≈50%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr>
                          <td className="px-6 py-4 font-medium">Gross Monthly Salary</td>
                          <td className="px-6 py-4 text-center">₹25,000</td>
                          <td className="px-6 py-4 text-center">₹25,000</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="px-6 py-4 font-medium">Basic Pay</td>
                          <td className="px-6 py-4 text-center">₹7,500 (30%)</td>
                          <td className="px-6 py-4 text-center font-bold text-secondary">₹12,500 (50%)</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">HRA</td>
                          <td className="px-6 py-4 text-center">₹7,500</td>
                          <td className="px-6 py-4 text-center">₹6,000</td>
                        </tr>
                        <tr className="bg-muted/30">
                          <td className="px-6 py-4 font-medium">Other Allowances</td>
                          <td className="px-6 py-4 text-center">₹10,000</td>
                          <td className="px-6 py-4 text-center">₹6,500</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-medium">Employer's PF (12%)</td>
                          <td className="px-6 py-4 text-center">₹900</td>
                          <td className="px-6 py-4 text-center font-bold text-secondary">₹1,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card className="bg-secondary/5 border-secondary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calculator className="h-6 w-6 text-secondary" />
                      <h4 className="font-semibold text-lg">Monthly Increase</h4>
                    </div>
                    <p className="text-3xl font-bold text-secondary">₹600</p>
                    <p className="text-sm text-muted-foreground mt-2">Per employee per month in additional PF contribution</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-primary" />
                      <h4 className="font-semibold text-lg">50 Employees Impact</h4>
                    </div>
                    <p className="text-3xl font-bold text-primary">₹3,60,000</p>
                    <p className="text-sm text-muted-foreground mt-2">Annual increase in operational cost (PF only)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                ✅ Action Plan
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Action Plan for MSME Owners and HR Teams
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: 1,
                  title: "Review and Restructure Payroll",
                  description: "Engage with your payroll and finance teams to assess the impact of the 50% 'Wages' rule. Revise compensation structures before the implementation date.",
                  icon: Calculator
                },
                {
                  step: 2,
                  title: "Audit Worker Coverage",
                  description: "Verify that all categories of workers, including fixed-term and those previously excluded, are included in statutory social security and benefit schemes.",
                  icon: Users
                },
                {
                  step: 3,
                  title: "Upgrade Facilities",
                  description: "Conduct a physical audit of your workplace to ensure compliance with the OSHWC Code regarding drinking water, sanitation, first-aid, and safety training.",
                  icon: Building2
                },
                {
                  step: 4,
                  title: "Update HR Documentation",
                  description: "Ensure every employee has a formal Appointment Letter detailing designation, wages, social security entitlements, and working hours.",
                  icon: FileText
                },
                {
                  step: 5,
                  title: "Seek Expert Guidance",
                  description: "Due to complexity of State-level rules and financial impact, consult a compliance expert to draft a tailored transition strategy.",
                  icon: Shield
                }
              ].map((item) => (
                <Card key={item.step} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon className="h-5 w-5 text-secondary" />
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Two-Day F&F Settlement Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
                  🚀 New EXIT Policies
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Two-Day F&F Settlement: Implementation Strategy
                </h2>
                <p className="text-lg text-muted-foreground">
                  Terminal wages must now be paid within <strong>two working days</strong> of separation—a radical shift from the 30-90 day standard practice.
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">0</div>
                      Pre-Exit Process Automation (Day 0)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Digital Exit Intimation: Automated HRIS/Payroll notification system</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Mandatory Clearance Checklists: Digital checklist completed within 4 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Leave Encashment Ready Reckoner: Daily updated leave balances in HRIS</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold">1</div>
                      Rapid Calculation & Verification (Day 1)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Automate earned wages calculation with pro-rata daily figures</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Pre-calculate leave encashment values automatically</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Digital two-level approval workflow (HR → Finance)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/50">
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">2</div>
                      Payment and Documentation (Day 2)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Execute final payment via NEFT/RTGS/IMPS on same day</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Generate and dispatch payslip, experience/relieving letter</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">Initiate Form 16 generation; provide provisional Form 16 if required</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help with Labour Code Compliance?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Don't navigate this complex transition alone. Our experts can help you develop a tailored compliance strategy for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/labour-codes">
                    Get Compliance Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="mailto:krishna@nhrms.com">Schedule a Consultation</a>
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
