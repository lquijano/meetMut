var path = require("path");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("pages/index");
  });

  // show the login form

  app.get("/login", function (req, res) {
    res.render("pages/login");
  });

  app.get("/registration", function (req, res) {
    res.render("pages/registration");
  });


  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('profile.ejs', {
      user: req.user
    });
  });

  app.get("/questionnaire", function (req, res) {
    res.render("pages/questionnaire");
  });

  app.get("/results", function (req, res) {
    res.render("pages/results");
  });

  app.get("/meet", function (req, res) {
    res.render("pages/meet");
  });

  app.get("/contact", function (req, res) {
    res.render("pages/contact");
  });

  // LOGOUT
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
      return next()
    };

    // if they aren't redirect them to the home page
    res.redirect('/');
  }};
