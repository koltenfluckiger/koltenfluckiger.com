require("dotenv").config();

const Express = require("express");
const App = Express();
const Path = require("path");
const Routes = require("./routes");
const env = process.env.NODE_ENV;

global.appRoot = Path.resolve(__dirname);

App.use("/", Routes);

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
