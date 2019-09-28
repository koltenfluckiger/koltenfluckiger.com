const Express = require('express');
const Router = Express.Router();
const BodyParser = require('body-parser');
const CookieParser = require('cookie-parser');
const AsyncMiddleware = require('../../middlewares');
const AuthMiddleware = require('../../middlewares');
const AdminController = new(require('../../controllers/admincontroller'))();

Router.use(BodyParser.json());
Router.use(CookieParser());

// ADMIN ROUTES

Router.post('/login', AdminController.login);
Router.use('/dashboard', AuthMiddleware);
Router.use('/dashboard/*', AuthMiddleware);

module.exports = Router;
