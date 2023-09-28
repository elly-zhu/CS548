const express = require("express");

const alive = express.Router();

alive.get("/alive", (req, res) => {
  res.send("it's alive");
});

module.exports = alive;
