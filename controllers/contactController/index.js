const emailjs = require('emailjs');
const config = require('../../config.js');

var logger = require('node-logger').createLogger('/tmp/development.log');

class ContactController {

  constructor() {
    this.server = emailjs.server.connect({user: config['SendGrid']['user'], password: config['SendGrid']['password'], host: config['SendGrid']['server'], ssl: true});
  }

  send(emailMessage, from, name) {
    return new Promise((resolve, reject) => {
      this.server.send({
        text: emailMessage,
        from: from,
        cc: from,
        to: 'koltenfluckiger@gmail.com',
        subject: 'Portfolio Contact Email'
      }, function(err, message) {
        logger.info(err, message);
        reject(Error(err, message));
      })
      logger.info('Successfully sent email');
      resolve();
    })
  }

  send_email = (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    this.send(message, email, name).then((result) => {
      res.sendStatus(200);
    }).catch(error => {
      logger.info(error);
      res.sendStatus(400);
    })
  }
}

module.exports = ContactController;
