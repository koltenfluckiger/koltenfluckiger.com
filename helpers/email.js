const email = require('emailjs');
const config = require('../config.js');

const server = email.server.connect({user: config['SendGrid']['user'], password: config['SendGrid']['password'], host: config['SendGrid']['server'], ssl: true})

send = function(emailMessage, from, name) {
  return new Promise((resolve, reject) => {
    server.send({
      text: emailMessage,
      from: from,
      cc: from,
      to: "koltenfluckiger@gmail.com",
      subject: "Portfolio Contact Email"
    }, function(err, message) {
      reject(Error(err, message));
    })
    resolve('Success');
  })
};

module.exports.send = send;
