const express = require('express');
const bodyParser = require('body-parser');

const connection = require('./configs/database');

const app = express();

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('successful db connection');

        app.listen(3000,  () => console.log('Server running'));
    }
});

app.use(bodyParser.json());

app.get('/v1', (req, res) => {
    return res.json({
        "data": "version 1.0.0 | metric api"
    });
});

app.post('/v1/convert', (req, res) => {
    return res.json({
        "status": "success",
        "data": req.body
    });
});