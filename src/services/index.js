const login = require('./login');
const loginValidation = require('./loginValidation');
const userCreate = require('./userCreate');
const userValidation = require('./userValidation');
const userGetByID = require('./userGetByID');
const userGetAll = require('./userGetAll');

module.exports = {
  login,
  loginValidation,
  userCreate,
  userGetAll,
  userGetByID,
  userValidation,
};
