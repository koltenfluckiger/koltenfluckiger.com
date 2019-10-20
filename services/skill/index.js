const mongoose = require("mongoose");
const {Database} = require("../../models");
const {Skill} = require("../../models");
const logger = require('node-logger').createLogger('/tmp/development.log');

class SkillService {

  async createSkill(payload) {

    try {
      const skill = new Skill(payload);
      const status = await Database.create(skill);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateSkill(payload, queryParams) {
    try {
      const status = await Database.updateOne(Skill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async updateSkills(payload,queryParams) {
    try {
      const status = await Database.updateMany(Skill, payload, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findSkill(queryParams) {
    try {
      const skill = await Database.findOne(Skill, queryParams);
      return Promise.resolve(skill);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async findSkills(queryParams) {
    try {
      const skills = await Database.findAll(Skill, queryParams);
      return Promise.resolve(skills);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }

  async deleteSkill(queryParams) {
    try {
      const status = await Database.deleteOne(Skill, queryParams);
      return Promise.resolve(status);
    } catch (err) {
      logger.info(err);
      return Promise.reject(err);
    }
  }
}

module.exports = new SkillService();
