const connection = require('./connection');

const getByAuthorId = async (id) => connection()
  .then((db) => db.collection('books').find({ author_id: Number(id) }).toArray())

const getAll = async () => connection()
  .then((db) => db.collection('books').find({}).toArray())

module.exports = {
  getAll,
  getByAuthorId,
}
