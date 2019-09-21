const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Email = new(require('../../helpers/email'))();

var logger = require('node-logger').createLogger('/tmp/development.log');

const contact_controller = require('../../controllers/contactController');

router.use(bodyParser.urlencoded({extended: true}));

// EMAIL ROUTES

router.post('/email/send', contact_controller.send_email);


module.exports = router;
