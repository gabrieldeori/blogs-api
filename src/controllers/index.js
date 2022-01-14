const categoryCreate = require('./categoryCreate');
const categoriesList = require('./categoriesList');
const login = require('./login');
const ping = require('./ping');
const createPost = require('./createPost');
const getAllPosts = require('./getAllPosts');
const userCreate = require('./userCreate');
const userGetAll = require('./userGetAll');
const userGetByID = require('./userGetByID');

module.exports = {
  categoryCreate,
  categoriesList,
  login,
  ping,
  createPost,
  getAllPosts,
  userCreate,
  userGetAll,
  userGetByID,
};
