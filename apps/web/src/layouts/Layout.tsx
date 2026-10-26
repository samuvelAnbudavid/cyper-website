import { Outlet, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ChatbotWidget } from '../components/ChatbotWidget';

const servicesMenu = [
  { label: 'ISO 27001', to: '/services/iso-27001' },
  { label: 'ISO 9001', to: '/services/iso-9001' },
  { label: 'SOC 2', to: '/services/soc-2' },
  { label: 'VAPT', to: '/services/vapt' },
];

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: servicesMenu },
  { label: 'Industries', to: '/industries' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight text-slate-900">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-sm font-bold text-white shadow-lg shadow-slate-300/40">
              C
            </span>
            <span className="text-xl">Cybereye Intelitech</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <div key={item.label} className="group relative">
                {item.children ? (
                  <>
                    <button type="button" className="flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-navy">
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link key={child.to} to={child.to} className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-navy">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={item.to} className="text-sm font-medium text-slate-700 transition hover:text-navy">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/contact" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Talk to us
            </Link>
            <Link to="/consultation" className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-900">
              Request a Consultation
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-200 p-2 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="container flex flex-col gap-2 py-4">
              {navigation.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50">
                  {item.children ? (
                    <div className="space-y-2 p-3">
                      <div className="px-2 text-sm font-semibold text-slate-700">{item.label}</div>
                      {item.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={() => setMenuOpen(false)} className="block rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-white">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link to={item.to} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/consultation" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white">
                Request a Consultation <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <ChatbotWidget />

      <footer className="border-t border-slate-200 bg-navy text-slate-100">
        <div className="container grid gap-8 py-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3 font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-accent">
                C
              </span>
              <span>Cybereye Intelitech</span>
            </div>
            <p className="text-sm text-slate-300">
              Cyber resilience, assurance, and compliance support for high-trust organizations.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Company</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/industries">Industries</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/resources">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/consultation">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Contact</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>hello@cybereyeintelitech.com</li>
              <li>+1 (415) 555-0149</li>
              <li>440 H Street, Suite 300, San Francisco, CA</li>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
