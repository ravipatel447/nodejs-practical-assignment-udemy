const express = require("express");
const userRoutes = express.Router();

const users = [];

userRoutes.get("/users", (req, res) => {
  res.render("user", {
    users,
  });
});

userRoutes.post("/users", (req, res) => {
  console.log(req.body);
  users.push({ username: req.body.username });
  res.redirect("/users");
});
module.exports = { userRoutes, users };
