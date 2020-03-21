const Express = require("express");
const Router = Express.Router();
const AuthRouter = require("./auth");
const ContactRouter = require("./contact");
const ProjectRouter = require("./project");
const SkillRouter = require("./skill");
const SubSkillRouter = require("./subskill");

Router.use("/auth", AuthRouter);
Router.use("/contact", ContactRouter);
Router.use("/projects", ProjectRouter);
Router.use("/skills", SkillRouter);
Router.use("/subskills", SubSkillRouter);

module.exports = Router;
