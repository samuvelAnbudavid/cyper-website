import { Bell, FileText, LayoutGrid, LogOut, Search, Settings, Users } from 'lucide-react';

const stats = [
  { label: 'New inquiries', value: '24', detail: '+12% vs last week' },
  { label: 'Pending requests', value: '08', detail: '3 awaiting follow-up' },
  { label: 'Completed requests', value: '31', detail: 'Most in ISO 27001' },
  { label: 'Published articles', value: '12', detail: '2 new this month' },
];

const inquiries = [
  { name: 'Alicia Park', company: 'Northpeak Systems', service: 'ISO 27001', status: 'New', date: '2026-10-20' },
  { name: 'David Nunez', company: 'Blue Harbor Care', service: 'ISO 9001', status: 'Contacted', date: '2026-10-18' },
  { name: 'Katherine Singh', company: 'LatticeForge', service: 'SOC 2', status: 'In progress', date: '2026-10-16' },
  { name: 'Marcus Hall', company: 'Aster Labs', service: 'VAPT', status: 'Completed', date: '2026-10-12' },
];

const navItems = [
  { label: 'Dashboard', Icon: LayoutGrid, active: true },
  { label: 'Inquiries', Icon: Users, active: false },
  { label: 'Articles', Icon: FileText, active: false },
  { label: 'Settings', Icon: Settings, active: false },
];

export function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="mx-auto flex max-w-[1500px] gap-6 p-4 md:p-8">
        <aside className="hidden w-72 shrink-0 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft lg:block">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white">C</div>
            <div>
              <div className="text-lg font-semibold text-navy">Cybereye</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Admin</div>
            </div>
          </div>

          <nav className="mt-6 space-y-2">
            {navItems.map(({ label, Icon, active }) => (
              <button
                key={label}
                type="button"
                className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium ${
                  active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft md:p-7">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Admin dashboard</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy">Overview</h1>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600">
                <Bell size={16} />
              </button>
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-3 top-3 text-slate-400" size={16} />
                <input defaultValue="Search requests" className="w-56 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-500" />
              </div>
              <button
                type="button"
                onClick={() => localStorage.removeItem('cybereyeintelitech-admin')}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
              >
                <LogOut size={16} />
                Log out
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{stat.label}</p>
                <div className="mt-3 flex items-end justify-between gap-3">
                  <span className="text-4xl font-bold tracking-tight text-navy">{stat.value}</span>
                </div>
                <p className="mt-2 text-xs text-slate-500">{stat.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-5">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-navy">Recent inquiries</h2>
                <p className="text-sm text-slate-500">Sorted by newest submissions</p>
              </div>
              <div className="flex gap-2">
                <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">All statuses</button>
                <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">This month</button>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Company</th>
                    <th className="p-4">Service</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry.name} className="border-t border-slate-200 text-sm text-slate-700">
                      <td className="p-4 font-medium text-navy">{inquiry.name}</td>
                      <td className="p-4">{inquiry.company}</td>
                      <td className="p-4">{inquiry.service}</td>
                      <td className="p-4">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">{inquiry.status}</span>
                      </td>
                      <td className="p-4">{inquiry.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
