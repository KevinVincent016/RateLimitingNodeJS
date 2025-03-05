const testEndpoint = (req, res) => {
    res.json({ 
        message: 'API funcionando correctamente',
        timestamp: new Date().toISOString()
    });
};

module.exports = {
    testEndpoint
};