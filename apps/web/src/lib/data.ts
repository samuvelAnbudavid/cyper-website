export type Service = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: 'ISO 27001',
    slug: 'iso-27001',
    category: 'Information Security',
    shortDescription: 'Information security management and risk control for resilient operating models.',
    description:
      'Cybereye Intelitech helps organizations implement ISMS controls, map risks to business objectives, and prepare for certification readiness with pragmatic governance and evidence tracking.',
    bullets: ['Risk assessment and control design', 'Policy and evidence mapping', 'Internal audit preparation'],
  },
  {
    title: 'ISO 9001',
    slug: 'iso-9001',
    category: 'Quality Management',
    shortDescription: 'Quality process improvement and certification acceleration for growth-focused teams.',
    description:
      'We help operational teams create repeatable quality systems, improve customer experience, and align leadership and process owners around measurable performance goals.',
    bullets: ['Process mapping and KPI design', 'Document control framework', 'Leadership and management review support'],
  },
  {
    title: 'ISO 14001',
    slug: 'iso-14001',
    category: 'Environmental Management',
    shortDescription: 'Sustainability and environmental compliance built into daily operations.',
    description:
      'Our consultants support environmental impact review, compliance planning, and control design that helps organizations improve operational efficiency and reduce waste.',
    bullets: ['Environmental aspect reviews', 'Operational control design', 'Legal register and reporting readiness'],
  },
  {
    title: 'ISO 45001',
    slug: 'iso-45001',
    category: 'Health & Safety',
    shortDescription: 'Health and safety management practices that protect workers and stakeholders.',
    description:
      'We build practical health and safety systems with documented controls, leadership accountability, and incident learning that support sustainable operational safety.',
    bullets: ['Hazard identification', 'Safety training support', 'Management review and KPI tracking'],
  },
  {
    title: 'SOC 2',
    slug: 'soc-2',
    category: 'Security Assurance',
    shortDescription: 'Readiness and compliance consulting for trustworthy customer commitments.',
    description:
      'Cybereye Intelitech helps organizations prepare for SOC 2 readiness, define trust service criteria, and improve evidence readiness for internal control evaluation.',
    bullets: ['Control gap assessment', 'Policy and evidence alignment', 'Readiness roadmap and remediation planning'],
  },
  {
    title: 'VAPT',
    slug: 'vapt',
    category: 'Cybersecurity Testing',
    shortDescription: 'Targeted vulnerability assessments and penetration testing for digital risk reduction.',
    description:
      'Our assessments combine technical testing with business risk prioritization to give security leaders clear remediation priorities and governance-ready reporting.',
    bullets: ['Web and API testing', 'Configuration and cloud review', 'Executive risk reporting'],
  },
  {
    title: 'Privacy & Data Protection',
    slug: 'privacy',
    category: 'Data Privacy',
    shortDescription: 'Privacy programs that support lawful data handling and operational confidence.',
    description:
      'We guide teams through privacy program design, data flow mapping, and operational controls to strengthen accountability and customer trust.',
    bullets: ['Privacy impact assessments', 'Policy and process design', 'Consent and data subject workflows'],
  },
];

export const industries = [
  'Healthcare',
  'SaaS',
  'Financial Services',
  'Manufacturing',
  'IT and Professional Services',
  'Logistics',
  'Education',
  'Retail',
];

export const faqs = [
  {
    question: 'Do you provide implementation support or only consulting?',
    answer:
      'We provide both strategic guidance and hands-on implementation support, including policy development, process review, evidence mapping, internal audit preparation, and remediation planning.',
  },
  {
    question: 'Can you support multinational organizations?',
    answer:
      'Yes. Cybereye Intelitech supports organizations operating across multiple jurisdictions by aligning local requirements with international standards and internal control frameworks.',
  },
  {
    question: 'How long does a readiness engagement usually take?',
    answer:
      'The timeline depends on the standard, maturity level, and scope of the business. Many teams benefit from a phased roadmap spanning several weeks to a few months.',
  },
  {
    question: 'Are your services suitable for SMEs?',
    answer:
      'Absolutely. We tailor engagements for startups, growing companies, and larger enterprises, with scalable implementation roadmaps designed around business fit.',
  },
];

export const articles = [
  {
    slug: 'iso-27001-readiness-roadmap',
    title: 'ISO 27001 readiness roadmap for growing SaaS teams',
    excerpt: 'A pragmatic roadmap for building an ISMS without slowing down product delivery.',
    category: 'Information Security',
    readTime: '6 min read',
  },
  {
    slug: 'building-trust-in-customer-security-operations',
    title: 'Building trust in customer security operations',
    excerpt: 'How leaders can translate security maturity into better customer confidence and lower audit friction.',
    category: 'Cybersecurity',
    readTime: '7 min read',
  },
  {
    slug: 'iso-9001-quality-leadership-insights',
    title: 'ISO 9001 quality insights for leadership teams',
    excerpt: 'Practical ways to connect quality management to commercial and operational performance.',
    category: 'Quality',
    readTime: '5 min read',
  },
];

export const testimonials = [
  {
    name: 'A. Morgan',
    title: 'VP Operations, Northpeak Systems',
    quote:
      'The project felt structured, business-aware, and realistic. Cybereye Intelitech helped us turn compliance work into an operating discipline that actually supported growth.',
  },
  {
    name: 'K. Singh',
    title: 'Director, Blue Harbor Care',
    quote:
      'Their consultants made the certification readiness effort practical. We gained clarity on controls, evidence, and ownership without unnecessary overhead.',
  },
];

export const stats = [
  { label: 'ISO certification projects supported', value: '40+' },
  { label: 'Teams guided through compliance readiness', value: '120+' },
  { label: 'Security assessment and review programs', value: '35+' },
];
