const JWT = require("jsonwebtoken");
const {AdminService} = require("../../services");
const logger = require("node-logger").createLogger("/tmp/development.log");

const JWT_SECRET = process.env.JWT_SECRET;

class AuthController {

  async login(req, res) {
    try {
      const payload = req.body;
      const authToken = await AdminService.authenicate(payload);
      return res.cookie("token", authToken, {
        expires: new Date(Date.now() + 24 * 3600000),
        secure: true,
        httpOnly: true
      }).status(200).json({success: true});
    } catch (err) {
      console.log(err);
      return res.sendStatus(401);
    }
  }
  async verify(req, res) {
    const token = req.cookies.token;
    if (!token) {
      console.log("No token found, please login");
      logger.info("No token found, please login");
      return res.sendStatus(401);
    }
    try {
      await JWT.verify(token, JWT_SECRET);
      return res.sendStatus(200);
    } catch  {
      return res.sendStatus(401);
    }
  }
}

module.exports = new AuthController();
