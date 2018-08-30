var path = require("path");

module.exports = function(app) {
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
};
