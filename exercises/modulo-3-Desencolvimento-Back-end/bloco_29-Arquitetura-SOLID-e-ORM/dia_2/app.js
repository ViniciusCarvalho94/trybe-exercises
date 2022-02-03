const express = require('express');

const booksController = require('./controllers/booksController');
const bookController = require('./controllers/bookController');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/books', booksController);
app.use('/book', bookController);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
