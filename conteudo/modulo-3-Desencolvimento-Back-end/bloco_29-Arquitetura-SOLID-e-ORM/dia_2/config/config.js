require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || orm_example,
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || orm_example,
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || orm_example,
    host: process.env.HOSTNAME || 'localhost',
    dialect: 'mysql',
  },
};