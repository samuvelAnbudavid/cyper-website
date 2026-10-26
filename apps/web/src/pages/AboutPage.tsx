import { SectionHeading } from '../components/SectionHeading';

export function AboutPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="About us"
        title="Cybereye Intelitech helps leaders turn compliance into operational value"
        description="We work with organizations that need better control maturity, stronger team alignment, and a clearer roadmap for certification and risk reduction."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8">
          <h3 className="text-2xl font-semibold text-navy">Our approach</h3>
          <p className="mt-4 text-slate-600">
            Cybereye Intelitech blends strategic advisory with implementation guidance. Our consultants support leadership teams in preparing for ISO audits, improving process control, and strengthening cybersecurity governance without overwhelming internal teams.
          </p>
        </div>
        <div className="card-surface p-8">
          <h3 className="text-2xl font-semibold text-navy">What we value</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>• Clear priorities and business alignment</li>
            <li>• Realistic documentation and evidence frameworks</li>
            <li>• Cross-functional accountability and leadership support</li>
            <li>• Practical improvements with measurable value</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
