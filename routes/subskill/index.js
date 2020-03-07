const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const JSONMiddleware = require("express-json-object-middleware");
const {AuthMiddleware} = require("../../middlewares");
const {SubSkillController} = require("../../controllers");

Router.use(BodyParser.json());
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.create);
Router.put("/edit", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth, JSONMiddleware.parse, SubSkillController.removeByQuery);

Router.get("/:id", JSONMiddleware.parse, SubSkillController.getOneByQuery);
Router.get("/", JSONMiddleware.parse, SubSkillController.getByQuery);

module.exports = Router;
