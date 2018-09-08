// // This is where I manage interactions with my DATABASE - the users table of my DATABASE
// models work as middle man between user table and server
// ORM object relationship managing - object is the row in our databases

//

// var connection = require("connection");
//
// var user = {
//   create: function(newuser) {
//     connection.query(
//       "INSERT INTO users (fullname, username, email, password) VALUES (?, ?, ?, ?)",
//       [req.body.fullname, req.body.username, req.body.email, req.body.password],
//       function(err, response) {
//         if (err) console.log(err);
//         console.log("it worked");
//       }
//     );
//   });
//   }
// };
