export function AdminArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-navy">Articles</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {['ISO 27001 readiness roadmap', 'Quality insights for leadership teams'].map((article) => (
            <div key={article} className="rounded-2xl border border-slate-200 p-5">
              <h2 className="text-xl font-semibold text-navy">{article}</h2>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">Draft</span>
                <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-700">Published</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
