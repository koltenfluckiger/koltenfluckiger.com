const Email = new(require('../../helpers/email'))();

var logger = require('node-logger').createLogger('/tmp/development.log');

exports.send_email = (req, res) => {

  console.log(req.body);
  /* Get the real field values */
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  Email.send(message, email, name).then((result) => {
    res.sendStatus(301);
  }, function(error) {
    console.log(error);
  });
}
