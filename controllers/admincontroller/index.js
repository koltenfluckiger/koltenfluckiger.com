const {AdminService} = require("../../services");

class AdminController {

  async login(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const secretKey = req.body.secretKey;

      const authToken = await AdminService.authenicate({username: username, password: password, secretKey: secretKey});
      return res.cookie("token", authToken).status(200).json({success:true});
    } catch {
      return res.sendStatus(401);
    }
  }
}

module.exports = new AdminController();
