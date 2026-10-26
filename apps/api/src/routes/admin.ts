import { Router } from 'express';
import { z } from 'zod';
import { requireAdmin } from '../middleware/auth.js';
import { articles, inquiries, services, newsletterSubscribers } from '../lib/demo-data.js';

const inquiryUpdateSchema = z.object({
  status: z.enum(['NEW', 'CONTACTED', 'IN_PROGRESS', 'COMPLETED', 'CLOSED']).optional(),
  internalNotes: z.string().optional(),
});

const articleSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  status: z.enum(['DRAFT', 'PUBLISHED']).default('DRAFT'),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
});

const serviceSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  shortDescription: z.string().min(10),
  description: z.string().min(20),
  category: z.string().min(2),
  isPublished: z.boolean().default(true),
});

export const adminRouter = Router();
adminRouter.use(requireAdmin);

adminRouter.get('/dashboard', (_req, res) => {
  res.json({
    success: true,
    data: {
      inquiries: inquiries.length,
      pendingRequests: inquiries.filter((item) => item.status !== 'COMPLETED' && item.status !== 'CLOSED').length,
      publishedArticles: articles.filter((item) => item.status === 'PUBLISHED').length,
    },
  });
});

adminRouter.get('/inquiries', (_req, res) => {
  res.json({ success: true, data: inquiries });
});

adminRouter.get('/inquiries/:id', (req, res) => {
  const inquiry = inquiries.find((item) => item.id === req.params.id);
  if (!inquiry) {
    return res.status(404).json({ success: false, message: 'Inquiry not found.' });
  }
  return res.json({ success: true, data: inquiry });
});

adminRouter.patch('/inquiries/:id', (req, res) => {
  const parsed = inquiryUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid inquiry update payload.', errors: parsed.error.flatten() });
  }

  const inquiry = inquiries.find((item) => item.id === req.params.id);
  if (!inquiry) {
    return res.status(404).json({ success: false, message: 'Inquiry not found.' });
  }

  Object.assign(inquiry, parsed.data);
  return res.json({ success: true, data: inquiry });
});

adminRouter.get('/services', (_req, res) => {
  res.json({ success: true, data: services });
});

adminRouter.post('/services', (req, res) => {
  const parsed = serviceSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid service payload.', errors: parsed.error.flatten() });
  }

  const item = { id: `svc-${Date.now()}`, ...parsed.data };
  services.push(item);
  return res.status(201).json({ success: true, data: item });
});

adminRouter.patch('/services/:id', (req, res) => {
  const index = services.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Service not found.' });
  }
  services[index] = { ...services[index], ...req.body };
  return res.json({ success: true, data: services[index] });
});

adminRouter.delete('/services/:id', (req, res) => {
  const index = services.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Service not found.' });
  }
  services.splice(index, 1);
  return res.json({ success: true, message: 'Service removed.' });
});

adminRouter.get('/articles', (_req, res) => {
  res.json({ success: true, data: articles });
});

adminRouter.post('/articles', (req, res) => {
  const parsed = articleSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid article payload.', errors: parsed.error.flatten() });
  }

  const item = { id: `art-${Date.now()}`, ...parsed.data };
  articles.push(item);
  return res.status(201).json({ success: true, data: item });
});

adminRouter.patch('/articles/:id', (req, res) => {
  const index = articles.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Article not found.' });
  }
  articles[index] = { ...articles[index], ...req.body };
  return res.json({ success: true, data: articles[index] });
});

adminRouter.delete('/articles/:id', (req, res) => {
  const index = articles.findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Article not found.' });
  }
  articles.splice(index, 1);
  return res.json({ success: true, message: 'Article removed.' });
});

adminRouter.get('/newsletter', (_req, res) => {
  res.json({ success: true, data: newsletterSubscribers });
});

export default adminRouter;
