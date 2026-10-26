import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="container py-32 text-center">
      <h1 className="text-5xl font-bold text-navy">404</h1>
      <p className="mt-4 text-xl text-slate-600">The page you requested could not be found.</p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 font-semibold text-white">
        Return home
      </Link>
    </section>
  );
}
