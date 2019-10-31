const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config.js");
const logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Admin} = require("../../models");

class AdminService {

  async compare(data) {
    try {
      const passwordValid = await bcrypt.compare(data.inputPassword, data.hashedUserPassword);
      const secretKeyValid = await bcrypt.compare(data.inputSecretKey, data.hashedUserSecretKey);

      if(passwordValid && secretKeyValid){
        return Promise.resolve();
      }
      else{
        return Promise.reject();
      }
    } catch {
      return Promise.reject();
    }
  }

  async authenicate(payload) {
    try {
      const filter = JSON.stringify({filter: {username: payload.username}});
      const user = await Database.findOne(Admin, filter);
      const passwordMatch = await bcrypt.compare(payload.password, user.password);
      const secretKeyMatch = await bcrypt.compare(payload.secretKey, user.secretKey);

      if (passwordMatch &&  secretKeyMatch){
        const token = await jwt.sign({
          username: payload.username
        }, config.secret, {expiresIn: "24h"});
        return Promise.resolve(token);
      }
      else {
        return Promise.reject();
      }
    } catch(err) {
      return Promise.reject();
    }
  }
}

module.exports = new AdminService();
