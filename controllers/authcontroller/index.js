const jwt = require("jsonwebtoken");
const {AdminService} = require("../../services");
const logger = require("node-logger").createLogger("/tmp/development.log");

const secret = process.env.JWT_SECRET;

class AuthController {

    async login(req, res) {
        try {
            const payload = req.body;
            const authToken = await AdminService.authenicate(payload);
            return res.cookie("token", authToken).status(200).json({success: true});
        } catch (err) {
            console.log(err);
            return res.sendStatus(401);
        }
    }
    async verify(req, res) {
        const token = req.cookies.token;
        if (!token) {
            logger.info("No token found, please login");
            return res.sendStatus(401);
        }
        try {
            await jwt.verify(token, secret);
            return res.sendStatus(200);
        } catch  {
            return res.sendStatus(401);
        }
    }
}

module.exports = new AuthController();
