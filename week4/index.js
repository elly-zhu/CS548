// this is a https web-server
const startUp = require("./routes/startup");
const alive = require("./routes/alive");
const getDeivce = require("./routes/get-device");
const getUser = require("./routes/get-user");
const express = require("express");
const https = require("https");
const port = 8080;
app = express();

const fs = require("fs");
const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
const server = https.createServer(httpsOptions, app);

app.use(express.json());
app.use("/", [startUp, alive, getDeivce, getUser]);

app.get("/get-ip", (req, res) => {
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  res.send({ userIp });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
