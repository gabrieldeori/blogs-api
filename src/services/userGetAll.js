const { User } = require('../models');

async function userGetAll() {
  const users = await User.findAll();
  return users;
}

module.exports = userGetAll;
