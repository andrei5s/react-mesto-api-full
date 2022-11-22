const { isURL } = require('validator');

module.exports = (value, helpers) => {
  if (!isURL(value)) {
    return helpers.message(`"${helpers.state.path}" Не правильный url`);
  }
  return value;
};
