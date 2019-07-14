const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCommentInput(data) {
  let errors = {};

  if (validator.isEmpty(data.text)) {
    errors.image = 'To post comment enter text.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};