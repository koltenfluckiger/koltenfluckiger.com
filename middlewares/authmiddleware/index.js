class AuthMiddleware {
  static async checkAuth(req, res, next) {
    const token = req.cookies;
    console.log(token);
    next();
  }
}

module.exports = AuthMiddleware;
