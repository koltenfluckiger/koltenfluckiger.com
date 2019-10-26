const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {SkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, SkillController.create);
Router.put("/", AuthMiddleware.checkAuth,SkillController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth,SkillController.removeByQuery);

Router.get("/", SkillController.getByQuery);

module.exports = Router;
