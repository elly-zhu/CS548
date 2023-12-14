import express from "express";
import { getLoggerInstance } from "../logger.js";
import { Contact } from "../models/contactModel.js";

const logger = getLoggerInstance();
export const deleteContact = express.Router();

/**
 * Delete an Contact record by id
 */

deleteContact.delete("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Contact not found" });
    }
    logger.info(`Contact with id ${id} is deleted.`);
    return res.status(200).send({ message: "Contact deleted successfuly" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
