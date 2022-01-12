const models = require('../models');
const { internalServerError } = require('../utils/returnMessages');

async function categoriesList() {
  const categories = await models.Category.findAll();
  if (!categories) return internalServerError;
  return categories;
}

module.exports = categoriesList;
