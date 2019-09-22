const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const contact_controller = require('../../controllers/contactController');
const logger = require('node-logger').createLogger('/tmp/development.log');
const Email = new(require('../../helpers/email'))();

// EMAIL ROUTES
router.use(bodyParser.urlencoded({extended: true}));
router.post('/email/send', contact_controller.send_email);

module.exports = router;
