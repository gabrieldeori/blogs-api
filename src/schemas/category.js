const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = userSchema;
