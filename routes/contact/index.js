const Express = require('express');
const Router = Express.Router();
const BodyParser = require('body-parser');
const ContactController = new(require('../../controllers/contactcontroller'))();

Router.use(BodyParser.json());

// EMAIL ROUTES
Router.post('/email/send', ContactController.sendEmail)

module.exports = Router;
