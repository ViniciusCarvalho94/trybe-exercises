require('dotenv').config();

module.exports = {
  expiresIn: process.env.EXPIRESIN,
  algorithm: process.env.ALGORITHM,
};