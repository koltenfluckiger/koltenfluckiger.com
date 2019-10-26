const Path = require("path");
const logger = require('node-logger').createLogger('/tmp/development.log');

const {ProjectService, FileService, DataParserService} = require('../../services');

class ProjectsController {

  async create(req, res) {
    const dataParserService = new DataParserService();
    const payload = await dataParserService.parseProject(req.body, req.files);
    try {
      await ProjectService.create(payload);
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(404);
    }
  }

  async editByQuery(req, res) {

    const query = req.query;
    const payload = req.body;

    try {
      await ProjectService.update(payload, query);
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(404).json(err);
    }
  }

  async removeByQuery(req, res) {
    try {

      const query = req.query;
      const project = await ProjectService.find(query);
      const projectName = project.title.replace(/[(^\s$)]/g, "");

      await ProjectService.delete(query);
      await FileService.removeProjectDirectory(projectName);

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async getByQuery(req, res) {
    try {

      const query = req.query;
      const projects = await ProjectService.findAll(query);

      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new ProjectsController();
