import { industries } from '../lib/data';
import { SectionHeading } from '../components/SectionHeading';

export function IndustriesPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Industries served"
        title="Trusted support across risk-sensitive and growth-focused sectors"
        description="Cybereye Intelitech works with organizations whose compliance and control needs are tied directly to customer trust, operational continuity, and regulatory accountability."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry} className="card-surface p-6 text-lg font-medium text-navy">
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
