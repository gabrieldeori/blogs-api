const services = require('../services');
const { category } = require('../schemas');
const { internalServerError } = require('../utils/returnMessages');

async function categoryCreate(req, res, nex) {
  try {
    const { name } = req.body;
    const validateName = services.validation({ name }, category);
    if (validateName.error) return nex(validateName);
    const createdCategory = await services.categoryCreate(name);
    if (createdCategory.error) return nex(createdCategory);
    return res.status(201).json(createdCategory);
  } catch (e) {
    console.log(e);
  }
  return nex(internalServerError);
}

module.exports = categoryCreate;
