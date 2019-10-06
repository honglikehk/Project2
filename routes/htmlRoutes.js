/* eslint-disable camelcase */
var db = require("../models");

module.exports = function(app) {
  // Load index page
  // eslint-disable-next-line no-unused-vars
  app.get("/", function(req, res) {
    db.MenuItems.findAll({}).then(function(menuData) {
      console.log("xxx");
      // console.log(menuData[0].dataValues);
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

  //register
  app.get("/register", (req, res) => {
    res.render("register", {
      title: "Register Admin"
    });
  });

  app.post("/register", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      db.Admin.create(req.body).then(function(dbAdmin) {
        email: req.body.email,
        // password: hashedPassword
      });
      res.redirect("/auth");
    } catch {
      res.redirect("/register");
    }
    req.body.email;
  });

  app.post("/auth", verifyToken, (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: "Post created...",
          authData
        });
      }
    });
  });

  app.post("/api/login", (req, res) => {
    // Mock user
    const user = {
      id: 1,
      username: "brad",
      email: "brad@gmail.com"
    };

    jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
      res.json({
        token
      });
    });
  });

  // FORMAT OF TOKEN
  // Authorization: Bearer <access_token>

  // Verify Token
  function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers["authorization"];
    // Check if bearer is undefined
    if (typeof bearerHeader !== "undefined") {
      // Split at the space
      const bearer = bearerHeader.split(" ");
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  }

  app.get("/main", function(req, res) {
    console.log("yyy");
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
