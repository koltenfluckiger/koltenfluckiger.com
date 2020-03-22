const mongoose = require("mongoose");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Project, SubSkill} = require("../../models");

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

  async update(payload, params) {
    try {
      const status = await Database.updateOne(Project, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, params) {
    try {
      const status = await Database.updateMany(Project, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findOne(params){
    try {
      const project = await Database.findOne(Project, params, SubSkill);
      return Promise.resolve(project);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(params) {
    try {
      const projects = await Database.findAll(Project, params);
      return Promise.resolve(projects);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(params) {
    try {
      const projects = await Database.findAllAndPopulate(Project, params, SubSkill);
      return Promise.resolve(projects);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(params) {
    try {
      const status = await Database.deleteOne(Project, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(params) {
    try {
      const status = await Database.deleteMany(Project, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

}

module.exports = new ProjectService();
