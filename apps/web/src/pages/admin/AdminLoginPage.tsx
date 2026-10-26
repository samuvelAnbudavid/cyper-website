import { useState } from 'react';

export function AdminLoginPage() {
  const [email, setEmail] = useState('admin@cybereyeintelitech.com');
  const [password, setPassword] = useState('ChangeMe123!');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('cybereyeintelitech-admin', 'true');
    window.location.href = '/admin/dashboard';
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-navy">Admin login</h1>
        <p className="mt-3 text-sm text-slate-600">Use your secured admin credentials.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" />
          </label>
          <button type="submit" className="w-full rounded-full bg-navy px-5 py-3 font-semibold text-white">Log in</button>
        </form>
      </div>
    </div>
  );
}
