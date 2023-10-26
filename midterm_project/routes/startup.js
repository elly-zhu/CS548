import express from "express";
import { getLoggerInstance } from "../logger.js";

const logger = getLoggerInstance();

export const startUp = express.Router();

startUp.get("/", (req, res) => {
  logger.info("User visit /");
  res.status(200).send("OK");
});
