const admin = new(require("../../models/admin"))("admin");
admin.setup();

class AdminController {

  async login(req, res) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const secretKey = req.body.secretKey;

      const authToken = await admin.authenicate(username, password, secretKey);
      return res.cookie("token", authToken).status(200).json({success:true});
    } catch {
      return res.sendStatus(401);
    }
  }
}

module.exports = AdminController;
