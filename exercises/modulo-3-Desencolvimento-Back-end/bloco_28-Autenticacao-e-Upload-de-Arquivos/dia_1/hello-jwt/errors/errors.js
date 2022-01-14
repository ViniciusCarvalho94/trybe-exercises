const status401 = (description) => {
  const objError = {
    statusCode: 401,
    message: description,
  };

  return objError;
};

const status400 = (description) => {
  const objError = {
    statusCode: 400,
    message: description,
  };

  return objError;
};

module.exports = {
  status401,
  status400,
};