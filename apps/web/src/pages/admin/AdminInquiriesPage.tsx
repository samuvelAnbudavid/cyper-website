export function AdminInquiriesPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Leads</p>
            <h1 className="mt-2 text-3xl font-bold text-navy">Inquiries</h1>
          </div>
          <div className="flex gap-2">
            <button type="button" className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700">Filter</button>
            <button type="button" className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">Export</button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Service</th>
                <th className="p-4">Status</th>
                <th className="p-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Alicia Park', 'ISO 27001', 'NEW', '2026-10-20'],
                ['David Nunez', 'ISO 9001', 'CONTACTED', '2026-10-18'],
                ['Katherine Singh', 'SOC 2', 'IN_PROGRESS', '2026-10-16'],
              ].map(([name, service, status, date]) => (
                <tr key={name} className="border-t border-slate-200 text-sm text-slate-700">
                  <td className="p-4 font-medium text-navy">{name}</td>
                  <td className="p-4">{service}</td>
                  <td className="p-4">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{status}</span>
                  </td>
                  <td className="p-4">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
