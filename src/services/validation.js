const { StatusCodes } = require('http-status-codes');

function validation(dataObject, schema) {
  const joiValidation = schema.validate(dataObject);
  if (joiValidation.error) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      error: joiValidation.error.details[0].message,
    };
  }
  return dataObject;
}

module.exports = validation;
