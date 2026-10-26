import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import { createApp, handleApiError } from './app.js';

describe('API health endpoint', () => {
  it('returns a healthy status payload', async () => {
    const app = createApp();

    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.status).toBe('ok');
  });

  it('handles errors with the Express error-handler contract', () => {
    const status = vi.fn().mockReturnThis();
    const json = vi.fn();
    const res = { status, json } as any;

    handleApiError(new Error('expected test failure'), {} as any, res, vi.fn());

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({
      success: false,
      message: 'An internal server error occurred.',
    });
  });
});
