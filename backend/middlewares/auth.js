const jwt = require('jsonwebtoken');
const BadDataError = require('../errors/beddataerr');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new BadDataError('Необходима авторизация'));
  }

  // const token = extractBearerToken(authorization);
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, 'super-strong-secret');
  } catch (err) {
    return next(new BadDataError('Необходима авторизация'));
  }

  req.user = payload;

  next();
};
