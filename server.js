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

// Parse Application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes testing
// app.get("/", function(req, res) {
//   res.send("<h1>Welcome to the route path</h1>");
// });

// // set the view engine to ejs
// app.set('view engine', 'ejs');
//
// // use res.render to load up an ejs view file
//
// index page
// app.get('/', function(req, res) {
// 	res.render('app/public/pages/index');
// });
//
// // about page
// app.get('/about', function(req, res) {
// 	res.render('pages/aboutMeetMutt');
// });
//
//
// // questionnaire page
// app.get('/browse', function(req, res) {
// 	res.render('pages/animalsApi');
// });
//
// app.get('pages/questionnaire', function(req, resp) {
//   res.render('pages/questionnaire');
//
// });
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// tbd if needed - talk to seif
// require("/../app/routing/apiRoutes")(app);
// require("/../app/routing/htmlRoutes")(app);

// Listener, starting our server
app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
