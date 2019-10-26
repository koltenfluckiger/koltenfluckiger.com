const Express = require("express");
const Router = Express.Router();
const CookieParser = require("cookie-parser");
const BodyParser = require("body-parser");

const {AuthMiddleware, FileMiddleware} = require("../../middlewares");
const {ProjectsController} = require("../../controllers");
Router.use(CookieParser());

Router.post("/", AuthMiddleware.checkAuth, FileMiddleware.upload.fields([{ name: 'icon'}, { name: 'mediaFiles'}]), ProjectsController.create);
Router.put("/", AuthMiddleware.checkAuth,ProjectsController.editByQuery);
Router.delete("/", AuthMiddleware.checkAuth,ProjectsController.removeByQuery);

Router.get("/", ProjectsController.getByQuery);

module.exports = Router;
