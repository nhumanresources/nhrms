import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ClipboardList, Timer, Users, BarChart3, Settings, Target, Wrench, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const services = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Work & Motion Study",
    desc: "Rigorous on-the-ground observation of how work is actually performed — identifying waste, inefficiency, and improvement opportunities at the task level.",
    items: ["Method study & process mapping", "Motion economy analysis", "Ergonomics & workplace design", "Value-added vs. non-value-added separation"]
  },
  {
    num: "02",
    icon: Timer,
    title: "Time Study & Standard Setting",
    desc: "Establishing scientifically defensible standard times that form the foundation for fair, accurate workforce planning and performance management.",
    items: ["Stopwatch & video time studies", "Performance rating techniques", "Allowance & fatigue calculations", "PMTS (MTM / MOST) analysis"]
  },
  {
    num: "03",
    icon: Users,
    title: "Manpower Planning",
    desc: "Aligning headcount precisely to workload — eliminating overstaffing costs while ensuring operational capacity is never compromised.",
    items: ["Manpower requirement calculation", "Capacity vs. load analysis", "Shift & schedule optimization", "Headcount benchmarking"]
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Productivity Measurement",
    desc: "Designing meaningful KPIs and monitoring systems that keep productivity improvements visible, measurable, and sustained over time.",
    items: ["KPI framework design", "OEE & utilization tracking", "Productivity dashboards", "Efficiency & idle time analysis"]
  },
  {
    num: "05",
    icon: Settings,
    title: "Process Improvement",
    desc: "Applying Lean and industrial engineering principles to systematically eliminate waste and build faster, smoother, more cost-effective operations.",
    items: ["Lean / waste elimination", "Line balancing & flow design", "SMED & 5S implementation", "Kaizen facilitation"]
  },
  {
    num: "06",
    icon: Target,
    title: "Implementation & Sustainability",
    desc: "Turning recommendations into reality — training your team, embedding new standards, and verifying that gains are maintained long after we leave.",
    items: ["Supervisor & workforce training", "SOP development", "Follow-up productivity audits", "Internal capability building"]
  }
];

const processSteps = [
  { step: "01", title: "Understand the Business", desc: "We immerse ourselves in your operations — understanding your processes, workforce structure, challenges, and the outcomes you want to achieve." },
  { step: "02", title: "On-the-Ground Data Collection", desc: "Time studies, work sampling, activity analysis and motion observation — capturing what is actually happening, not what is assumed." },
  { step: "03", title: "Analysis & Diagnosis", desc: "We calculate standard times, efficiency rates, bottlenecks, and manpower gaps. We benchmark and quantify every opportunity." },
  { step: "04", title: "Recommendations & Implementation", desc: "A data-backed business case, clear improvement roadmap, and hands-on support to make the changes real — and make them last." }
];

const toolkit = [
  "Time & Motion Study", "Work Sampling", "PMTS / MTM / MOST", "Standard Data Systems",
  "Process Flow Charts", "Man-Machine Charts", "Lean / Kaizen", "OEE Analysis",
  "5S Methodology", "SMED Techniques", "Line Balancing", "Productivity Dashboards"
];

const whyUs = [
  { icon: "🔍", title: "Deep Operational Expertise", desc: "Decades of hands-on industrial engineering experience across manufacturing, logistics, services, and healthcare." },
  { icon: "📐", title: "Rigorous, Scientific Methods", desc: "We apply internationally recognised work study standards — no shortcuts, no guesswork, defensible data every time." },
  { icon: "💡", title: "Actionable, Quantified Outcomes", desc: "Every engagement ends with a clear ROI picture — headcount savings, output gains, or cost reductions you can take to your board." },
  { icon: "🤝", title: "Partnership, Not Just Reports", desc: "We stay with you through implementation and follow-up to ensure the improvements are embedded and lasting." }
];

export default function WorkStudyManpower() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Work Study & Manpower Productivity Consulting | nHRMS"
        description="Transform your workforce productivity with precision work study, time & motion analysis, manpower planning, and process improvement consulting from nHRMS."
        keywords="work study, manpower productivity, time study, motion study, lean manufacturing, workforce planning, OEE, line balancing, process improvement"
        canonicalUrl="https://nhrms.lovable.app/services/work-study-manpower"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
        <div className="absolute inset-0 opacity-5 bg-diagonal-pattern" />
        <div className="relative container mx-auto px-4 md:px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-secondary/20 text-secondary border border-secondary/30 mb-6">
              Consulting Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
              Work Study &{' '}
              <span className="text-gradient-warm">Manpower Productivity</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
              Transforming workforces through <em className="text-secondary font-semibold not-italic">precision work study</em> and manpower productivity consulting. Data-driven decisions, not assumptions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { num: "40%", label: "Avg productivity gain" },
                { num: "360°", label: "Full-cycle assessment" },
                { num: "Data", label: "Driven decisions" },
                { num: "ROI", label: "Quantified every time" },
              ].map((stat) => (
                <div key={stat.num} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-4 text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-secondary">{stat.num}</div>
                  <div className="text-xs text-primary-foreground/70 mt-1 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="btn-primary-premium" asChild>
                <a href="mailto:krishna@nhrms.com" className="flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 max-w-xl">
            Six pillars of <span className="text-primary">workforce excellence</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.num} className="group relative bg-card border border-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="absolute top-4 right-6 font-heading text-6xl font-bold text-primary/5 select-none">{svc.num}</span>
                  <Icon className="w-10 h-10 text-primary mb-5" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">How We Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 max-w-md">
            Our consulting <span className="text-primary">process</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <p className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-4">Step — {step.step}</p>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full items-center justify-center text-sm font-bold z-10">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Our Toolkit</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Proven methods, <span className="text-primary">real results</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                nHRMS draws on the full spectrum of industrial engineering and organizational effectiveness tools — adapting the right approach to each client's unique context, industry, and challenges.
              </p>
              <Button size="lg" className="btn-primary-premium" asChild>
                <a href="mailto:krishna@nhrms.com" className="flex items-center gap-2">
                  Schedule a Consultation <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {toolkit.map((tool) => (
                <div key={tool} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 hover:bg-primary/5 transition-colors">
                  <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why nHRMS */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Why nHRMS</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Built on <span className="text-secondary">evidence,</span> not opinion
              </h2>
              <p className="text-primary-foreground/70 leading-relaxed">
                We don't guess. Every recommendation we make is grounded in data collected directly from your operations, analyzed with precision, and presented with a clear, quantified business case.
              </p>
            </div>
            <div className="space-y-4">
              {whyUs.map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-heading font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-primary-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to unlock workforce productivity?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let our experts assess your operations and deliver a data-backed roadmap to higher efficiency, optimized headcount, and measurable ROI.
          </p>
          <Button size="lg" className="btn-primary-premium" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
