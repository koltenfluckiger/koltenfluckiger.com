require('dotenv').config();
require("./globals");

const env = process.env.NODE_ENV;

const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const Helment = require("helmet");
const JSONMiddleware = require("express-json-object-middleware")
const MongoSanitize = require("express-mongo-sanitize");
const Path = require("path");
const Routes = require("./routes");
const XSS = require("xss-clean");
const Cors = require("cors");

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended:false }));
App.use(CookieParser());
App.use(MongoSanitize());
App.use(XSS());
App.use(Helment());

App.use("/", JSONMiddleware.parse, Routes);

if (env === "production") {
  global.projectPath = Path.join(global.appRoot, "react-koltenfluckiger.com", "build/");
  App.use(Express.static(global.projectPath));
  App.get("/*", (req, res) => {
    return res.sendFile(global.projectPath + "/index.html");
  });
} else {
  global.projectPath = Path.join(global.appRoot, "react-koltenfluckiger.com", "public/");
};

// START SERVER
App.listen(3001, "0.0.0.0");
