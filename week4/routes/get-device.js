const express = require("express");

const getDevice = express.Router();

getDevice.get("/get-device", (req, res) => {
  const userAgent = req.header("User-Agent");
  let isWindows = false;
  let isMac = false;
  let isLinux = false;
  let postmanRunTime = false;
  // if the device is windows, send a flag: isWindows = true
  // if the device is mac, send a flag: isMac = true
  if (userAgent.indexOf("Windows") != -1) {
    isWindows = true;
  } else if (userAgent.indexOf("Mac") != -1) {
    isMac = true;
  } else if (userAgent.indexOf("Linux") != -1) {
    isLinux = true;
  } else if (userAgent.indexOf("PostmanRuntime") != -1) {
    postmanRunTime = true;
  }
  res.send({ userAgent, isWindows, isMac, isLinux, postmanRunTime });
});

module.exports = getDevice;
