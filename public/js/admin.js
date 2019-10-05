let $exampleEmail = $("#exampleInputEmail1");
let $examplePassword = $("#exampleInputPassword1");
let $submitBtn = $("#submit");
let $exampleCheck = $("#exampleCheck1");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/auth",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      type: "GET",
      url: "api/auth",
      data: { username: "ajax", password: "code" },
      contentType: "application/json; charset=utf-8",
      dataType: "xml",
      success: OnSuccessCall,
      error: OnErrorCall
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// The API object contains methods for each kind of request we'll make

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

  API.saveExample(adminLogin).then(function() {
    console.log("blah");
  });
});

