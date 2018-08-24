// Dependencies requirements
var express = require ("express");
var bodyParser = require ("body-parser");

// Express configuration
var app = express();
var PORT = 8080;



// Parse Application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes testing
app.get("/", function(req, res) {
  res.send("<h1>Welcome to the route path</h1>");
});



























// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// require("/../app/routing/apiRoutes")(app);
// require("/../app/routing/htmlRoutes")(app);


// Listener, starting our server
app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
