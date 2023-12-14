import express from "express";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { getLoggerInstance } from "./logger.js";
import { postContact } from "./routes/postContact.js";
import { startup } from "./routes/startup.js";
import { getContacts } from "./routes/getContacts.js";
import { updateContact } from "./routes/updateContact.js";
import { deleteContact } from "./routes/deleteContact.js";

dotenv.config();

const port = 8080;
const app = express();
const logger = getLoggerInstance();

const httpsOptions = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

const mongoUri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@myphonebook.mampot9.mongodb.net/?retryWrites=true&w=majority`;

// Middleware for parsing request body
app.use(express.json());
// Middleware for handling CORS POLICY
app.use(cors());
app.use("/", [startup, postContact, getContacts, updateContact, deleteContact]);

const server = https.createServer(httpsOptions, app);

mongoose
  .connect(mongoUri)
  .then(() => {
    logger.info(`App Connected to the Database`);
    server.listen(port, () => {
      logger.info(`Example app listening on port ${port}!`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
