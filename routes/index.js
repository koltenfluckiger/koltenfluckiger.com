const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const contactRouter = require('./contact');

router.use('/contact', contactRouter);

module.exports = router;
