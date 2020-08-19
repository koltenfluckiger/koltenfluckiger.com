const mongoose = require("mongoose");
const logger = require('node-logger').createLogger('/tmp/development.log');

const {Database, Skill, SubSkill} = require("../../models");

class SkillService {

  async create(payload) {
    try {
      console.log(payload);
      const skill = new Skill(payload);
      const status = await Database.create(skill);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async update(payload, params) {
    try {
      const status = await Database.updateOne(Skill, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateMany(payload, params) {
    try {
      const status = await Database.updateMany(Skill, payload, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findOne(params) {

    try {
      const project = await Database.findOne(Skill, params, SubSkill);
      return Promise.resolve(project);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAll(params) {
    try {
      const skills = await Database.findAll(Skill, params);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findAllAndPopulate(params) {
    try {
      const skills = await Database.findAllAndPopulate(Skill, params, SubSkill);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async delete(params) {
    try {
      const status = await Database.deleteOne(Skill, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteMany(params) {
    try {
      const status = await Database.deleteMany(Skill, params);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

}

module.exports = new SkillService();
