const login = require('./login');
const validations = require('./validations');
const userCreate = require('./userCreate');
const userGetByID = require('./userGetByID');
const userGetAll = require('./userGetAll');

module.exports = {
  login,
  validations,
  userCreate,
  userGetAll,
  userGetByID,
};
