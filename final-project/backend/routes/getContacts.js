import express from "express";
import { getLoggerInstance } from "../logger.js";
import { Contact } from "../models/contactModel.js";

const logger = getLoggerInstance();
export const getContacts = express.Router();

/**
 * Get all contacts
 */

getContacts.get("/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    logger.info(`All Contacts retrieved.`);
    return res.status(200).json({ count: contacts.length, data: contacts });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

/**
 * Get all contacts partially matched with the provided name
 */
getContacts.get("/contacts/search/:name", async (req, res) => {
  try {
    const { name } = req.params;

    // Find contacts that have either first name or last name partially match with the name param
    const contacts = await Contact.find({
      $or: [
        { firstname: { $regex: name, $options: "i" } },
        { lastname: { $regex: name, $options: "i" } },
      ],
    });

    return res.status(200).json({ count: contacts.length, data: contacts });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

/**
 * Get a single contact by ID
 */
getContacts.get("/contacts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find a single contact by ID
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    logger.info(`Contact with id ${id} is retrieved.`);
    return res.status(200).json({ data: contact });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default getContacts;
