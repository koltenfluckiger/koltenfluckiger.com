const mongoose = require("mongoose");
const {Database} = require("../../models");
const {Project} = require("../../models");
const logger = require('node-logger').createLogger('/tmp/development.log');

class ProjectService {

  async createProject(payload) {

    try {
      const project = new Project(payload);
      const status = await Database.create(project);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateProject(payload, queryParams) {
    try {
      const status = await Database.updateOne(Project, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateProjects(payload,queryParams) {
    try {
      const status = await Database.updateMany(Project, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findProject(queryParams) {
    try {
      const project = await Database.findOne(Project, queryParams);
      return Promise.resolve(project);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findProjects(queryParams) {
    try {
      const projects = await Database.findAll(Project, queryParams);
      return Promise.resolve(projects);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteProject(queryParams) {
    try {
      const status = await Database.deleteOne(Project, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }
}

module.exports = new ProjectService();
