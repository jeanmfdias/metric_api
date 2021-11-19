const Log = require('../models/logs');

module.exports = app => {
    app.post('/v1/conversion', (req, res) => {
        const body = req.body;
        let new_value = null;
        let result = {
            "status": "success",
            "data" : ""
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
            "output": JSON.stringify(result)
        };

        Log.create(log);

        return res.json(result);
    });
}