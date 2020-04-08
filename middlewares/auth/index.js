const JWT = require("jsonwebtoken");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const JWT_SECRET = process.env.JWT_SECRET;

class AuthMiddleware {

  async checkAuth(req, res, next) {
    if (!req.cookies.token) {
      logger.info("No token found, please login");
      return res.status(401).redirect("/");
    }
    try {
      await JWT.verify(token, JWT_SECRET);
      return next();
    } catch  {
      return res.status(401).redirect("/");
    }
  }
}

module.exports = new AuthMiddleware();
