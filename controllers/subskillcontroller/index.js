const {SubSkillService} = require('../../services');

class SubSkillController {

  async create(req, res) {
    const payload = req.body;
    try {
      await SubSkillService.create(payload);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async editByQuery(req, res) {
    const query = req.query;
    const payload = req.body;
    try {
      await SubSkillService.update(payload, query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async removeByQuery(req, res) {
    try {
      const query = req.query;
      await SubSkillService.delete(query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async getByQuery(req, res) {
    try {
      const query = req.query;
      const skills = await SubSkillService.findAll(query);
      return res.json(skills);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new SubSkillController();
