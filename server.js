require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
// app.use(express.static("public/images"));

// Handlebars
const hbs = exphbs({
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  helpers: {
    is: function(a, b, options) {
      // eslint-disable-next-line eqeqeq
      if (a == b) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }
  }
});
app.engine("handlebars", hbs);

app.set("view engine", "handlebars");

// Routes
//require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
