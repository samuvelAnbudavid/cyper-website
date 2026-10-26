import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeading } from '../components/SectionHeading';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(10),
});

export function ConsultationPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log('Consultation request', values);
    alert('Your consultation request has been received.');
  };

  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Consultation"
        title="Request a tailored session with Cybereye Intelitech"
        description="Share your goals, constraints, and current compliance or cyber priorities."
      />

      <div className="mt-12 card-surface mx-auto max-w-3xl p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span>Name</span>
            <input {...register('name')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.name && <span className="text-sm text-red-600">{errors.name.message as string}</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span>Business email</span>
            <input {...register('email')} type="email" className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.email && <span className="text-sm text-red-600">{errors.email.message as string}</span>}
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span>Company</span>
            <input {...register('company')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.company && <span className="text-sm text-red-600">{errors.company.message as string}</span>}
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span>Requested service</span>
            <input {...register('service')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.service && <span className="text-sm text-red-600">{errors.service.message as string}</span>}
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span>Project goals or scope</span>
            <textarea {...register('message')} rows={5} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.message && <span className="text-sm text-red-600">{errors.message.message as string}</span>}
          </label>

          <button type="submit" className="md:col-span-2 rounded-full bg-navy px-6 py-3 font-semibold text-white">
            Submit consultation request
          </button>
        </form>
      </div>
    </section>
  );
}
