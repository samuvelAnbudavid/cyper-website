import { Router } from 'express';
import { z } from 'zod';
import { services, articles, inquiries, newsletterSubscribers } from '../lib/demo-data.js';

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  serviceId: z.string().optional(),
  subject: z.string().min(3),
  message: z.string().min(10),
  consent: z.boolean().default(true),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

export const publicRouter = Router();

publicRouter.get('/services', (_req, res) => {
  res.json({ success: true, data: services });
});

publicRouter.get('/services/:slug', (req, res) => {
  const service = services.find((item) => item.slug === req.params.slug);

  if (!service) {
    return res.status(404).json({ success: false, message: 'Service not found.' });
  }

  return res.json({ success: true, data: service });
});

publicRouter.get('/articles', (_req, res) => {
  res.json({ success: true, data: articles });
});

publicRouter.get('/articles/:slug', (req, res) => {
  const article = articles.find((item) => item.slug === req.params.slug);

  if (!article) {
    return res.status(404).json({ success: false, message: 'Article not found.' });
  }

  return res.json({ success: true, data: article });
});

publicRouter.post('/inquiries', (req, res) => {
  const parsed = inquirySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid inquiry payload.', errors: parsed.error.flatten() });
  }

  const record = {
    id: `inq-${Date.now()}`,
    ...parsed.data,
    status: 'NEW',
    createdAt: new Date().toISOString(),
  };

  inquiries.push(record);

  return res.status(201).json({ success: true, message: 'Inquiry submitted successfully.', data: record });
});

publicRouter.post('/newsletter', (req, res) => {
  const parsed = newsletterSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid newsletter submission.', errors: parsed.error.flatten() });
  }

  const existing = newsletterSubscribers.find((item) => item.email === parsed.data.email);
  if (!existing) {
    newsletterSubscribers.push({ id: `news-${Date.now()}`, email: parsed.data.email, status: 'ACTIVE' });
  }

  return res.status(201).json({ success: true, message: 'Subscription successful.' });
});
