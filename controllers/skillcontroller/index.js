const {SkillService, SubSkillService, DataParserService} = require('../../services');

class SkillController {

  async create(req, res) {

    const dataParserService = new DataParserService();
    const payload = await dataParserService.parseSkill(req.body);

    try {
      await SkillService.create(payload);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async editByQuery(req, res) {

    const dataParserService = new DataParserService();
    const payload = await dataParserService.parseSkill(req.body);
    const query = req.query;

    try {
      await SkillService.update(payload, query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async removeByQuery(req, res) {
    try {
      const query = req.query;
      await SkillService.delete(query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async getOneByQuery(req, res) {
    try {
      const query = req.query;
      const projects = await SkillService.findOne(query);
      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }

  async getByQuery(req, res) {
    try {
      const query = req.query;
      const skill = await SkillService.findAllAndPopulate(query);
      return res.json(skill);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new SkillController();
