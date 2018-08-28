// Dependencies requirements
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var bcrypt = require("bcryptjs");
// Express configuration
//initializing sessions
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();
var router = express.Router();

app.use(express.static("public"));
//allow sessions
// app.use(
//   session({ secret: "app", cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } })
// );
//
// app.use(cookieParser());

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

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({ secret: "app", cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } })
);

app.get("/login/:email/:password", function(req, res) {
  res.render("pages/login");
});

app.get("/questionnaire", function(req, res) {
  res.render("pages/questionnaire");
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
