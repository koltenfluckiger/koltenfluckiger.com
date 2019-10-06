const mongoose = require("mongoose");

mongoose.skills_conn = mongoose.createConnection("mongodb://localhost:27017/skills", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const parentSkillSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  childSkills: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.skills_conn.model("parentModel", parentSkillSchema);
