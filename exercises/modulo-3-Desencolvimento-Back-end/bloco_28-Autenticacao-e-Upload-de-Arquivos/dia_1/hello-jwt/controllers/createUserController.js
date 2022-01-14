const services = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await services.createUserService(username, password);
  
    return res.status(200).json({ response });
  } catch (error) {
    return next(error);
  }
};
