const express = require("express");

const getUser = express.Router();
getUser.post("/getUser", (req, res) => {
  res.json(req.body);
});

module.exports = getUser;
