const mongoose = require("mongoose");

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
const ip = process.env.DB_IP;

const options = {
  user: username,
  pass: password,
  authSource: "admin",
  dbName: "metrics",
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const metricsConnection = mongoose.createConnection("mongodb://" + ip + ":27017", options);

const viewsSchema = new mongoose.Schema({
  amount: Number
}, {upsert: true});
const emailsSchema = new mongoose.Schema({
  amount: Number
}, {upsert: true});
const componentsSchema = new mongoose.Schema({
  amount: Number
}, {upsert: true});

const Views = metricsConnection.model("views", viewsSchema);
const Emails = metricsConnection.model("emails", emailsSchema);
const Components = metricsConnection.model("components", componentsSchema);

module.exports = {
  Views,
  Emails,
  Components
};
