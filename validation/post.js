const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.image = !isEmpty(data.image) ? data.image : '';


  if (validator.isEmpty(data.image)) {
    errors.image = 'Image is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};