const express = require('express');
const router = express.Router();
const { testEndpoint } = require('../controllers/api.controller');

router.get('/test', testEndpoint);

module.exports = router;