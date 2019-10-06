const mongoose = require("mongoose");

class Database {

  async create(Model) {
    try {
      await Model.save();
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async updateOne(Model, payload, queryParams) {
    try {
      await Model.updateOne(queryParams, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async updateMany(Model, payload, queryParams) {
    try {
      await Model.updateMany(queryParams, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findOne(Model, queryParams) {
    try {
      const model = await Model.findOne(queryParams);
      return Promise.resolve(model);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findAll(Model, queryParams) {
    try {
      const models = await Model.find(queryParams);
      return Promise.resolve(models);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteOne(Model, queryParams) {
    try {
      await Model.deleteOne(queryParams);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = Database;
