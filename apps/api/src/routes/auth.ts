import { Router } from 'express';
import { z } from 'zod';
import argon2 from 'argon2';
import { env } from '../config/env.js';
import { requireAuth } from '../middleware/auth.js';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const parsed = loginSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Invalid login payload.', errors: parsed.error.flatten() });
  }

  if (parsed.data.email !== env.adminEmail) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  const isValid = await argon2.verify(
    '$argon2id$v=19$m=65536,t=3,p=4$J6Kf5kA7PTiEvVnEW4jQQg$4SxQ6izbIVBAoK9h3v9TV1sFcZV5a8R0QTI5nS8MfcIk',
    parsed.data.password,
  );

  if (!isValid) {
    return res.status(401).json({ success: false, message: 'Invalid email or password.' });
  }

  res.cookie('sam_company_session', 'admin-session', {
    httpOnly: true,
    secure: env.nodeEnv === 'production',
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 8,
  });

  return res.json({ success: true, message: 'Login successful.' });
});

authRouter.post('/logout', (_req, res) => {
  res.clearCookie('sam_company_session');
  return res.json({ success: true, message: 'Logged out successfully.' });
});

authRouter.get('/me', requireAuth, (_req, res) => {
  res.json({ success: true, data: { email: env.adminEmail, role: 'ADMIN' } });
});

export default authRouter;
