export function AdminInquiryDetailPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-navy">Inquiry detail</h1>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Name</p>
            <p className="mt-2 font-semibold text-navy">Alicia Park</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-500">Service</p>
            <p className="mt-2 font-semibold text-navy">ISO 27001</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
            <p className="text-sm text-slate-500">Message</p>
            <p className="mt-2 text-slate-700">We need support preparing an ISMS and internal policies before our next audit cycle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
