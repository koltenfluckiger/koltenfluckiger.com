const Express = require("express");
const Router = Express.Router();
const BodyParser = require("body-parser");
const CookieParser = require("cookie-parser");
const {AuthMiddleware} = require("../../middlewares");
const {AdminController} = require("../../controllers");

// ADMIN MIDDLEWARES

Router.use(BodyParser.json());
Router.use(CookieParser());
Router.use("/dashboard*", AuthMiddleware.checkAuth);

// ADMIN ROUTES

Router.post("/login", AdminController.login);

module.exports = Router;
