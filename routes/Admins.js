const express = require("express");
const admin = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Admin = require("../models/admin");
admin.use(cors());

process.env.SECRET_KEY = "secret";

//login

admin.post("/auth", (req, res) => {
  Admin.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(admin => {
      if (bcrypt.compareSync(req.body.password, admin.password)) {
        let token = jwt.sign(admin.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.json({ token: token });
      } else {
        res.send("user does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

admin.get("/profile", (req, res) => {
  var decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Admin.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(admin => {
      if (admin) {
        res.json(admin);
      } else {
        res.send("User does not exist");
      }
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = admin;
