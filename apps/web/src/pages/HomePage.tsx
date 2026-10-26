import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTAButtons } from '../components/CTAButtons';
import { SectionHeading } from '../components/SectionHeading';
import { faqs, services, stats, testimonials } from '../lib/data';

const trustPillars = [
  'ISO readiness',
  'Risk-based governance',
  'Security operations support',
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(43,182,173,0.18),_transparent_25%)]" />
        <div className="container relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-teal-700">
              Enterprise compliance & cyber advisory
            </span>
            <h1 className="max-w-xl text-4xl font-bold tracking-[-0.06em] text-navy md:text-6xl">
              Build trust, resilience, and audit readiness with confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Cybereye Intelitech helps businesses navigate ISO standards, cybersecurity strategy, governance, and operational controls with clear, practical guidance.
            </p>
            <div className="mt-8">
              <CTAButtons />
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
              {trustPillars.map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-2 shadow-sm">
                  <CheckCircle2 size={16} className="text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="premium-card card-surface p-6 md:p-8">
            <div className="rounded-[1.75rem] bg-navy p-7 text-white md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Operational focus</p>
                <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200">Live roadmap</div>
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight">
                A clearer path from compliance effort to measurable business value.
              </h2>

              <div className="mt-8 space-y-5">
                {[
                  'Risk-based assessments aligned to real business priorities',
                  'Actionable remediation plans and evidence maps',
                  'Implementation support for leaders and internal owners',
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/5 p-3">
                    <ShieldCheck className="mt-1 text-teal-400" size={18} />
                    <p className="text-slate-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['40+', 'Projects'],
                  ['120+', 'Teams guided'],
                  ['35+', 'Reviews'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-2xl font-bold text-white">{value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Core services"
            title="Purpose-built support across certification, compliance, and security"
            description="Whether you are preparing for an audit or building stronger controls, Cybereye Intelitech focuses on practical execution and measurable progress."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <div key={service.slug} className="premium-card card-surface flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{service.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between">
                  <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    Learn more <ArrowUpRight size={16} />
                  </Link>
                  <span className="rounded-full bg-slate-100 p-2 text-slate-700">
                    <ChevronRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Cybereye Intelitech"
              title="A partner that connects governance to day-to-day execution"
              description="We help leadership teams reduce friction between policy design, security operations, and certification needs."
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: 'Business-focused advice', text: 'Recommendations shaped around risk, operations, and accountability.' },
              { icon: TrendingUp, title: 'Clear implementation roadmap', text: 'Prioritized actions that support both audit readiness and business momentum.' },
              { icon: Users, title: 'Cross-functional collaboration', text: 'Alignment across leadership, operations, IT, and quality stakeholders.' },
              { icon: ArrowRight, title: 'Practical evidence preparation', text: 'Actions that translate into structured, review-ready documentation.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-teal-300">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Our process" title="A structured path from assessment to sustained maturity" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ['01', 'Discovery', 'We clarify goals, scope, stakeholders, and current operating maturity.'],
              ['02', 'Assessment', 'We review processes, controls, risks, and documentation across your environment.'],
              ['03', 'Remediation', 'We define practical actions, owners, and timelines for meaningful improvement.'],
              ['04', 'Follow-up', 'We support evidence readiness, internal reviews, and ongoing improvement.'],
            ].map(([step, title, text]) => (
              <div key={step} className="card-surface p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">{step}</p>
                <h3 className="mt-4 text-2xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container">
          <SectionHeading eyebrow="Industries" title="Support across the sectors you depend on" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {['Healthcare', 'SaaS', 'Financial Services', 'Manufacturing', 'IT'].map((industry) => (
              <div key={industry} className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-lg font-medium text-navy shadow-soft">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Featured services" title="Specialized support for compliance, security, and operational excellence" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div key={service.slug} className="card-surface flex h-full flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{service.category}</p>
                <h3 className="mt-4 text-2xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Review service <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container">
          <SectionHeading eyebrow="Impact" title="Measured progress for teams that need practical execution" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card-surface p-8 text-center">
                <div className="text-4xl font-bold text-navy">{stat.value}</div>
                <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <SectionHeading eyebrow="Client feedback" title="Demo testimonials from client-style scenarios" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="card-surface p-6">
                <p className="text-lg leading-8 text-slate-700">“{item.quote}”</p>
                <footer className="mt-5 border-t border-slate-200 pt-4">
                  <div className="font-semibold text-navy">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.title}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container max-w-4xl">
          <SectionHeading eyebrow="Frequently asked questions" title="Common questions from teams preparing for change" align="center" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-lg font-medium text-navy">{faq.question}</summary>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="rounded-[2rem] bg-navy px-6 py-10 text-white md:px-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Start today</p>
                <h2 className="text-3xl font-bold tracking-tight">Need a safer, more mature operating model?</h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/consultation" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-navy">
                  Request a consultation
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 font-semibold text-white">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container max-w-2xl">
          <SectionHeading eyebrow="Newsletter" title="Stay informed on compliance and security trends" align="center" />
          <form className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Business email address" className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-slate-700 shadow-sm" aria-label="Email address" />
            <button type="submit" className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
