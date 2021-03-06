// Get references to page elements
var $exampleEmail = $("#exampleInputEmail1");
var $examplePassword = $("#exampleInputPassword1");
var $submitBtn = $("#submit");
var $exampleCheck = $("#exampleCheck1");

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

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

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
    refreshExamples();
  });

  $exampleEmail.val("");
  $examplePassword.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

// admin login
