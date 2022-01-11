const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: '',
  database: 'cep_lookup',
  port: '3306',
});

module.exports = connection;
