const Express = require("express");
const Path = require("path");
const App = Express();

global.appRoot = Path.resolve(__dirname);
const projectPath = Path.join(global.appRoot, "react-koltenfluckiger.com", "build");

const Routes = require("./routes");

App.use("/", Routes);

App.use(Express.static(projectPath));

App.get("/*", (req, res) => {
  return res.sendFile(projectPath + "/index.html");
});

// START SERVER
App.listen(3001);
