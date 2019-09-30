const mongoose = require("mongoose");

class Database {

  constructor(database, options) {
    this.options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    this.database = database;
    this.mongoose = mongoose;
  }

  getConnection() {
    switch (this.database) {
      case "admin":
        return mongoose.admin_conn;
        break;
      case "framework":
        return mongoose.framework_conn;
        break;
      case "project":
        return mongoose.project_conn;
        break;
      default:
        console.log("this.database name did not match");
        break;
    }
  }

  setup() {
    switch (this.database) {
      case "admin":
        mongoose.admin_conn = mongoose.createConnection("mongodb://localhost:27017/" + this.database, this.options);
        break;
      case "framework":
        mongoose.framework_conn = mongoose.createConnection("mongodb://localhost:27017/" + this.database, this.options);
        break;
      case "project":
        mongoose.project_conn = mongoose.createConnection("mongodb://localhost:27017/" + this.database, this.options);
        break;
      default:
        console.log("this.database name did not match");
        break;
    }
  }

  disconnect() {
    switch (this.database) {
      case "admin":
        mongoose.admin_conn.close();
        break;
      case "framework":
        mongoose.framework_conn.close();
        break;
      case "project":
        mongoose.project_conn.close();
        break;
      default:
        console.log("Database name did not match");
        break;
    }
  }
}
module.exports = database;
