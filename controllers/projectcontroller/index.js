const {ProjectService} = require('../../services');
const Path = require("path");
const logger = require('node-logger').createLogger('/tmp/development.log');

class ProjectsController {

  async new(req, res) {

    const path = Path.join("/images/", req.body.title + "/");
    const title = req.body.title;
    const description = req.body.description;
    const skills = req.body.skills;
    console.log(skills);
    const sourceCodeLink = req.body.sourceCodeLink;
    const frameworks = [];
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
    const currentDate = new Date(Date().getMonth(), Date().getDate(), Date().getFullYear());


    const project = {
      _id: null,
      title: title,
      description: description,
      date: currentDate,
      skills: skills,
      sourceCodeLink: sourceCodeLink,
      frameworks: frameworks,
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
      console.log(err);
    }

  }
  async editById(req, res) {}
  async removeById(req, res) {
    try {
      const id = req.query.id;
      await ProjectService.deleteProject({_id: id});
    } catch (err) {
      console.log(err);
      return res.sendStatus(200);
    }
  }
  async getAll(req, res) {
    try {
      const projects = await ProjectService.findProjects({});
      res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
  async getById(req, res) {}
}

module.exports = new ProjectsController();
