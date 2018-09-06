$("#loginSubmitButton").on("click", function(event) {
  event.preventDefault();
  window.location.href = "http://localhost:8080/home";

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
