const admin = new(require('../../models/admin'))('admin');
admin.setup();

class AdminController {

  authenicate(username, password, secretKey) {
    return new Promise((resolve, reject) => {
      admin.authenicate(username, password, secretKey).then(result => {
        resolve();
      }).catch(error => {
        console.log(error);
        reject(error);
      })
    })
  }

  auth = (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const secretKey = req.body.secretKey;

    this.authenicate(username, password, secretKey).then(() => {
      res.sendStatus(301);
    }).catch(error => {
      res.send(error);
    })
  }
}

module.exports = AdminController;
