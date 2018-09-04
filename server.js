// Dependencies requirements
var express = require("express");
var app = express();
var mysql = require("mysql");
var passport = require("passport");
var flash = require("connect-flash");

var morgan = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");

var bcrypt = require("bcryptjs");
var router = express.Router();
var path = require("path");

app.use(express.static("public"));

var PORT = 8080;

// set up our express application
app.use(morgan("dev")); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms

// set up for ejs templating
app.set("view engine", "ejs");
// use res.render to load up an ejs view file

//Routes testing
// app.get("/", function(req, res) {
//   res.send("<h1>Welcome to the route path</h1>");
// });

// required for passport
app.use(session({ secret: "ilovecoding" })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require("./routing/htmlRoutes.js")(app, passport); // load our routes and pass in our app and fully configured passport

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",

  port: 8080,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "meetMutt_db"
});

// Listener, starting our server
app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
