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
};
