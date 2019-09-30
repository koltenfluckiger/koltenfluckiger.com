const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config.js");

class Admin {

  constructor(databaseName) {
    this.databaseName = databaseName;
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

  setup() {
    mongoose.admin_conn = mongoose.createConnection("mongodb://localhost:27017/" + this.databaseName, this.options);
    const adminSchema = new mongoose.Schema({_id: Number, username: String, password: String, secretKey: String})
    this.model = mongoose.admin_conn.model("users", adminSchema);
  }

  async compare(password, hashPassword, secretKey, hashSecretKey) {
    try {
      const passwordValid = await bcrypt.compare(password, hashPassword);
      const secretKeyValid = await bcrypt.compare(secretKey, hashSecretKey);

      if (passwordValid && secretKeyValid) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    } catch  {
      return Promise.reject();
    }
  }

  async authenicate(username, password, secretKey) {
    try {
      const user = await this.model.findOne({username: username});
      const validCreds = await this.compare(password, user.password, secretKey, user.secretKey);
      const token = await jwt.sign({
        username: username
      }, config.secret, {expiresIn: "24h"});
      return Promise.resolve(token);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = Admin;
