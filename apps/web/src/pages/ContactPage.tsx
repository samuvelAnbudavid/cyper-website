import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeading } from '../components/SectionHeading';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
  consent: z.boolean().refine((value) => value, 'Please agree to the privacy notice.'),
});

export function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema) });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log('Contact form submitted', values);
    alert('Your request has been captured for follow-up.');
  };

  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Tell us where your team needs support"
        description="Share a few details and we’ll follow up with the next step that matches your current goals."
      />

      <div className="mt-12 mx-auto max-w-3xl card-surface p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Name</span>
            <input {...register('name')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.name && <span className="text-sm text-red-600">{errors.name.message as string}</span>}
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Business email</span>
            <input {...register('email')} type="email" className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.email && <span className="text-sm text-red-600">{errors.email.message as string}</span>}
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Company</span>
            <input {...register('company')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.company && <span className="text-sm text-red-600">{errors.company.message as string}</span>}
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Phone (optional)</span>
            <input {...register('phone')} className="rounded-xl border border-slate-200 px-4 py-3" />
          </label>

          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-sm font-medium text-slate-700">Subject</span>
            <input {...register('subject')} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.subject && <span className="text-sm text-red-600">{errors.subject.message as string}</span>}
          </label>

          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea {...register('message')} rows={5} className="rounded-xl border border-slate-200 px-4 py-3" />
            {errors.message && <span className="text-sm text-red-600">{errors.message.message as string}</span>}
          </label>

          <label className="md:col-span-2 flex items-start gap-3 text-sm text-slate-700">
            <input type="checkbox" {...register('consent')} className="mt-1" />
            <span>I agree to the privacy notice and understand my details may be used to respond to this inquiry.</span>
          </label>
          {errors.consent && <span className="md:col-span-2 text-sm text-red-600">{errors.consent.message as string}</span>}

          <button type="submit" className="md:col-span-2 rounded-full bg-navy px-6 py-3 font-semibold text-white">
            Submit inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
