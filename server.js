// Dependencies requirements
var express = require("express");
var bodyParser = require("body-parser");
var router = express.Router();
var mysql = require("mysql");
var bcrypt = require("bcryptjs");

//session stuff
var cookieParser = require("cookie-parser");

var session = require("express-session");

//allow sessions
app.use(
  session({ secret: "app", cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } })
);

app.use(cookieParser());

// Express configuration
var app = express();
var PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

//Routes testing
// app.get("/", function(req, res) {
//   res.send("<h1>Welcome to the route path</h1>");
// });

app.get('/', function(req, res) {
	res.render('pages/index');
});

// Listener, starting our server
app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
