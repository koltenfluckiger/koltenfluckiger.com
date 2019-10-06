const Express = require("express");
const Router = Express.Router();
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {FileMiddleware} = require("../../middlewares");
const {ProjectsController} = require("../../controllers");
Router.use(CookieParser());

Router.post("/", [AuthMiddleware.checkAuth, FileMiddleware.fields([{ name: 'icon', maxCount: 1 }, { name: 'mediaFiles'}]), ProjectsController.new]);
Router.put("/:id", [AuthMiddleware.checkAuth,ProjectsController.editById]);
Router.delete("/:id", [AuthMiddleware.checkAuth,ProjectsController.removeById]);

Router.get("/", ProjectsController.getAll);
Router.get("/:id", ProjectsController.getById);

module.exports = Router;
