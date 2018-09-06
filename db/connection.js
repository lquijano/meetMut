var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",

  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "meetMutt_db"
});

connection.connect(function(error) {
  if (!!error) {
    console.log("Error");
  } else {
    console.log("connected");
  }
});

module.exports = connection;
