const mongoose = require("mongoose");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Emails, Views, Components} = require("../../models");

class MetricsService {

  static model = {
    components: Components,
    emails: Emails,
    views: Views
  }

  async update(payload, params) {
    try {
      const model = model[params.model];
      const status = await Database.updateOne(model, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async find(params) {
    try {
      const model = model[params.model];
      const metric = await Database.findOne(model, params);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(params) {
    try {
      const status = await Database.deleteOne(model, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }
}

module.exports = new MetricsService();
