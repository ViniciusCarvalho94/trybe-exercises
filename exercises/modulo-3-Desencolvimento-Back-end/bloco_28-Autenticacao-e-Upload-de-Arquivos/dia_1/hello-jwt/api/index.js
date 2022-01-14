require('dotenv').config();
const express = require('express');

const { PORT } = process.env;

const controllers = require('../controllers');
const errorMiddleware = require('../middlewares/errorMiddleware');
const jwtValidateMiddleware = require('../middlewares/jwtValidateMiddleware');

const app = express();

app.use(express.json());

app.post('/register', controllers.createUserController);
app.post('/login', controllers.loginController);
app.get('/posts', jwtValidateMiddleware, controllers.postController);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
