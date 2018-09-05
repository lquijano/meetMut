// LOAD DATA
// we are linking our routes to a series of data sources
// var animals = require("../data/animals.js");

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

  //this is for figuring out the path for results

  app.post("/api/animals", function(req, res){
    // var userScore
    console.log(req.body);

    //query the database - animals - get all the info about the pets and the ranges that are associated with each.  They we will select *  - then iterate over the response and get the res.min and res.max and compare to the userScore.  If else statement to find the match.  Then create a new object once you have the correct pet - res.json to frontend to display all of the pet info.

    res.send("IT WORKED!");
  });


};
