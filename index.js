const express = require('express');

const app = express();

app.get('/v1', (req, res) => {
    res.json({
        "data": "version 1.0.0 | metric api"
    });
});

app.listen(3000,  () => console.log('Server running'));