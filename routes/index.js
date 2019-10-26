const Express = require("express");
const Router = Express.Router();

const ContactRouter = require("./contact");
const AdminRouter = require("./admin");
const ProjectRouter = require("./project");
const SkillRouter = require("./skill");
const SubSkillRouter = require("./subskill");

Router.use("/admin", AdminRouter);
Router.use("/contact", ContactRouter);
Router.use("/projects", ProjectRouter);
Router.use("/skills", SkillRouter);
Router.use("/subskills", SubSkillRouter);

module.exports = Router;
