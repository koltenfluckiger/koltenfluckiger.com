const fs = require("fs");

class FileService {

  async removeProjectDirectory(projectName) {
    try {
      fs.rmdirSync(global.projectPath + "images/" + projectName, {options: {recursive: true}});
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
      console.log(err);
    }
  }
  async removeProjectFile(projectName, filename){
    try {
      fs.unlinkSync(global.projectPath + "images/" + projectName + filename);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
      console.log(err);
    }
  }
}

module.exports = new FileService();
