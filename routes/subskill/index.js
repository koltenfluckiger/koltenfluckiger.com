const Express = require("express");
const Router = Express.Router();
const JSONMiddleware = require("express-json-object-middleware");
const {AuthMiddleware} = require("../../middlewares");
const {SubSkillController} = require("../../controllers");

Router.post("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.create);
Router.put("/edit", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.removeByQuery);

Router.get("/:id", JSONMiddleware.parse, SubSkillController.getOneByQuery);
Router.get("/", JSONMiddleware.parse, SubSkillController.getByQuery);

module.exports = Router;
