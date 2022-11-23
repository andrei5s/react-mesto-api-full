require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');

const routes = require('./routes/index');
const { createUser, login } = require('./controllers/users');
const { checkUser, checkLogin } = require('./validation/validation');
const { ERROR_SERVER } = require('./utils/constants');
const NotFoundError = require('./errors/not-found-err');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const corsReqest = require('./middlewares/cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mestodb');

// для собирания JSON-формата
app.use(bodyParser.json());
// для приёма веб-страниц внутри POST-запроса
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use(cors(corsReqest));

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

const { PORT = 3000 } = process.env;

app.post('/signin', checkLogin, login);
app.post('/signup', checkUser, createUser);
app.use(routes);

app.use(express.json());

// eslint-disable-next-line no-undef
app.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Указанный путь не существует'));
});

// подключаем логгер ошибок
app.use(errorLogger);

// Обработка ошибок celebrate
app.use(errors());

// Централизованная обработка ошибок
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = ERROR_SERVER, message } = err;
  const errorMessage = (statusCode === ERROR_SERVER) ? 'Ошибка на сервере' : message;
  res.status(statusCode).send({ message: errorMessage });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
