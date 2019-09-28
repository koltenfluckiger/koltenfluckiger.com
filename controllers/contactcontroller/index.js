const emailjs = require('emailjs');
const config = require('../../config.js');

var logger = require('node-logger').createLogger('/tmp/development.log');

class ContactController {

  constructor() {
    this.server = emailjs.server.connect({user: config.SendGrid.user, password: config.SendGrid.password, host: config.SendGrid.server, ssl: true});
  }

  sendEmail(req, res) {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    this.server.send({
      text: emailMessage,
      from: from,
      cc: from,
      to: 'koltenfluckiger@gmail.com',
      subject: 'Portfolio Contact Email'
    }, function(err, message) {
      res.sendStatusStatus(400);
    })
    res.sendStatusStatus(200);
  }
}

module.exports = ContactController;
