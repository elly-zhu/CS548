import express from "express";
import { getLoggerInstance } from "../logger.js";
const logger = getLoggerInstance();

export const startup = express.Router();

startup.get("/", (req, res) => {
  logger.info("User visit /");
  res.status(200).send("OK");
});
