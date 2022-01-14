require('dotenv').config();

const models = require('../models');
const { status400 } = require('../errors/errors');

const { LOGIN, PASSWORD } = process.env;

const userIsAdmin = (username, password) => {
  if (username === LOGIN && password === PASSWORD) {
    return true;
  }
  return false;
};

const validateUsernamePassword = (username, password) => {
  if (username.length < 5 || password.length < 5) {
    throw status400('É necessário um username ou password com pelo menos 5 caracteres');
  }
};

const userfound = async (username) => {
  const userFound = await models.findUserModel(username);
  if (userFound) throw status400('Usuário já cadastrado');
};

module.exports = async (username, password) => {
  const admin = userIsAdmin(username, password);
  validateUsernamePassword(username, password);
  await userfound(username);
  const response = await models.createUserModel(username, password, admin);

  return response;
};
