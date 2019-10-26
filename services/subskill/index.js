const mongoose = require("mongoose");
const logger = require('node-logger').createLogger('/tmp/development.log');

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

  async update(payload, queryParams) {
    try {
      const status = await Database.updateOne(SubSkill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, queryParams) {
    try {
      const status = await Database.updateMany(SubSkill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async find(queryParams) {
    try {
      const skills = await Database.findOne(SubSkill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(queryParams) {
    try {
      const skills = await Database.findAll(SubSkill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(queryParams) {
    try {
      const status = await Database.deleteOne(SubSkill, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(queryParams) {
    try {
      const status = await Database.deleteMany(SubSkill, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }
}

module.exports = new SubSkillService();
