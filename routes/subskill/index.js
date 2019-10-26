const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {SubSkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, SubSkillController.create);
Router.put("/", AuthMiddleware.checkAuth, SubSkillController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth, SubSkillController.removeByQuery);

Router.get("/", SubSkillController.getByQuery);

module.exports = Router;
