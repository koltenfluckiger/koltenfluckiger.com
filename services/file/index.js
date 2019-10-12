const fs = require("fs");

class FileService {

  async removeProjectDirectory(projectName){
    fs.rmdir("/images/" + projectName, {recursive: true});
  }

}
