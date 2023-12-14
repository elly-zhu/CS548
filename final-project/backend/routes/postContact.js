import express, { response } from "express";
import { getLoggerInstance } from "../logger.js";
import { Contact } from "../models/contactModel.js";

const logger = getLoggerInstance();
export const postContact = express.Router();

/**
 * Create a new contact
 */

postContact.post("/contacts", async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.mobile) {
      return res.status(400).send({
        message: "Missing required fields: firstname, lastname, mobile",
      });
    } else {
      const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        landline: req.body.landline,
        timezone: req.body.timezone ?? "America/Los_Angeles",
        address: req.body.address,
        note: req.body.note,
      }; 

      const contact = await Contact.create(newContact);
      logger.info(`Contact with name ${req.body.firstname} is created.`);
      return res.status(201).send(contact);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
