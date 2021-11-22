async function validate(body) {
    const value_valid = typeof body.value === 'integer' || typeof body.value === 'number';
    const unit_in_valid = typeof body.unit_in === 'string';
    const unit_out_valid = typeof body.unit_out === 'string';

    const validations = [
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

module.exports = {
    validate
};