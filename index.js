require('dotenv').config();

const Express = require("express");
const App = Express();
const Path = require("path");
const Routes = require("./routes");
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const XSS = require("xss-clean");
const MongoSanitize = require("express-mongo-sanitize");
const Helment = require("helmet");
const {AuthMiddleware} = require("./middlewares");
const env = process.env.NODE_ENV;

global.appRoot = Path.resolve(__dirname);

App.use(BodyParser.json());
App.use(CookieParser());
App.use("/", AuthMiddleware.checkAuth, Routes);
App.use(MongoSanitize());
App.use(XSS());
App.use(Helment());

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
App.listen(3001, "localhost");
