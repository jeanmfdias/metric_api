async function validate(body) {
    const value_valid = typeof body.value === 'integer' || typeof body.value === 'number';
    const unit_in_valid = typeof body.unit_in === 'string';
    const unit_out_valid = typeof body.unit_out === 'string';
    const value_required = body.value !== undefined && body.value !== "";
    const unit_in_required = body.unit_in !== undefined && body.unit_in !== "";
    const unit_out_required = body.unit_out !== undefined && body.unit_out !== "";

    const validations = [
        {
            name: 'value',
            valid: value_required,
            message: 'value is required'
        },
        {
            name: 'unit_in',
            valid: unit_in_required,
            message: 'unit_in is required'
        },
        {
            name: 'unit_out',
            valid: unit_out_required,
            message: 'unit_out is required'
        },
        {
            name: 'value',
            valid: value_valid,
            message: 'value should be a number valid'
        },
        {
            name: 'unit_in',
            valid: unit_in_valid,
            message: 'unit_in should be a string valid'
        },
        {
            name: 'unit_out',
            valid: unit_out_valid,
            message: 'unit_out should be a string valid'
        }
    ];

    return validations;
}

function normalize(data) {
    return data.map(value => {
        let new_value = value;
        new_value.input = JSON.parse(new_value.input);
        new_value.output = JSON.parse(new_value.output);
        return new_value;
    });
}

module.exports = {
    validate,
    normalize
};