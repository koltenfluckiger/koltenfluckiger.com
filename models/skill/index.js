const mongoose = require("mongoose");

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const ip = process.env.DB_IP;

const {MongooseSequencerModule, MongooseFinderModule} = require("../../modules");

mongoose.skills_conn = mongoose.createConnection("mongodb://" + username + ":" + password + "@"+ ip + ":27017/skills?authSource=admin", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
  });

const skillSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  subSkills: [
    {
      type: Number,
      ref: 'submodel'
    }
  ],
  abbreviation: String
}, { _id: false });
const subSkillSchema = new mongoose.Schema({_id: Number, title: String, searchTags: [String]}, { _id: false ,upsert:true});

const mongooseSkillSequencer = new MongooseSequencerModule(mongoose.skills_conn, {id: "model"});
const mongooseSubSkillSequencer = new MongooseSequencerModule(mongoose.skills_conn, {id: "submodel"});

const skillSequencerPlugin = mongooseSkillSequencer.defaultPlugin;
const subSkillSequencerPlugin = mongooseSubSkillSequencer.defaultPlugin;
const finderPlugin = new MongooseFinderModule().defaultPlugin;

skillSchema.plugin(skillSequencerPlugin, finderPlugin);
subSkillSchema.plugin(subSkillSequencerPlugin, finderPlugin);

const Skill = mongoose.skills_conn.model("model", skillSchema);
const SubSkill = mongoose.skills_conn.model("submodel", subSkillSchema);

module.exports = {
  Skill,
  SubSkill
}
