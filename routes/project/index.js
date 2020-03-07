const Express = require("express");
const Router = Express.Router();
const CookieParser = require("cookie-parser");
const BodyParser = require("body-parser");
const JSONMiddleware = require("express-json-object-middleware");
const {AuthMiddleware, FileMiddleware} = require("../../middlewares");
const {ProjectsController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, FileMiddleware.upload.fields([
  {
    name: 'icon'
  }, {
    name: 'mediaFiles'
  }
]), ProjectsController.create);

Router.put("/edit", AuthMiddleware.checkAuth, FileMiddleware.upload.fields([
  {
    name: 'icon'
  }, {
    name: 'mediaFiles'
  }
]), JSONMiddleware.parse, ProjectsController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, ProjectsController.removeByQuery);
Router.get("/:id", JSONMiddleware.parse, ProjectsController.getOneByQuery);
Router.get("/", JSONMiddleware.parse, ProjectsController.getByQuery);

module.exports = Router;
