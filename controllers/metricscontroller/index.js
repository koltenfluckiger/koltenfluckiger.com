const {MetricsService} = require('../../services');

class MetricsController {

  async editByQuery(req, res) {

    const query = req.query;

    try {
      await MetricsService.update(payload, query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async removeByQuery(req, res) {
    try {
      const query = req.query;
      await MetricsService.delete(query);
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.sendStatus(404);
    }
  }

  async getOneByQuery(req, res) {
    try {
      const query = req.query;
      const projects = await MetricsService.findOne(query);
      return res.json(projects);
    } catch (err) {
      console.log(err);
      return res.sendStatus(300);
    }
  }
}

module.exports = new MetricsController();
