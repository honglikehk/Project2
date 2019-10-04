let $exampleEmail = $("#exampleInputEmail1");
let $examplePassword = $("#exampleInputPassword1");
let $submitBtn = $("#submit");
let $exampleCheck = $("#exampleCheck1");

$submitBtn.on("click", function() {
  var adminLogin = {
    email: $exampleEmail.val().trim(),
    password: $examplePassword.val().trim(),
    saved: $exampleCheck.val()
  };

  if (!(adminLogin.email && adminLogin.password)) {
    alert("You must enter an email and password");
    return;
  }
  //   console.log(API);
  //   API.saveExample(adminLogin).then(function() {
  //     refreshExamples();
  //   });

  //   $(exampleEmail).val("");
  //   $("exampleInputPassword1").val("");
});
