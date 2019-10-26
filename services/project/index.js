const mongoose = require("mongoose");
const logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Project} = require("../../models");

class ProjectService {

  async create(payload) {

    try {
      const project = new Project(payload);
      const status = await Database.create(project);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async update(payload, queryParams) {
    try {
      const status = await Database.updateOne(Project, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, queryParams) {
    try {
      const status = await Database.updateMany(Project, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async find(queryParams) {
    try {
      const project = await Database.findOne(Project, queryParams);
      return Promise.resolve(project);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(queryParams) {
    try {
      const projects = await Database.findAll(Project, queryParams);
      return Promise.resolve(projects);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(queryParams) {
    try {
      const projects = await Database.findAllAndPopulate(Project, queryParams);
      return Promise.resolve(projects);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(queryParams) {
    try {
      const status = await Database.deleteOne(Project, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(queryParams) {
    try {
      const status = await Database.deleteMany(Project, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

}

module.exports = new ProjectService();
