const mongoose = require("mongoose");
const logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Skill} = require("../../models");

class SkillService {

  async create(payload) {
    try {
      const skill = new Skill(payload);
      const status = await Database.create(skill);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async update(payload, queryParams) {
    try {
      const status = await Database.updateOne(Skill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, queryParams) {
    try {
      const status = await Database.updateMany(Skill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async find(queryParams) {
    try {
      const skills = await Database.findOne(Skill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(queryParams) {
    try {
      const skills = await Database.findAll(Skill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(queryParams) {
    try {
      const skills = await Database.findAllAndPopulate(Skill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(queryParams) {
    try {
      const status = await Database.deleteOne(Skill, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(queryParams) {
    try {
      const status = await Database.deleteMany(Skill, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

}

module.exports = new SkillService();
