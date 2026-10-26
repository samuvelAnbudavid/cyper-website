export function AdminServicesPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Content management</p>
            <h1 className="mt-2 text-3xl font-bold text-navy">Service management</h1>
          </div>
          <button type="button" className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">Add service</button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {['ISO 27001', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'SOC 2', 'VAPT'].map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-navy">{service}</h2>
                <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Published</span>
              </div>
              <p className="mt-4 text-sm text-slate-600">Service details and publishing controls are managed here.</p>
              <div className="mt-5 flex gap-2">
                <button type="button" className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">Edit</button>
                <button type="button" className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
