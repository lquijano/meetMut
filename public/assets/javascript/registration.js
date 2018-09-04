$(".submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newUser = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };

  console.log(newUser);
});
