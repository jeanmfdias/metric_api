const Moment = require('moment');

const ConversionService = require('../services/conversion_service');
const Log = require('../models/logs');

module.exports = app => {
    app.post('/v1/conversion', async (req, res) => {
        const body = req.body;

        // await just work inside async function with an async function
        const validate = await ConversionService.validate(body);
        const errors = validate.filter(field => !field.valid);
        
        if (errors.length) {
            return res.status(400).json(errors);
        }

        let new_value = null;
        let result = {
            "status": "success",
            "data" : "",
            "executed_at": Moment().format('YYYY-MM-DD HH:mm:ss')
        };

        if (body.unit_in == "M" && body.unit_out == "K") {
            new_value = body.value / 1000;
        }

        let data = {
            "value": new_value
        };

        result = { ...result, data}

        let log = {
            "alias": "conversion",
            "value": "conversion",
            "input": JSON.stringify(body),
            "output": JSON.stringify(result),
            "created_at": Moment().format('YYYY-MM-DD HH:mm:ss')
        };

        Log.create(log)
            .then(done => {
                result.status = done
                return res.status(201).json(result);
            })
            .catch(err => {
                return res.status(400).json(err)
            });
    });
}