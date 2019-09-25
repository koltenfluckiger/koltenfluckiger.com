const mongoose = require('mongoose');
const crypto = require('crypto');

class Admin {

  constructor(database) {
    this.database = database;
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

  getConnection() {
    return mongoose.admin_conn;
  }

  disconnectConnection() {
    mongoose.admin_conn.close();
  }

  setup() {
    mongoose.admin_conn = mongoose.createConnection('mongodb://localhost:27017/' + this.database, this.options);
    const adminSchema = new mongoose.Schema({_id: Number, username: String, password: String, secretKey: String})
    this.model = mongoose.admin_conn.model('users', adminSchema);
  }

  hash(password) {
    return crypto.createHash('sha1').update(password).digest('base64');
  }

  authenicate(username, password, secretKey) {
    return new Promise((resolve, reject) => {
      this.model.findOne({username: username}).then(user => {
        if (user.password === this.hash(password)) {
          resolve();
        }
      }).catch(error => {
        reject(error);
      })
    })
  }
}

module.exports = Admin;
