const mongoose = require("mongoose");

mongoose.skills_conn = mongoose.createConnection("mongodb://localhost:27017/skills", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const skillSchema = new mongoose.Schema({
  title: String,
  subSkills: [{type: mongoose.Schema.Types.ObjectId, ref: 'submodel'}],
  abbreviation: String,
  searchTags: [String]
});

const subSkillSchema = new mongoose.Schema({
  title: String,
  searchTags: [String]
});

const Skill = mongoose.skills_conn.model("model", skillSchema);
const SubSkill = mongoose.skills_conn.model("submodel", subSkillSchema);

module.exports = {
  Skill,
  SubSkill
}
