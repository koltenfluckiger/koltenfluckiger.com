const jwt = require("jsonwebtoken");
const config = require("../../config");

class AuthMiddleware {
  static async checkAuth(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
      return res.redirect("/");
    }
    try {
      await jwt.verify(token, config.secret);
      console.log("Successful token");
      next();
    } catch {
      return res.redirect("/");
    }
  }
}

module.exports = AuthMiddleware;
