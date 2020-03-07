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

  async updateOne(Model, payload, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }) {
    try {

      await Model.updateOne(query.filter, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  async updateMany(Model, payload, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }) {
    try {
      await Model.updateMany(query.filter, payload);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findOne(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }, PopulateModel = undefined) {
    try {
      const model = await Model.findOne(query.filter, returned_fields).populate({path: populate.field, model: PopulateModel}).sort(sort);
      return Promise.resolve(model);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findOneAndPopulate(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }, PopulateModel = undefined) {
    try {
      const model = await Model.findOne(query.filter, returned_fields).populate({path: populate.field, model: PopulateModel}).sort(sort);
      return Promise.resolve(model);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findAll(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }) {
    try {
      const models = await Model.find(query.filter, returned_fields).sort(sort);
      return Promise.resolve(models);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }, PopulateModel = undefined) {
    try {
      const models = await Model.find(query.filter, returned_fields).populate({path: populate.field, model: PopulateModel}).sort(sort);
      return Promise.resolve(models);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteOne(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }) {
    try {
      await Model.deleteOne(query.filter);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deleteMany(Model, {
    populate = {
      field: ""
    },
    query = {
      filter: {}
    },
    sort = {},
    returned_fields = {}
  }) {
    try {
      await Model.deleteMany(query.filter);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

module.exports = new Database();
