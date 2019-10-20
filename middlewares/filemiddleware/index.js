const express = require('express');
const multer = require('multer');
const fs = require('fs');

class FileMiddleware {

  constructor(){
    this.storage = multer.diskStorage({
      destination: function(req, file, cb) {
        const projectName = req.body.title;
        const folderName = projectName.replace(/[(^\s$)]/g, "");
        if (!fs.existsSync(global.projectPath + "images/" + folderName)) {
          fs.mkdirSync(global.projectPath + "images/" + folderName);
        }
        cb(null, global.projectPath + folderName);
      },
      filename: function(req, file, cb) {
        cb(null, file.originalname)
      }
    })
    this.upload = multer({storage: this.storage});
  }
}

module.exports = new FileMiddleware();
