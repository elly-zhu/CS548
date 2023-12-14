import mongoose, { Schema } from "mongoose";

const ContactSchema = Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    landline: {
      type: String,
      required: false,
    },
    timezone: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", ContactSchema);
