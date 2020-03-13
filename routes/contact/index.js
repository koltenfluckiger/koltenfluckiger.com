const Express = require("express");
const Router = Express.Router();
const ContactController = require("../../controllers/contactcontroller");

Router.post("/email/send", ContactController.sendEmail)

module.exports = Router;
