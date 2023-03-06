const express = require("express");
const router = express.Router();
const path = require("path");
const globalPath = require("../utils/path");
router.get("/users", (req, res) => {
  res.sendFile(path.join(globalPath, "views", "users.html"));
});

module.exports = router;
