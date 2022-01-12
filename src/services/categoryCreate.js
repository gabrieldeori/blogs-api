const models = require('../models');
const { internalServerError } = require('../utils/returnMessages');

async function categoryCreate(nameToInsert) {
  const categoryCreated = await models.Category.create({ name: nameToInsert });
  if (!categoryCreated) return internalServerError;
  const { id, name } = categoryCreated;
  return { id, name };
}

module.exports = categoryCreate;
