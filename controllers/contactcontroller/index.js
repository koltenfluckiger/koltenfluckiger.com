const emailjs = require("emailjs");
const logger = require("node-logger").createLogger("/tmp/development.log");

const username = process.env.SENDGRID_USER;
const password = process.env.SENDGRID_PASS;
const server = process.env.SENDGRID_SERVER;
const port = process.env.SENDGRID_PORT;

class ContactController {

  constructor() {
    this.server = emailjs.server.connect({user: username, password: password, host: server, ssl: true});
  }

  sendEmail = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    this.server.send({
      text: message,
      from: email,
      cc: email,
      to: "koltenfluckiger@gmail.com",
      subject: "Portfolio Contact Email"
    }, function(err, message) {
      if (err !== null) {
        return res.sendStatus(400)
      };
      return res.status(200).json({success: true});
    })
  }
}

module.exports = new ContactController();
