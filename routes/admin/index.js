const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const admin_controller = new(require('../../controllers/adminController'))();

// ADMIN ROUTES
router.use(bodyParser.json());

router.post('/login', admin_controller.auth);

module.exports = router;
