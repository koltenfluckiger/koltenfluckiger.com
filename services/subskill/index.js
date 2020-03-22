const mongoose = require("mongoose");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, SubSkill} = require("../../models");

class SubSkillService {

  async create(payload) {

    try {
      const skill = new SubSkill(payload);
      const status = await Database.create(skill);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async update(payload, params) {
    try {
      const status = await Database.updateOne(SubSkill, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, params) {
    try {
      const status = await Database.updateMany(SubSkill, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findOne(params) {
    try {
      const project = await Database.findOne(SubSkill, params);
      return Promise.resolve(project);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(params) {
    try {
      const skills = await Database.findAll(SubSkill, params);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(params) {
    try {
      const status = await Database.deleteOne(SubSkill, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(params) {
    try {
      const status = await Database.deleteMany(SubSkill, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }
}

module.exports = new SubSkillService();
