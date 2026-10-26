import { Link, useParams } from 'react-router-dom';
import { articles } from '../lib/data';

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="container py-20">
        <h1 className="text-3xl font-bold text-navy">Article not found</h1>
        <Link to="/resources" className="mt-4 inline-flex text-sm font-semibold text-navy">Back to resources</Link>
      </section>
    );
  }

  return (
    <section className="container py-20">
      <article className="card-surface mx-auto max-w-3xl p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{article.category}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy">{article.title}</h1>
        <p className="mt-3 text-sm uppercase tracking-[0.16em] text-slate-500">{article.readTime}</p>
        <div className="mt-8 space-y-5 text-slate-700">
          <p>
            Compliance programs work best when they are built around real operating realities rather than administrative checklists alone. For growing organizations, the goal is not just to satisfy a standard, but to improve internal accountability, reduce operational risk, and build trust with customers and partners.
          </p>
          <p>
            A practical readiness roadmap starts with clear scope, stakeholder ownership, and a realistic review of current documentation and processes. Once those foundations are in place, organizations can prioritize risk responses, evidence collection, and internal reviews that support sustainable improvement.
          </p>
          <p>
            The strongest programs remain measurable and easy to explain to leadership teams. That is why Cybereye Intelitech emphasizes structured implementation, business relevance, and continuous improvement over one-time compliance effort.
          </p>
        </div>
      </article>
    </section>
  );
}
