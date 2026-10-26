import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { services } from '../lib/data';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="container py-20">
        <h1 className="text-3xl font-bold text-navy">Service not found</h1>
        <Link to="/services" className="mt-4 inline-flex text-sm font-semibold text-navy">Return to services</Link>
      </section>
    );
  }

  return (
    <section className="container py-20">
      <div className="card-surface overflow-hidden p-8 md:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">{service.category}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy md:text-5xl">{service.title}</h1>
            <p className="mt-6 text-lg text-slate-600">{service.description}</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
            <ShieldCheck size={28} />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-slate-50 p-6">
            <h2 className="text-2xl font-semibold text-navy">What this engagement includes</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-teal-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-navy p-6 text-white">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Typical outcomes</p>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              <li>• Stronger operational accountability</li>
              <li>• Better control alignment and evidence readiness</li>
              <li>• Clearer remediation and governance planning</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/consultation" className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 font-semibold text-white">
            Request a consultation <ArrowRight size={16} />
          </Link>
          <Link to="/services" className="rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-700">Browse all services</Link>
        </div>
      </div>
    </section>
  );
}
