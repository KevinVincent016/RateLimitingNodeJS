const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
    it('should return success message for /api/test', async () => {
        const res = await request(app)
            .get('/api/test')
            .expect(200);
        
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toBe('API funcionando correctamente');
        expect(res.body).toHaveProperty('timestamp');
    });

    it('should handle rate limiting', async () => {
        // Realizar más de 100 peticiones
        for(let i = 0; i < 101; i++) {
            await request(app).get('/api/test');
        }
        
        const res = await request(app)
            .get('/api/test')
            .expect(429);
        
        expect(res.body).toHaveProperty('message');
    });
});