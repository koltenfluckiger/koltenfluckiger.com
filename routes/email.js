const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const Email = require('../helpers/email');

router.use(bodyParser.urlencoded({extended: true}));

router.post('/', (req, res) => {

  /* Get the real field values */
  const name = req.body.namerqlfld;
  const email = req.body.emailfldrql;
  const message = req.body.messagerldrfl;

  /* Get the honeypot field values */
  const honeyName = req.body.name;
  const honeyEmail = req.body.email;
  const honeyMessage = req.body.message;

  /* If a bot filled out any of these fields, then just redirect back to home */
  if (honeyName || honeyEmail || honeyMessage) {
    res.redirect('/');
  } else {
    Email.send(message, email, name).then((result) => {
      console.log('Success' + result);
    }, function(error) {
      console.log(error);
    });
    res.redirect('/contact');
  }
})

module.exports = router;
