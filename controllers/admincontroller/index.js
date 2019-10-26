const {AdminService} = require("../../services");

class AdminController {

  async login(req, res) {
    try {
      const payload = req.body;
      const authToken = await AdminService.authenicate(payload);
      return res.cookie("token", authToken).status(200).json({success:true});
    } catch {
      return res.sendStatus(401);
    }
  }
}

module.exports = new AdminController();
