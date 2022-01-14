const { User } = require('../models');

async function userGetByID(emailToFind) {
  const user = await User.findOne({ where: { email: emailToFind } });
  if (user) {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  }
  return { id: 66, displayName: 'Sem user', email: 'User@mail.com', image: 'nenhuma msm' };
}

module.exports = userGetByID;
