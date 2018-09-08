var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "meetMutt_db"
});

connection.connect(function(error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
