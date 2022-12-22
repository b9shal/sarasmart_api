function auth(req, res, next) {
  if (req.headers.authorization) {
    return next();
  }
  return res.status(400).send("you are not authorized");
}

module.exports = auth;
