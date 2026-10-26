type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  isPublished: boolean;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: 'DRAFT' | 'PUBLISHED';
  metaTitle?: string;
  metaDescription?: string;
};

type Inquiry = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  serviceId?: string;
  subject: string;
  message: string;
  status: string;
  createdAt?: string;
  internalNotes?: string;
  consent?: boolean;
};

type NewsletterSubscriber = {
  id: string;
  email: string;
  status: 'ACTIVE' | 'INACTIVE';
};

export const services: Service[] = [
  {
    id: 'svc-iso-27001',
    name: 'ISO 27001',
    slug: 'iso-27001',
    shortDescription: 'Information security management and risk control for resilient operating models.',
    description: 'Implementation support for information security management systems, governance, and evidence-based compliance improvement.',
    category: 'Information Security',
    isPublished: true,
  },
  {
    id: 'svc-iso-9001',
    name: 'ISO 9001',
    slug: 'iso-9001',
    shortDescription: 'Quality management improvement aligned to business growth.',
    description: 'Quality process optimization, documentation improvement, and leadership alignment for repeatable operations.',
    category: 'Quality Management',
    isPublished: true,
  },
  {
    id: 'svc-soc-2',
    name: 'SOC 2',
    slug: 'soc-2',
    shortDescription: 'Readiness and compliance consulting for trust-focused organizations.',
    description: 'Support for SOC 2 readiness planning and control gap assessment for growth-focused service teams.',
    category: 'Security Assurance',
    isPublished: true,
  },
];

export const articles: Article[] = [
  {
    id: 'art-1',
    title: 'ISO 27001 readiness roadmap for growing SaaS teams',
    slug: 'iso-27001-readiness-roadmap',
    excerpt: 'A pragmatic roadmap for building an ISMS without slowing product delivery.',
    content: 'This resource outlines the practical steps for building an ISMS and aligning evidence to business decisions.',
    status: 'PUBLISHED',
    metaTitle: 'ISO 27001 readiness roadmap for growing SaaS teams',
    metaDescription: 'A practical roadmap for effective ISO 27001 readiness and ISMS maturity.',
  },
  {
    id: 'art-2',
    title: 'Building trust in customer security operations',
    slug: 'building-trust-in-customer-security-operations',
    excerpt: 'How leaders can connect control maturity to customer confidence and lower friction.',
    content: 'Strong security operations are built on accountability, evidence, and visible process leadership.',
    status: 'PUBLISHED',
    metaTitle: 'Building trust in customer security operations',
    metaDescription: 'Practical strategies for improving trust in customer-facing security programs.',
  },
];

export const inquiries: Inquiry[] = [
  {
    id: 'inq-1',
    name: 'Alicia Park',
    email: 'alicia@example.com',
    company: 'Northpeak Systems',
    phone: '+1-415-000-0001',
    serviceId: 'svc-iso-27001',
    subject: 'ISO 27001 planning',
    message: 'We need support preparing an ISMS and internal policies before our audit cycle.',
    status: 'NEW',
    internalNotes: 'Leads with governance and evidence review readiness.',
  },
];

export const newsletterSubscribers: NewsletterSubscriber[] = [
  { id: 'news-1', email: 'ops@example.com', status: 'ACTIVE' },
];

export const adminUser = {
  email: 'admin@cybereyeintelitech.com',
  passwordHash: '$argon2id$v=19$m=65536,t=3,p=4$J6Kf5kA7PTiEvVnEW4jQQg$4SxQ6izbIVBAoK9h3v9TV1sFcZV5a8R0QTI5nS8MfcIk',
};
