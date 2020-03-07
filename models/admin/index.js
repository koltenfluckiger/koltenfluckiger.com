const mongoose = require("mongoose");

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const ip = process.env.DB_IP;

const {MongooseFinderModule} = require("../../modules");

mongoose.admin_conn = mongoose.createConnection("mongodb://" + username + ":" + password + "@" + ip + ":27017/users?authSource=admin", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
  });

const adminSchema = new mongoose.Schema({username: String, password: String, secretKey: String});
const adminFinderPlugin = new MongooseFinderModule().defaultPlugin;

adminSchema.plugin(adminFinderPlugin)

module.exports = mongoose.admin_conn.model("admins", adminSchema);
