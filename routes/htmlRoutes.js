/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  // eslint-disable-next-line no-unused-vars
  app.get("/", function(req, res) {
    db.MenuItems.findAll({}).then(function(menuData) {
      res.render("index", {
        title: "Starters",
        msg: "Welcome!",
        name: "Whateverr Bunnny",
        menuData
      });
    });
  });

  // login
  app.get("/auth", function(req, res) {
    res.render("admin", {
      title: "Admin Login Page"
    });
  });

  app.get("/main", function(req, res) {
    db.MenuItems.findAll({}).then(function(menuData) {
      res.render("main", {
        title: "Mains",
        msg: "Welcome!",
        name: "Whateverr Bunnny",
        menuData
      });
    });
  });

  app.get("/dessert", function(req, res) {
    db.MenuItems.findAll({}).then(function(menuData) {
      res.render("dessert", {
        title: "Desserts",
        msg: "Welcome!",
        name: "Whateverr Bunnny",
        menuData
      });
    });
  });

  app.get("/drink", function(req, res) {
    db.MenuItems.findAll({}).then(function(menuData) {
      res.render("drink", {
        title: "Drinks",
        msg: "Welcome!",
        name: "Whateverr Bunnny",
        menuData
      });
    });
  });

  //let currentURL = window.location.origin;
  app.post("/main", function (req, res) {
   // console.log("aaaaaaaaaaa");
    let menuData = req.body;
    let itemName = menuData.itemName;
    //let itemPrice = menuData.itemPrice;
    console.log(itemName);
    //console.log(itemPrice);
  
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
