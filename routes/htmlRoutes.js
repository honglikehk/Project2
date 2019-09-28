var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    //db.Menu.findAll({}).then(function(dbMenu) {
    res.render("index", {
      title: "Starters",
      msg: "Welcome!",
      name: "Whateverr Bunnny"
      //menu: dbMenu
    });
  });
  //});
  app.get("/mains", function(req, res) {
    //db.Menu.findAll({}).then(function(dbMenu) {
    res.render("mains", {
      title: "Main Course",
      msg: "Welcome!",
      name: "Whateverr Bunnny"
      //menu: dbMenu
    });
  });

  app.get("/desserts", function(req, res) {
    //db.Menu.findAll({}).then(function(dbMenu) {
    res.render("desserts", {
      title: "Desserts",
      msg: "Welcome!",
      name: "Whateverr Bunnny"
      //menu: dbMenu
    });
  });

  app.get("/drinks", function(req, res) {
    //db.Menu.findAll({}).then(function(dbMenu) {
    res.render("drinks", {
      title: "Drinks",
      msg: "Welcome!",
      name: "Whateverr Bunnny"
      //menu: dbMenu
    });
  });

  app.post("/desserts", function(req, res) {
    db.Table.create({
      name: req.body.dish_name,
      price: req.body.dish_price
    })
      .then(function(dbMenu) {
        res.joson(dbMenu);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
