const express = require("express");

const startUp = express.Router();

startUp.get("/", (req, res) => {
  res.send("Hello World!");
});

startUp.get("/shovom/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(id);
});

startUp.post("/sfbu", (req, res) => {
  const studentName = req.body.studentName;
  console.log(`received post ${studentName}`);
  res.send("ok");
});

startUp.post("/startup", (req, res) => {
  res.send("it's startup");
});

module.exports = startUp;
