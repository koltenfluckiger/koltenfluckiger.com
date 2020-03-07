const {AdminService} = require("../../services");
const logger = require("node-logger").createLogger("/tmp/development.log");

class AdminController {

  async login(req, res) {
    try {
      const payload = req.body;
      console.log(payload)
      const authToken = await AdminService.authenicate(payload);
      return res.cookie("token", authToken).status(200).json({success:true});
    } catch(err) {
      console.log(err);
      return res.sendStatus(401);
    }
  }
}

module.exports = new AdminController();
