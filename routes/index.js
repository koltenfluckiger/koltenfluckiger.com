const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const contactRouter = require('./contact');
const adminRouter = require('./admin');

router.use('/admin', adminRouter);
router.use('/contact', contactRouter);

module.exports = router;
