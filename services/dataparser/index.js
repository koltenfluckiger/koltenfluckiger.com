const SkillService = require("../skill");
const DatabaseService = require("../database");
const SubSkillService = require("../subskill");
const Path = require("path");

class DataParserService {

    async parseProject(body, files) {
        try {
            var payload = body;
            const databaseService = new DatabaseService(SubSkillService);

            if (body.searchTags.length > 0) {
                payload.searchTags = body.searchTags.split(",");
            } else {
                payload.searchTags = [];
            }

            if (body.subSkills.length > 0) {
                const subSkills = await databaseService.findIDs(body.subSkills.split(","));
                payload.subSkills = subSkills.ids;
                for (const searchTag of subSkills.searchTags) {
                    for (const tag of searchTag) {
                        payload.searchTags.push(tag);
                    }
                }
            } else {
                payload.subSkills = [];
            }
            const date = new Date();
            const path = Path.join("/images/", payload.title.replace(/[(^\s$)]/g, "") + "/");
            const currentDate = date.toDateString().replace(/(^.{0,4})/, "");

            payload.date = currentDate;
            payload.screenshotURLS = [];

            payload.hostedStatus = payload.hostedStatus === "yes"
                ? true
                : false;
            payload.iconURL = files.icon
                ? path + files.icon[0].originalname.replace(/[(^\s$)]/g, "")
                : "";
            payload.mediaFiles = files.mediaFiles
                ? files.mediaFiles.map(media => payload.screenshotURLS.push(path + media.originalname.replace(/[(^\s$)]/g, "")))
                : "";

            return Promise.resolve(payload);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async parseSkill(body) {
        const databaseService = new DatabaseService(SubSkillService);
        const payload = body;
        try {
            payload.subSkills = await databaseService.findIDs(payload.subSkills);
            return Promise.resolve(payload);
        } catch (err) {
            return Promise.reject(err);
        }
    }

}

module.exports = DataParserService;
