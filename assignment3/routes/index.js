const express = require("express");
const router = express.Router();
const path = require("path");
const globalPath = require("../utils/path");
router.get("/", (req, res) => {
  res.sendFile(path.join(globalPath, "views", "index.html"));
});

module.exports = router;
