const {SkillService} = require('../../services');

class SkillController {

  async new(req, res) {
    const title = req.body.title;
    const subSkills = req.body.subSkills;
    const abbreviation = req.body.abbreviation;
    const searchTags = req.body.searchTags;

    const payload = {
      _id: null,
      title: title,
      subSkills: subSkills,
      abbreviation: abbreviation,
      searchTags: searchTags
    };

    try {
      await SkillService.createSkill(payload);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async editById(req, res) {
    const id = req.query.id;
    const title = req.body.title;
    const subskills = req.body.subskills;
    const abbreviation = req.body.abbreviation;
    const searchTags = req.body.searchTags;

    const payload = {
      title: title,
      subskills: subskills,
      abbreviation: abbreviation,
      searchTags: searchTags
    };

    try {
      await SkillService.createSkill(payload);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

async removeById(req, res) {
  try {
    const id = req.query.id;
    await SkillService.deleteSkill({_id: id});
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
  }
}

  async getAll(req, res) {
    try {
      const skills = await SkillService.findSkills({});
      return res.json(skills);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }

  async getById(req, res) {
    try {
      const id = req.query.id;
      const skill = await SkillService.findProject({_id: id});
      return res.json(skill);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new SkillController();
