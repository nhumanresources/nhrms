import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import {
  Scale,
  CalendarClock,
  MapPin,
  FileWarning,
  Sheet as SheetIcon,
  ShieldCheck,
  Target,
  Layers,
  Zap,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
} from 'lucide-react';

const challenges = [
  {
    icon: Scale,
    title: 'Frequently Changing Labour Laws',
    body:
      'Between the four new labour codes, state notifications, and constant amendments to PF, ESIC and the Factories Act, most HR teams discover changes only after they\'ve already missed something.',
  },
  {
    icon: CalendarClock,
    title: 'Missed Statutory Deadlines',
    body:
      'A missed PF return or late LWF remittance quietly compounds into penalties that surface only during an audit. Tracking returns, renewals and filing windows across acts is genuinely hard.',
  },
  {
    icon: MapPin,
    title: 'Multi-State Compliance Complexity',
    body:
      'Operating across Maharashtra, Karnataka, Tamil Nadu, Telangana and Delhi means juggling different minimum wages, PT slabs, S&E registrations and state-specific cycles.',
  },
  {
    icon: FileWarning,
    title: 'Contractor & Vendor Risks',
    body:
      'Principal employers carry significant liability under the Contract Labour Act, yet contractor PF/ESIC coverage and wage compliance for vendor workers often go unverified.',
  },
  {
    icon: SheetIcon,
    title: 'Manual Spreadsheet Tracking',
    body:
      'When deadlines, registers and inspection records sit in spreadsheets across HR, payroll and finance, something will slip. Manual processes create audit exposure at the worst moment.',
  },
  {
    icon: ShieldCheck,
    title: 'Audit & Inspection Pressure',
    body:
      'Labour inspections and EPFO inquiries have become more frequent. Businesses without a structured review often surface documentation gaps and incorrect wage calculations.',
  },
];

const auditAreas = [
  { n: '01', title: 'HR Policy Review', body: 'Existing HR policies measured against current statutory requirements — standing orders, leave, POSH, service rules.' },
  { n: '02', title: 'Labour Law Compliance Gaps', body: 'Posture across the Industrial Relations Code, Code on Wages, Social Security Code and OSH Code, plus state requirements.' },
  { n: '03', title: 'Payroll & Wage Structure', body: 'Whether your payroll aligns with the new wage definition, minimum wages, statutory deductions and F&F across operating states.' },
  { n: '04', title: 'Contractor Documentation', body: 'Principal employer compliance, contractor agreements, Form V & Form VI records and vendor liability exposure.' },
  { n: '05', title: 'POSH & Employee Documentation', body: 'ICC constitution, annual reports and employee documentation practices across locations.' },
  { n: '06', title: 'State-Wise Compliance Tracking', body: 'Location-specific gaps, missing registrations and state-level filing requirements that may not be on your radar.' },
  { n: '07', title: 'Exit & Settlement Process', body: 'F&F processes, gratuity eligibility tracking and exit documentation against current legal standards.' },
  { n: '08', title: 'Compliance Reporting Visibility', body: 'Whether leadership has meaningful visibility into compliance health for governance, audits and investor reporting.' },
];

const sampleQuestions = [
  'Are employment contracts updated as per current labour law requirements?',
  'Are statutory compliance registers digitally maintained and audit-ready?',
  'Do you track state-wise labour law deadlines across all operating locations?',
  'Is contractor and vendor documentation audit-ready and fully compliant?',
  'Are payroll structures aligned with the Code on Wages and current minimum wages?',
  'Are employee onboarding documents standardized across all locations?',
];

const whyUs = [
  { icon: Target, title: 'Practical Compliance Support', tag: 'Operational Focus', body: 'Recommendations are actionable, prioritized by risk, and built for teams that need to move quickly without disrupting operations.' },
  { icon: Layers, title: 'Multi-Location Workforce Expertise', tag: 'Multi-State Coverage', body: 'We\'ve worked with companies running compliance across 10+ states. We understand state nuances and the practical challenges of distributed operations.' },
  { icon: Zap, title: 'Faster Operational Response', tag: 'Responsive Team', body: 'Whether it\'s an urgent audit concern, a due-diligence request or a contractor gap before a site inspection — we move at operations speed.' },
  { icon: Users, title: 'Human-Led Expert Guidance', tag: 'Expert Guidance', body: 'Every review involves senior compliance professionals — two-decade HR practitioners, not generalists working from templates.' },
];

const steps = [
  { n: 1, title: 'Complete the Audit Form', body: 'Share business, team size, operating states and the areas you want reviewed. Takes 5–7 minutes and helps us prepare a focused audit.' },
  { n: 2, title: 'Receive Compliance Observations', body: 'Our specialists prepare a structured overview of gaps, risk areas and priority actions — tailored, not templated.' },
  { n: 3, title: 'Speak With a Compliance Specialist', body: 'A focused call to walk through findings and outline what a structured improvement plan looks like. No pressure, no proposal theatre.' },
];

const faqs = [
  { q: 'Is this HR compliance audit really free?', a: 'Yes. The initial HR compliance audit is complimentary for qualifying businesses. You receive a structured review across the areas you specify — payroll, labour law, contractor documentation and multi-state compliance — without an upfront fee.' },
  { q: 'Who should take this HR compliance assessment?', a: 'HR heads and CHROs managing growing teams, founders preparing for fundraising or expansion, compliance managers at mid-size or large companies, operations leaders in manufacturing & logistics, and businesses that have recently scaled across multiple states.' },
  { q: 'Do you support multi-state labour law compliance?', a: 'Yes. We work with companies operating across Maharashtra, Karnataka, Tamil Nadu, Delhi, Telangana, Haryana, Gujarat and others. State-specific requirements vary significantly and are a common source of gaps.' },
  { q: 'Will I receive a compliance report after the audit?', a: 'Yes. We prepare a compliance observations document covering your specified areas, gaps, risk levels and priority actions — and walk you through it in a dedicated review call.' },
  { q: 'How long does the compliance review process take?', a: 'The form takes 5–7 minutes. Initial observations are ready within 3–5 business days. The review call is 45–60 minutes. End-to-end is typically a week.' },
  { q: 'Is this audit suitable for staffing companies and GCCs?', a: 'Absolutely. We work specifically with staffing firms and global capability centres. The audit addresses the compliance dynamics of both segments — contractor documentation, wage compliance and adherence at scale.' },
  { q: 'Can startups and early-stage companies use this audit?', a: 'Yes — we encourage it early. Compliance structures built for an initial size create gaps as you scale. Addressing them early is far less disruptive than fixing them during fundraising or a labour inspection.' },
  { q: 'Do you review contractor and payroll compliance specifically?', a: 'Yes, both are core. For payroll: wage structures vs the Code on Wages, minimum wage compliance, deduction accuracy, F&F. For contractors: principal employer obligations, agreements, statutory coverage, Form V & VI records.' },
];

const TOPMATE_URL = 'https://topmate.io/recruiter';

const buildTopmateUrl = (lead?: { name?: string; email?: string; phone?: string; company_name?: string }) => {
  const params = new URLSearchParams();
  if (lead?.name) params.set('name', lead.name);
  if (lead?.email) params.set('email', lead.email);
  if (lead?.phone) params.set('phone', lead.phone);
  if (lead?.company_name) params.set('company', lead.company_name);
  const qs = params.toString();
  return qs ? `${TOPMATE_URL}?${qs}` : TOPMATE_URL;
};

const openTopmate = (lead?: { name?: string; email?: string; phone?: string; company_name?: string }) => {
  window.open(buildTopmateUrl(lead), '_blank', 'noopener,noreferrer');
};

export default function FreeHRComplianceAudit() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company_name: '' });
  const [lastLead, setLastLead] = useState<typeof form | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('submit-labour-code-lead', {
        body: { ...form, lead_type: 'consultation' },
      });
      if (error) throw error;
      setLastLead(form);
      setSubmitted(true);
      toast({ title: 'Audit request received', description: 'Opening calendar to book your review call…' });
      // Open Topmate booking with prefilled lead details
      openTopmate(form);
      setForm({ name: '', email: '', phone: '', company_name: '' });
    } catch (err) {
      console.error(err);
      toast({ title: 'Submission failed', description: 'Please try again or call +91 90521 31123.', variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Free HR Compliance Audit India | nHRMS"
        description="Complimentary HR compliance audit for growing businesses in India. Identify labour law, payroll, contractor and multi-state compliance gaps before they cost you."
        keywords="HR compliance audit India, free HR audit, labour law compliance, statutory compliance audit, multi-state compliance, contractor compliance"
        canonicalUrl="https://nhrms.com/free-hr-compliance-audit"
      />
      <Navbar />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 md:px-6 py-20 md:py-28 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
                  <Sparkles className="h-4 w-4" />
                  Free HR Compliance Audit · India
                </div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Your Business Has{' '}
                  <span className="text-gradient-warm">Compliance Gaps</span>{' '}
                  Most Don't Know It Yet
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  A structured review of your HR & labour law posture by practitioners with two decades in the field. No templates. No proposal theatre.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#audit-form">
                    <Button size="lg" className="btn-primary-premium gap-2">
                      Get My Audit Report <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="gap-2" onClick={() => openTopmate(form)}>
                    <CalendarClock className="h-4 w-4" /> Book a Review Call
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Results in 5 business days</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> Multi-state coverage</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> No obligations</div>
                </div>
              </div>

              {/* FORM CARD */}
              <div id="audit-form" className="card-premium p-8 md:p-10 rounded-3xl border border-border shadow-2xl bg-card/95 backdrop-blur">
                {submitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold">Request received</h3>
                    <p className="text-muted-foreground">We've opened our calendar in a new tab so you can lock in your compliance review call. Don't see it? Use the button below.</p>
                    <Button size="lg" className="btn-primary-premium gap-2" onClick={() => openTopmate(lastLead ?? undefined)}>
                      <CalendarClock className="h-4 w-4" /> Book My Review Call
                    </Button>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Submit another</Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">Free HR Compliance Audit</h2>
                      <p className="text-muted-foreground text-sm">For growing businesses. Get observations within 5 business days.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Work Email *</Label>
                        <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Mobile Number *</Label>
                        <Input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input id="company" required value={form.company_name} onChange={(e) => setForm({ ...form, company_name: e.target.value })} placeholder="Your company" />
                      </div>
                      <Button type="submit" size="lg" className="w-full btn-primary-premium" disabled={submitting}>
                        {submitting ? 'Submitting…' : 'Get My Audit Report'}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        By submitting, you agree to receive communication from nHRMS regarding your compliance audit.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Common Challenges</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Why HR Compliance Gets Complicated in India</h2>
              <p className="mt-4 text-lg text-muted-foreground">Most businesses aren't non-compliant by intent. They're navigating a landscape that changes faster than internal teams can track.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((c) => {
                const Icon = c.icon;
                return (
                  <Card key={c.title} className="card-premium border border-border/60 hover:border-secondary/40 transition-all hover:-translate-y-1">
                    <CardContent className="p-7">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-3">{c.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{c.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUDIT COVERAGE */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Audit Coverage</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">What the HR Compliance Audit Covers</h2>
              <p className="mt-4 text-lg text-muted-foreground">A structured review of your HR & compliance operations — not a cursory checklist, a genuine look at where you stand against current legal requirements.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {auditAreas.map((a) => (
                <div key={a.n} className="group relative p-7 rounded-2xl border border-border bg-card hover:shadow-xl transition-all">
                  <div className="flex items-start gap-5">
                    <span className="font-heading text-3xl font-bold text-gradient-warm shrink-0">{a.n}</span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2">{a.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAMPLE QUESTIONS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Audit Preview</p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-6">How Ready Is Your Organization?</h2>
                <p className="text-lg text-muted-foreground mb-8">A sample of the questions covered. Most teams find 3 to 5 areas that need immediate attention.</p>
                <div className="card-premium p-8 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Speak with a specialist</p>
                  <h3 className="font-heading text-2xl font-bold mb-4">Book a Compliance Review Call</h3>
                  <p className="text-muted-foreground mb-6">A focused 30-minute walkthrough of your specific compliance situation.</p>
                  <Button size="lg" className="btn-primary-premium gap-2" onClick={() => openTopmate(form)}>
                    Book a Review <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="card-premium p-8 rounded-2xl border border-border bg-card">
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">HR Compliance Audit — Sample</p>
                <ul className="space-y-5">
                  {sampleQuestions.map((q, i) => (
                    <li key={i} className="border-b border-border/60 pb-5 last:border-0 last:pb-0">
                      <p className="font-medium mb-3">{q}</p>
                      <div className="flex gap-2">
                        {['Yes', 'Partially', 'No'].map((opt) => (
                          <span key={opt} className="px-3 py-1 text-xs rounded-full border border-border bg-muted/50 text-muted-foreground">{opt}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHY NHRMS */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Why nHRMS</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">A Workforce Operations Partner, Not Just a Consultant</h2>
              <p className="mt-4 text-lg text-muted-foreground">nHRMS works alongside HR & operations teams as a hands-on compliance partner — not an advisory firm that hands you a report and walks away.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whyUs.map((w) => {
                const Icon = w.icon;
                return (
                  <Card key={w.title} className="card-premium border border-border/60">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-secondary flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold mb-2">{w.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">{w.body}</p>
                          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">{w.tag}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">How It Works</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Three Steps to Compliance Clarity</h2>
              <p className="mt-4 text-lg text-muted-foreground">Designed to be straightforward, low-effort on your end, and useful from the very first conversation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.n} className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-xl transition-all">
                  <div className="font-heading text-6xl font-bold text-gradient-warm mb-4 leading-none">{s.n}</div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">FAQ</p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Questions About the HR Compliance Audit</h2>
              <p className="mt-4 text-lg text-muted-foreground">Everything you need to know before getting started.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="card-premium relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-16 text-primary-foreground">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-sm font-semibold tracking-widest uppercase opacity-80 mb-3">Get Started</p>
                <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-5">Get Clarity on Your HR Compliance Risks</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl">Understand where your organization stands and identify compliance gaps before they impact operations, audits, payroll or your next funding round.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#audit-form">
                    <Button size="lg" variant="secondary" className="gap-2">Get My Audit Report <ArrowRight className="h-4 w-4" /></Button>
                  </a>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
                    onClick={() => openTopmate(form)}
                  >
                    <CalendarClock className="h-4 w-4" /> Book a Review Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
