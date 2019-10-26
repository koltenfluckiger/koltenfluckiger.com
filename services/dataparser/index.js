const SkillService = require('../skill');
const DatabaseService = require('../database');
const SubSkillService = require('../subskill');

class DataParserService {

  async parseProject(body, files) {
    try {
      const databaseService = new DatabaseService(SkillService);
      const payload = body;
      const path = Path.join("/images/", payload.title.replace(/[(^\s$)]/g, "") + "/");
      const date = new Date();
      var currentDate = date.toDateString();

      payload.date = currentDate.replace(/(^.{0,4})/, "");
      payload.screenshotURLS = [];
      payload.skills = await databaseService.findIDs(payload.skills, {filter: "title"});
      payload.hostedStatus = payload.hostedStatus === "yes"
        ? true
        : false;
      payload.iconURL = files.icon[0]
        ? path + files.icon[0].originalname
        : "";

      files.mediaFiles
        ? files.mediaFiles.map(media => payload.screenshotURLS.push(path + media.originalname))
        : "";
      return Promise.resolve(payload);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async parseSkill(body) {
    const databaseService = new DatabaseService(SubSkillService);
    const payload = body;
    try {
      payload.subSkills = await databaseService.findIDs(payload.subSkills, {filter: "title"});
      return Promise.resolve(payload);
    } catch (err) {
      return Promise.reject(err);
    }
  }

}

module.exports = DataParserService;
