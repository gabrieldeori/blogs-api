const categoryCreate = require('./categoryCreate');
const categoriesList = require('./categoriesList');
const login = require('./login');
const validations = require('./validations');
const userCreate = require('./userCreate');
const userGetByID = require('./userGetByID');
const userGetAll = require('./userGetAll');

module.exports = {
  categoryCreate,
  categoriesList,
  login,
  validations,
  userCreate,
  userGetAll,
  userGetByID,
};
