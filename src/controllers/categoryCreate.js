const services = require('../services');
const { internalServerError } = require('../utils/returnMessages');

async function categoryCreate(req, res, nex) {
  try {
    const { name } = req.body;
    const validateName = services.validations.categoryValidation(name);
    if (validateName.error) return nex(validateName);
    const createdCategory = await services.categoryCreate(name);
    if (createdCategory.error) return nex(createdCategory);
    return res.status(201).json(createdCategory);
  } catch (e) {
    console.log(e);
  }
  return internalServerError;
}

module.exports = categoryCreate;
