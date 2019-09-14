const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const Email = require('../Helpers/email');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  Email.send(message, email, name).then((result) => {
    console.log("Success" + result);
  }, function(error){
    console.log(error);
  });

  res.redirect('/contact');

})

module.exports = router;
