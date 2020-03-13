const Express = require("express");
const Router = Express.Router();

const {AuthController} = require("../../controllers");

Router.get("/", AuthController.verify)
Router.post("/login", AuthController.login)

module.exports = Router;
