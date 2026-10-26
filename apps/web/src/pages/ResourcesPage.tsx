import { Link } from 'react-router-dom';
import { articles } from '../lib/data';
import { SectionHeading } from '../components/SectionHeading';

export function ResourcesPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Resources"
        title="Insights for leaders preparing secure, resilient organizations"
        description="Explore practical guidance on risk, control maturity, quality management, and cyber readiness."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="card-surface flex h-full flex-col p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{article.category}</p>
            <h3 className="mt-4 text-2xl font-semibold text-navy">{article.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{article.excerpt}</p>
            <div className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">{article.readTime}</div>
            <Link to={`/resources/${article.slug}`} className="mt-6 inline-flex text-sm font-semibold text-navy">
              Read article
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
