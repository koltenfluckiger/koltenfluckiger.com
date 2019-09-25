const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const contact_controller = new(require('../../controllers/contactController'))();

// EMAIL ROUTES
router.use(bodyParser.json());

router.post('/email/send', contact_controller.send_email);

module.exports = router;
