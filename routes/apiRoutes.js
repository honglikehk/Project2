var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/tableOrder", function(req, res) {
    db.TableOrder.findAll({}).then(function(dbExamples) {
      res.json(dbTableOrder);
    });
  });

  // Create a new example
  app.post("/api/tableOrder", function(req, res) {
    //console.log("hello");
    res.json(obj);
    //db.Example.create(req.body).then(function(dbExample) {
    //  res.json(dbExample);
    //});
  });

  app.get("/api/auth", function(req, res) {
    console.log(req.body);
    res.status(200).json("hello");
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
