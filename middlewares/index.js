const AsyncMiddleware = require("./asyncmiddleware");
const AuthMiddleware = require("./authmiddleware");
const FileMiddleware = require("./filemiddleware");

module.exports = {
  AuthMiddleware,
  AsyncMiddleware,
  FileMiddleware
};
