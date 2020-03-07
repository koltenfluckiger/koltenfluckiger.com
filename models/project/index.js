const mongoose = require("mongoose");

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const ip = process.env.DB_IP;

const {MongooseSequencerModule, MongooseFinderModule} = require("../../modules");

mongoose.project_conn = mongoose.createConnection("mongodb://" + username + ":" + password + "@"+ ip + ":27017/projects?authSource=admin", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
  });

const projectSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  description: String,
  date: String,
  subSkills: [{
    type: Number,
    ref: 'submodel'
  }],
  sourceCodeLink: String,
  hostedLink: String,
  hostedStatus: Boolean,
  searchTags: [String],
  iconURL: String,
  screenshotURLS: [String]
}, { _id: false ,upsert:true});

const mongooseProjectSequencer = new MongooseSequencerModule(mongoose.project_conn, {id: "model"});
const finderPlugin = new MongooseFinderModule().defaultPlugin;
const projectSequencerPlugin = mongooseProjectSequencer.defaultPlugin;

projectSchema.plugin(projectSequencerPlugin, finderPlugin);

module.exports = mongoose.project_conn.model("model", projectSchema);
