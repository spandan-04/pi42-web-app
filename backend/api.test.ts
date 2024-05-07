// api.test.ts

import request from 'supertest';
import app from '../app'; // Import your Express app

describe('GET /crypto-contracts', () => {
  it('responds with JSON containing a list of crypto contracts', async () => {
    const response = await request(app).get('/crypto-contracts');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('contracts');
    expect(Array.isArray(response.body.contracts)).toBe(true);
  });
});
