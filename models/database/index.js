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

      const filter = JSON.parse(queryParams.filter);

      await Model.updateOne(filter, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async updateMany(Model, payload, queryParams) {
    try {

      const filter = JSON.parse(queryParams.filter);

      await Model.updateMany(filter, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findOne(Model, queryParams) {
    try {
      const params = JSON.parse(queryParams);
      const filter = params.filter;
      const field = params.field
        ? params.field
        : "";
      const model = await Model.findOne(filter).populate(field);

      return Promise.resolve(model);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findAll(Model, queryParams) {
    try {
      const filter = JSON.parse(queryParams.filter);
      const field = queryParams.field
        ? queryParams.field
        : "";
      const models = await Model.find(filter);

      return Promise.resolve(models);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(Model, queryParams) {
    try {

      const filter = JSON.parse(queryParams.filter);
      const field = queryParams.field
        ? queryParams.field
        : "";
      const models = await Model.find(filter).populate(field);

      return Promise.resolve(models);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteOne(Model, queryParams) {
    try {

      const filter = JSON.parse(queryParams.filter);

      await Model.deleteOne(filter);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteMany(Model, queryParams) {
    try {

      const filter = JSON.parse(queryParams.filter);

      await Model.deleteMany(filter);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = new Database();
