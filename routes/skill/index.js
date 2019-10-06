const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {SkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/frameworks", [AuthMiddleware.checkAuth, SkillController.new]);
Router.put("/frameworks/:id", [AuthMiddleware.checkAuth, SkillController.editById]);
Router.delete("/frameworks/:id", [AuthMiddleware.checkAuth, SkillController.deleteById]);

Router.get("/frameworks", [AuthMiddleware.checkAuth, SkillController.getAll]);
Router.get("/frameworks/:id", [AuthMiddleware.checkAuth, SkillController.getById]);

module.exports = Router;
