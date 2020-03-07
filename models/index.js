const {Skill, SubSkill} = require("./skill");
const {Views, Emails, Components} = require("./metrics");
const Admin = require("./admin");
const Database = require('./database');
const Project = require("./project");

module.exports = {
  Admin,
  Components,
  Database,
  Emails,
  Project,
  Skill,
  SubSkill,
  Views
}
