const jwt = require("jsonwebtoken");
const logger = require('node-logger').createLogger('/tmp/development.log');

const JWT_SECRET = process.env.JWT_SECRET;

class APIMiddleware {

  async checkAuth(req, res, next) {
    return next();
    if (!req.cookies.token) {
      console.log("No token found, please login");
      logger.info("No token found, please login");
      return res.status(401).redirect("/");
    }
    try {
      await jwt.verify(token, JWT_SECRET);
      return next();
    } catch  {
      return res.status(401).redirect("/");
    }
  }
}

module.exports = new APIMiddleware();
