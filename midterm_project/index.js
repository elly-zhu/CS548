// this is a https web-server

// ngrok http https://localhost:8080

import { startUp } from "./routes/startup.js";
import { orderManagement } from "./routes/orderManagement.js";

import { getLoggerInstance } from "./logger.js";
import express from "express";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const port = 8080;
const app = express();

const logger = getLoggerInstance();

const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};
const server = https.createServer(httpsOptions, app);

app.use(express.json());
app.use("/", [startUp, orderManagement]);

server.listen(port, () => {
  logger.info(`Example app listening on port ${port}!`);
});
