const jwt = require("jsonwebtoken");
const config = require("../../config");

const logger = require('node-logger').createLogger('/tmp/development.log');

class AuthMiddleware {

  async checkAuth(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).redirect("/");
    }
    try {
      await jwt.verify(token, config.secret);
      next();
    } catch  {
      return res.status(401).redirect("/");
    }
  }
}

module.exports = new AuthMiddleware();
