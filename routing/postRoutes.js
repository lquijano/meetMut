var path = require("path");

module.exports = function(app) {
  app.post("/sigin", function(req, res) {
    connection.query(
      "INSERT INTO users (username, password_hash) VALUES(?, ?)",
      [req.body.username, req.body.password_hash],
      function(err, response) {
        res.redirect("/contact");
      }
    );
  });
};
