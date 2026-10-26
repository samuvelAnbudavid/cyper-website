import 'dotenv/config';

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: process.env.DATABASE_URL ?? 'postgresql://sam_company:sam_company@localhost:5432/sam_company?schema=public',
  sessionSecret: process.env.SESSION_SECRET ?? 'dev-session-secret',
  csrfSecret: process.env.CSRF_SECRET ?? 'dev-csrf-secret',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@cybereyeintelitech.com',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'ChangeMe123!',
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
};
