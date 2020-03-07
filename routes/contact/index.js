const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const ContactController = require("../../controllers/contactcontroller");

Router.use(BodyParser.json());

Router.post("/email/send", ContactController.sendEmail)

module.exports = Router;
