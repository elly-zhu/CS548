import express from "express";
import * as order_db from "../db/demo.json" assert { type: "json" };
import { getLoggerInstance } from "../logger.js";
import {
  getFedexInfoByTrackingNumber,
  getTrackingNumberByOrderNumber,
} from "../controller/getTrackingNumber.js";

const logger = getLoggerInstance();
export const orderManagement = express.Router();
const { default: orders } = order_db;

orderManagement.get("/order/:orderNumber?", async (req, res) => {
  const orderNumber = req.params.orderNumber;
  logger.info(`User visit /order/${orderNumber}`);

  try {
    if (orderNumber) {
      const trackingNumber = await getTrackingNumberByOrderNumber(
        orders,
        orderNumber
      );
      if (trackingNumber) {
        logger.info(`Tracking Number Found: ${trackingNumber}`);
        const fedexInfo = await getFedexInfoByTrackingNumber(trackingNumber);
        if (fedexInfo) {
          logger.info("FedEx returns the tracking info");
        }
        res.send({ fedexInfo });
      } else {
        logger.info(`Tracking Number Not Found for order: ${orderNumber}`);
        res.send("Tracking Number Not Found");
      }

      return trackingNumber;
    } else {
      logger.error(`No orderNumber provided`);
      res.send({ error: "No order number provided" });
    }
  } catch (err) {
    console.error(err);
    res.send({ error: err });
  }
});
