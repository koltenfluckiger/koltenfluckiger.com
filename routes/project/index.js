const Express = require("express");
const Router = Express.Router();
const CookieParser = require("cookie-parser");
const BodyParser = require("body-parser");
const {AuthMiddleware} = require("../../middlewares");
const {FileMiddleware} = require("../../middlewares");
const {ProjectsController} = require("../../controllers");
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, FileMiddleware.upload.fields([{ name: 'icon'}, { name: 'mediaFiles'}]), ProjectsController.new);
Router.put("/:id", AuthMiddleware.checkAuth,ProjectsController.editById);
Router.delete("/", AuthMiddleware.checkAuth,ProjectsController.removeById);

Router.get("/", ProjectsController.getAll);
Router.get("/:id", ProjectsController.getById);

module.exports = Router;
