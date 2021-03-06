const jwt = require("jsonwebtoken");
const logger = require('node-logger').createLogger('/tmp/development.log');

const secret = process.env.JWT_SECRET;

class AuthMiddleware {

    async checkAuth(req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            console.log("No token found, please login");
            logger.info("No token found, please login");
            return res.status(401).redirect("/");
        }
        try {
            await jwt.verify(token, secret);
            return next();
        } catch (err) {
            console.log(err);
            return res.status(401).redirect("/");
        }
    }
}

module.exports = new AuthMiddleware();
