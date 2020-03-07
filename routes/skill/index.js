const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const JSONMiddleware = require("express-json-object-middleware");
const {AuthMiddleware} = require("../../middlewares");
const {SkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, SkillController.create);
Router.put("/edit", AuthMiddleware.checkAuth,  JSONMiddleware.parse, SkillController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth,  JSONMiddleware.parse, SkillController.removeByQuery);

Router.get("/:id", JSONMiddleware.parse, SkillController.getOneByQuery);
Router.get("/", JSONMiddleware.parse, SkillController.getByQuery);

module.exports = Router;
