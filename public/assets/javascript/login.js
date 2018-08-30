$(".submit").on("click", function(event) {
  event.preventDefault();

  // Here we grab the form elements
  var newUser = {
    userame: $("#username")
      .val()
      .trim(),
    phoneNumber: $("#password_hash")
      .val()
      .trim()
  };

  console.log(newUser);
});
