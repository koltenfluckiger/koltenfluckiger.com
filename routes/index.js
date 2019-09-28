const Express = require('express');
const Router = Express.Router();

const ContactRouter = require('./contact');
const AdminRouter = require('./admin');

Router.use('/admin', AdminRouter);
Router.use('/contact', ContactRouter);

module.exports = Router;
