const Express = require("express");
const Router = Express.Router();

const ContactRouter = require("./contact");
const AdminRouter = require("./admin");
const ProjectRouter = require("./project");
const SkillRouter = require("./project");

Router.use("/admin", AdminRouter);
Router.use("/contact", ContactRouter);
Router.use("/projects", ProjectRouter);
Router.use("/skills", SkillRouter);

module.exports = Router;
