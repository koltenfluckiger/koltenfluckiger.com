const {ProjectService} = require('../../services');

const logger = require('node-logger').createLogger('/tmp/development.log');

class ProjectsController {

  async new(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const skills = req.body.skills;
    const sourceCodeLink = req.body.sourceCodeLink;
    const hostedLink = req.body.hostedLink;
    const hostedStatus = true;
    // req.body.hostedStatus;
    const searchTags = req.body.searchTags;
    const iconURL = (
      req.files.icon[0]
      ? ""
      : req.files.icon[0].path);
    var screenshotURLS = new Array();

    req.files.mediaFiles
      ? req.files.mediaFiles.map(media => screenshotURLS.push(media.path))
      : "";

    const project = {
      title: title,
      description: description,
      date: Date.now(),
      skills: skills,
      sourceCodeLink: sourceCodeLink,
      hostedLink: hostedLink,
      hostedStatus: hostedStatus,
      searchTags: [searchTags],
      images: {
        iconURL: iconURL,
        screenshotURLS: screenshotURLS
      }
    }

    try {
      await ProjectService.createProject(project);
    } catch(err) {
      console.log(err);
    }

  }
  async editById(req, res) {}
  async removeById(req, res) {}
  async getAll(req, res) {}
  async getById(req, res) {}
}

module.exports = new ProjectsController();
