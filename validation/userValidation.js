const Joi = require('joi');

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    pin: Joi.number().required().min(100000).max(999999),
})

module.exports = {registerSchema}