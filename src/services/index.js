const categoryCreate = require('./categoryCreate');
const categoriesList = require('./categoriesList');
const findUserWithToken = require('./findUserWithToken');
const login = require('./login');
const postCreate = require('./postCreate');
const postsGetAll = require('./postsGetAll');
const validation = require('./validation');
const userCreate = require('./userCreate');
const userGetByID = require('./userGetByID');
const userGetAll = require('./userGetAll');

module.exports = {
  categoryCreate,
  categoriesList,
  findUserWithToken,
  login,
  postCreate,
  postsGetAll,
  validation,
  userCreate,
  userGetAll,
  userGetByID,
};
