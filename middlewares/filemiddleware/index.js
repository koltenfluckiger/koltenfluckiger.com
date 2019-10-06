const express = require('express');
const multer  = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    if(!fs.existsSync(global.appRoot + "/react-koltenfluckiger.com/public/images/" + req.body.title)){
      fs.mkdirSync(global.appRoot + "/react-koltenfluckiger.com/public/images/" + req.body.title);
    }
    cb(null, global.appRoot + "/react-koltenfluckiger.com/public/images/" + req.body.title);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage });

module.exports = upload;
