const mongoose = require("mongoose");

mongoose.project_conn = mongoose.createConnection("mongodb://localhost:27017/projects", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const projectSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  date: String,
  skill: [mongoose.Schema.Types.ObjectId],
  sourceCodeLink: String,
  hostedLink: String,
  hostedStatus: Boolean,
  searchTags: [String],
  images: {
    iconURL: String,
    screenshotURLS: [String]
  }
});

module.exports = mongoose.project_conn.model("model", projectSchema);
