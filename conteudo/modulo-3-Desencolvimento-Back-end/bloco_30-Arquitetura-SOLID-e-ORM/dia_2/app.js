const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.json());

app.use('/user', userController);

module.exports = app;
