const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const contactController = require('../controllers/contactController');

router.use(bodyParser.urlencoded({extended: true}));
router.use('/contact', contactController.send_email);

module.exports = router;
