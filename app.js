const express = require("express");
const JWT = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "welcome to the API"
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  JWT.verify(req.token, "secretkey", (err, authData) => {
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
  //mock users
  const user = {
    id: 1,
    username: "brad",
    email: "brad@email.com"
  };

  JWT.sign({ user }, "secretkey", {expiresIn: '30s'} (err, token) => {
    res.json({
      token
    });
  });
});

//format of token
// authorization:bearer <access_token>

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

app.listen(5000, () => {
  console.log("server started on port 5000");
});
