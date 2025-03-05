const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 1000, // 15 segundos (para demo)
    max: 50, // Límite de 50 peticiones por ventana
    message: {
        status: 429,
        message: 'Demasiadas peticiones, por favor intente más tarde'
    }
});

module.exports = limiter;