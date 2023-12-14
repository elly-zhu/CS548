import express from "express";
import { getLoggerInstance } from "../logger.js";
import { Contact } from "../models/contactModel.js";

const logger = getLoggerInstance();
export const updateContact = express.Router();

/**
 * Update an Contact record by id
 */

updateContact.put("/contacts/:id", async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.lastname || !req.body.mobile) {
      return res.status(400).send({
        message: "Missing required fields: firstname, lastname, mobile",
      });
    } else {
      const { id } = req.params;
      const result = await Contact.findByIdAndUpdate(id, req.body);
      if (!result) {
        return res.status(404).json({ message: "Contact not found" });
      }
      logger.info(`Contact with id ${id} is updated.`);
      return res.status(200).send({ message: "Contact updated successfuly" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
