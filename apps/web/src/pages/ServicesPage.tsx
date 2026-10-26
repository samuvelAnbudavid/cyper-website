import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { services } from '../lib/data';

export function ServicesPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Services"
        title="Certification, compliance, and cyber readiness support built around business needs"
        description="Choose the service area that best matches your current stage of control maturity, audit planning, or technical security review."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="premium-card card-surface flex h-full flex-col p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                {service.category}
              </span>
              <span className="rounded-full bg-teal-50 p-2 text-teal-700">
                <ShieldCheck size={14} />
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-navy">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {service.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-teal-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link to={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy">
              View service details <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
