const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const JWT_SECRET = process.env.JWT_SECRET;
const {Database, Admin} = require("../../models");

class AuthService {

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
      const user = await Database.findOne(Admin, {query: {filter: {username: payload.username}}});
      const passwordMatch = await bcrypt.compare(payload.password, user.password);
      const secretKeyMatch = await bcrypt.compare(payload.secretKey, user.secretKey);

      if (passwordMatch && secretKeyMatch){
        const token = await jwt.sign({
          username: payload.username
        }, JWT_SECRET, {expiresIn: "168h"});
        return Promise.resolve(token);
      }
      else {
        return Promise.reject();
      }
    } catch(err) {
      return Promise.reject(err);
    }
  }
}

module.exports = new AuthService();
