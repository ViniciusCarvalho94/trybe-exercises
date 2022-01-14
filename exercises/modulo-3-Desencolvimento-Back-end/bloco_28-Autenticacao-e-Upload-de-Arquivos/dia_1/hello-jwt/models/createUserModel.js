const connection = require('./connection');

module.exports = async (username, password, admin) => {
  const db = await connection();
  const response = await db.collection('users')
    .insertOne({ username, password, admin });
  
  return response.ops[0].username;
};
