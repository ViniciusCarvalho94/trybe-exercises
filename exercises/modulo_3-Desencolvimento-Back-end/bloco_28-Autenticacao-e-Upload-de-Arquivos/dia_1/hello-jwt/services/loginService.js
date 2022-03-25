const { status401 } = require('../errors/errors');
const models = require('../models');
const genJWT = require('../auth/genJWT');

module.exports = async (username, password) => {
  if (!username || !password) throw status401('É necessário usuário e senha para fazer login');
  
 const userFound = await models.findUserModel(username);

  if (!userFound || userFound.password !== password) {
    throw status401('Usuário não existe ou senha inválida');
  } 

  const { password: _password, ...userWithoutPassword } = userFound;
  
 const token = await genJWT(userWithoutPassword);

 return token;
};
