var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // the admin page
  app.get("/auth/login", (req, res) => {
    res.render("admin", {
      title: "Admin Login Page"
    });
  });

  // login
  app.post("/auth/login", (req, res) => {
    console.log(req.body);
    console.log(req.body.username);

    //TODO: check within the db with the credentails if they match

    res.status(200).json({ data: "Hello World" });
    // res.render("admin", {
    //   title: "Admin Login Page"
    // });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
