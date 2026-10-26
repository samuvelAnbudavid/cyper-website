import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTAButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link to="/consultation" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
        Request a Consultation <ArrowRight size={16} />
      </Link>
      <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
        Explore Services
      </Link>
    </div>
  );
}
