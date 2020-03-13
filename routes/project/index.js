const Express = require("express");
const Router = Express.Router();
const JSONMiddleware = require("express-json-object-middleware");
const {AuthMiddleware, FileMiddleware} = require("../../middlewares");
const {ProjectsController} = require("../../controllers");

Router.post("/",JSONMiddleware.parse, AuthMiddleware.checkAuth, FileMiddleware.upload.fields([
  {
    name: 'icon'
  }, {
    name: 'mediaFiles'
  }
]), ProjectsController.create);

Router.put("/edit",JSONMiddleware.parse, AuthMiddleware.checkAuth, FileMiddleware.upload.fields([
  {
    name: 'icon'
  }, {
    name: 'mediaFiles'
  }
]), ProjectsController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, ProjectsController.removeByQuery);
Router.get("/:id", JSONMiddleware.parse, ProjectsController.getOneByQuery);
Router.get("/", JSONMiddleware.parse, ProjectsController.getByQuery);

module.exports = Router;
