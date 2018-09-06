var path = require("path");

module.exports = function(app) {
  app.post("/sigin", function(req, res) {
    connection.query(
      "INSERT INTO users (username, password) VALUES(?, ?)",
      [req.body.username, req.body.password],
      function(err, response) {
        res.redirect("/contact");
      }
    );
  });

  // process the signup form
  app.post(
    "/signin",
    passport.authenticate("local-login", {
      successRedirect: "/questionnaire", // redirect to the secure profile section
      failureRedirect: "/login", // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );
};
