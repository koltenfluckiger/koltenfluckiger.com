const {ProjectService} = require('../../services');
const {FileService} = require('../../services');
const Path = require("path");
const logger = require('node-logger').createLogger('/tmp/development.log');

class ProjectsController {

  async new(req, res) {
    const path = Path.join("/images/", req.body.title.replace(/[(^\s$)]/g, "") + "/");
    const title = req.body.title;
    const description = req.body.description;
    const skills = req.body.skills;
    const sourceCodeLink = req.body.sourceCodeLink;
    const hostedLink = req.body.hostedLink;
    const hostedStatus = req.body.hostedStatus === "yes"
      ? true
      : false;
    const searchTags = req.body.searchTags;
    const iconURL = req.files.icon[0]
      ? path + req.files.icon[0].originalname
      : "";
    var screenshotURLS = new Array();

    req.files.mediaFiles
      ? req.files.mediaFiles.map(media => screenshotURLS.push(path + media.originalname))
      : "";

    const date = new Date();
    var currentDate = date.toDateString();
    currentDate = currentDate.replace(/(^.{0,4})/, "");

    const project = {
      _id: null,
      title: title,
      description: description,
      date: currentDate,
      skills: skills,
      sourceCodeLink: sourceCodeLink,
      skills: skills,
      hostedLink: hostedLink,
      hostedStatus: hostedStatus,
      searchTags: [searchTags],
      images: {
        iconURL: iconURL,
        screenshotURLS: screenshotURLS
      }
    }

    console.log(project);

    try {
      await ProjectService.createProject(project);
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(404);
    }
  }

  async editById(req, res) {
    const id = req.query.id;
    const payload = req.body;
    try {
      await ProjectService.update({_id: id}, payload);
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(404).json(err);
    }
  }

  async removeById(req, res) {
    try {
      const id = req.query.id;
      const project = await ProjectService.findProject({_id: id});
      const projectName = project.title.replace(/[(^\s$)]/g, "")
      await ProjectService.deleteProject({_id: id});
      await FileService.removeProjectDirectory(projectName);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }
  async getAll(req, res) {
    try {
      const projects = await ProjectService.findProjects({});
      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
  async getById(req, res) {
    try {
      const id = req.query.id;
      const project = await ProjectService.findProject({_id: id});
      return res.json(project);
    } catch(err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new ProjectsController();
