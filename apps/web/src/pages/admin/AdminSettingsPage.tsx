export function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-navy">Settings</h1>
        <div className="mt-6 grid gap-5">
          <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Admin name" />
          <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Admin email" />
          <button className="rounded-full bg-navy px-6 py-3 font-semibold text-white">Save settings</button>
        </div>
      </div>
    </div>
  );
}
