// LOAD DATA
// we are linking our routes to a series of data sources
var animals = require("../data/animals.js");

//ROUTING
module.exports = function(app) {
  app.get("/api/animals", function(req, res){
    //pull the user score off the req.body / save to variable
    var newPet={
      link:"",
      petname:""
    }

    //  query * from the pet table
    // then compare user score to database min/max in an if or switch statement
    // when the right fit is found, assign values from db to the newPet object
    res.json(newPet)
  
  });
};
