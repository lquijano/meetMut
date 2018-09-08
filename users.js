//Requiring packages we're using

var mysql = require("mysql");
var bcrypt = require("bcryptjs");

// define the schema for our user model
// !!! is this correctly pointing to our DB?
var userSchema = MySQL.schema({
  local: {
    fullname: String,
    username: String,
    email: String,
    password: String
  // },
  // facebook: {
  //   id: String,
  //   token: String,
  //   name: String,
  //   email: String
  // }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = MySQL.model("User", userSchema);
