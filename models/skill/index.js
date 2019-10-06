const mongoose = require("mongoose");

mongoose.skills_conn = mongoose.createConnection("mongodb://localhost:27017/skills", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const skillSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  parentSkill: mongoose.Schema.Types.ObjectId,
  title: String,
});

module.exports = mongoose.skills_conn.model("childModel", skillSchema);
