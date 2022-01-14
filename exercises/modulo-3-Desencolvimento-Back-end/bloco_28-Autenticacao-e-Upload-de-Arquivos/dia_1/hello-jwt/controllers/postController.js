const post = {
  post: { message: 'Ae menó você tem acesso... se é brabo!' },
};

module.exports = (_req, res, next) => {
  try {
    return res.status(200).json(post);
  } catch (error) {
    return next(error);
  }
};