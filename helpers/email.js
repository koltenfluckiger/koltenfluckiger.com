const emailjs = require('emailjs');
const config = require('../config.js');

var logger = require('node-logger').createLogger('/tmp/development.log');

class Email {

  constructor() {
    this.server = emailjs.server.connect({user: config['SendGrid']['user'], password: config['SendGrid']['password'], host: config['SendGrid']['server'], ssl: true});;
  }

  send(emailMessage, from, name) {
    console.log(emailMessage, from, name);
    return new Promise((resolve, reject) => {
      this.server.send({
        text: emailMessage,
        from: from,
        cc: from,
        to: 'koltenfluckiger@gmail.com',
        subject: 'Portfolio Contact Email'
      }, function(err, message) {
        logger.info(err, message)
        reject(Error(err, message));
      })
      logger.info('Message was sent succesfully');
      resolve('Success');
    });
  };

}

module.exports = Email;
