const Path = require("path");
const Logger = require('node-logger').createLogger('/tmp/development.log');

const {ProjectService, FileService, DataParserService} = require('../../services');

class ProjectsController {

  async create(req, res) {

    try {
      const dataParserService = new DataParserService();
      const payload = await dataParserService.parseProject(req.body, req.files);
      await ProjectService.create(payload);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async editByQuery(req, res) {

    try {
      const query = req.query;
      const dataParserService = new DataParserService();
      const payload = await dataParserService.parseProject(req.body, req.files);
      await ProjectService.update(payload, query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.status(401).json(err);
    }
  }

  async removeByQuery(req, res) {
    try {

      const query = req.query;
      const project = await ProjectService.findOne(query);
      const projectName = project.title.replace(/[(^\s$)]/g, "");

      await ProjectService.delete(query);
      await FileService.removeProjectDirectory(projectName);

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }
  async getOneByQuery(req, res) {
    try {
      const query = req.query;
      const projects = await ProjectService.findOne(query);
      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }

  async getByQuery(req, res) {
    try {
	  console.log(req.query);
      const query = req.query;
      const projects = await ProjectService.findAllAndPopulate(query);
	  console.log(projects);
      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new ProjectsController();
