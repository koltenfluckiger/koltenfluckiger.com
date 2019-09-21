const Email = new(require('../../helpers/email'))();

var logger = require('node-logger').createLogger('/tmp/development.log');

exports.send_email = (req, res) => {

  console.log('in send_email');
  console.log(req);
  console.log(res);

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
       logger.info('Success' + result);
     }, function(error) {
       logger.info(error);
     });
     res.redirect('/contact');
   }
}
