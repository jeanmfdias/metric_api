const Moment = require('moment');
const Log = require('../models/logs');

module.exports = app => {
    app.post('/v1/conversion', (req, res) => {
        const body = req.body;
        let new_value = null;
        let result = {
            "status": "success",
            "data" : "",
            "executed_at": Moment().format('YYYY-MM-DD HH:mm:ss')
        };

        if (body.unit_in == "M" && body.unit_out == "K") {
            new_value = body.value / 1000;
        }

        result.data = {
            "value": new_value
        };

        let log = {
            "alias": "conversion",
            "value": "conversion",
            "input": JSON.stringify(body),
            "output": JSON.stringify(result),
            "created_at": Moment().format('YYYY-MM-DD HH:mm:ss')
        };

        Log.create(log);

        return res.json(result);
    });
}