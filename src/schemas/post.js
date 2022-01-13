const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).items(Joi.number().integer()).required()
  .messages({
    'array.min': '"categoryIds" not found',
  }),
});

module.exports = postSchema;
