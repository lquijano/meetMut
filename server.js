// Dependencies requirements
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var bcrypt = require("bcryptjs");
var router = express.Router();
var path = require("path");

app.use(express.static("public"));

var PORT = 8080;

// set the view engine to ejs
app.set("view engine", "ejs");
// use res.render to load up an ejs view file

//Routes testing
// app.get("/", function(req, res) {
//   res.send("<h1>Welcome to the route path</h1>");
// });

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "meetMutt_db"
});

app.post("/sigin", function(req, res) {
  connection.query(
    "INSERT INTO users (username, password_hash) VALUES(?, ?)",
    [req.body.username, req.body.password_hash],
    function(err, response) {
      res.redirect("/contact");
    }
  );
});

app.get("/", function(req, res) {
  res.render("pages/login");
});

app.get("/questionnaire", function(req, res) {
  res.render("pages/questionnaire");
});

app.get("/results", function(req, res) {
  res.render("pages/results");
});

app.get("/meet", function(req, res) {
  res.render("pages/meet");
});

app.get("/contact", function(req, res) {
  res.render("pages/contact");
});

// Listener, starting our server
app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
