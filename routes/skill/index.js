const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {SkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, SkillController.new);
Router.put("/:id", AuthMiddleware.checkAuth, SkillController.editById);
Router.delete("/:id", AuthMiddleware.checkAuth, SkillController.removeById);

Router.get("/", AuthMiddleware.checkAuth, SkillController.getAll);
Router.get("/:id", AuthMiddleware.checkAuth, SkillController.getById);

module.exports = Router;
