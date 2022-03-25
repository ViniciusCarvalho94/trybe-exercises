const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const AuthorMySQL = require('./models/MySQL/Author');
const BookMySQL = require('./models/MySQL/Book');

const AuthorMongoDB = require('./models/MongoDB/Author')
const BookMongoDB = require('./models/MongoDB/Books')

app.get('/authors-sql', async (_req, res) => {
  const authors = await AuthorMySQL.getAll();

  res.status(200).json(authors);
});

app.get('/books-sql', async (_req, res) => {
  const books = await BookMySQL.getAll();

  res.status(200).json(books);
})

app.get('/books-sql/:id', async (req, res) => {
  const { id } = req.params;
  const AuthorId = await BookMySQL.getByAuthorId(id)
  
  res.status(200).json(AuthorId);
})

app.get('/authors-mongo', async (_req, res) => {
  const authors = await AuthorMongoDB.getAll();

  res.status(200).json(authors);
})

app.get('/books-mongo', async (_req, res) => {
  const books = await BookMongoDB.getAll();

  res.status(200).json(books);
})

app.get('/books-mongo/:id', async (req, res) => {
  const { id } = req.params;
  const AuthorId = await BookMongoDB.getByAuthorId(id);

  res.status(200).json(AuthorId);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
