const mongoose = require("mongoose");

mongoose.admin_conn = mongoose.createConnection("mongodb://localhost:27017/admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const adminSchema = new mongoose.Schema({_id: Number, username: String, password: String, secretKey: String});

module.exports = mongoose.admin_conn.model("users", adminSchema);
