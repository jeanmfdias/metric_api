const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const connection = require('./configs/database');
const migrations = require('./configs/migrations');

const app = express();

app.use(bodyParser.json());

consign()
    .include('controllers')
    .into(app);

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('successful db connection');

        migrations.init(connection);
        migrations.criarLogsTable();

        app.listen(3000,  () => console.log('Server running'));
    }
});
