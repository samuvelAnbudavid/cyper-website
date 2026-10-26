import type { Request, Response, NextFunction } from 'express';

function hasAuthSession(req: Request): boolean {
  return !!req.cookies?.sam_company_session;
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!hasAuthSession(req)) {
    return res.status(401).json({ success: false, message: 'Authentication required.' });
  }

  return next();
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!hasAuthSession(req)) {
    return res.status(401).json({ success: false, message: 'Admin authentication required.' });
  }

  return next();
}
