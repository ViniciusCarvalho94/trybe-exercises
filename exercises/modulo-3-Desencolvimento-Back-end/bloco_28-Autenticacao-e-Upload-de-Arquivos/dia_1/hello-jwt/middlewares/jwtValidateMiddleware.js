const jwt = require('jsonwebtoken');
const models = require('../models');
const secret = require('../config/jwtSecret');
const { status401 } = require('../errors/errors');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) throw status401('Token não encontrado');
    
    const decoded = jwt.verify(authorization, secret);
    const user = await models.findUserModel(decoded.data.username);

    if (!user) throw status401('Erro ao procurar usuário do token');

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};