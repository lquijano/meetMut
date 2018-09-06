var path = require("path");
var connection = require("../db/connection");
var express = require("express");

var router = express.router;
module.exports = function(app, passport) {
  app.get("/", function(req, res) {
    res.render("pages/index");
  });

  // show the login form

  app.get("/login", function(req, res) {
    res.render("pages/login");
  });

  app.get("/home", function(req, res) {
    res.render("pages/index");
  });

  app.get("/registration", function(req, res) {
    res.render("pages/registration");
  });

  app.get("/registration", function(req, res, next) {
    res.sendfile("pages/registration");
  });

  // app.post("/myaction", function(req, res, next) {
  //   // res.json(req.body);
  //   connection.query(
  //     "INSERT INTO users (fullname, username, email, password) VALUES(?, ?)",
  //     [req.body],
  //     function(err, response) {
  //       res.redirect("/contact");
  //     }
  //   );
  // });

  app.post("/myaction", function(req, res) {
    console.log(req.body);

    // console.log(connection);

    connection.query(
      "INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, ?)",
      [req.body.fullname, req.body.username, req.body.email, req.body.password],
      function(err, response) {
        if (err) console.log(err);
        console.log("test");
        res.redirect("/contact");
      }
    );
  });

  // CREATE TABLE users(
  // 	id INT NOT NULL AUTO_INCREMENT,
  // 	fullname VARCHAR (45) NOT NULL,
  // 	username VARCHAR (45) NOT NULL UNIQUE,
  // 	email VARCHAR (45) NOT NULL UNIQUE,
  // 	password VARCHAR (45) NOT NULL,
  // 	PRIMARY KEY (id)
  // );

  app.get("/resetPassword", function(req, res) {
    res.render("pages/resetPassword");
  });

  app.get("/profile", isLoggedIn, function(req, res) {
    res.render("profile.ejs", {
      user: req.user
    });
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

  // LOGOUT

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // route middleware to make sure a user is logged in
  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on

    if (req.isAuthenticated()) {
      return next();
    }

    // if they aren't redirect them to the home page
    res.redirect("/");
  }
};
