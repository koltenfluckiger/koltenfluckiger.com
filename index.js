require("dotenv").config();
require("./globals");

const Express = require("express");
const App = Express();
const Cors = require("cors");
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const Helment = require("helmet");
const MongoSanitize = require("express-mongo-sanitize");
const Path = require("path");
const Routes = require("./routes");
const XSS = require("xss-clean");

const {APIMiddleware} = require("./middlewares");

App.use(BodyParser.json());
App.use(CookieParser());
App.use("/api", APIMiddleware.verify, Routes);
App.use(MongoSanitize());
App.use(XSS());
App.use(Helment());

if (process.env.NODE_ENV === "production") {
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
