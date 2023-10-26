import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getFedexInfoByTrackingNumber = async (trackingNumber) => {
  const apiKey = process.env.FEDEX_API_KEY;
  const secretKey = process.env.FEDEX_SECRET_KEY;
  const fedexEndpoint = process.env.TEST_URL;
  const fedexAuthEndpoint = process.env.AUTH_URL;

  const auth = await axios.post(
    fedexAuthEndpoint,
    new URLSearchParams({
      grant_type: "client_credentials", //gave the values directly for testing
      client_id: apiKey,
      client_secret: secretKey,
    })
  );
  const {
    data: { access_token },
  } = auth;

  if (!access_token) {
    throw Error("Authorization Error");
  }

  const axiosConfig = {
    headers: {
      "x-customer-transaction-id": uuidv4(),
      "x-locale": "en_US",
      Authorization: `Bearer ${access_token}`,
    },
  };

  const payload = {
    trackingInfo: [
      {
        trackingNumberInfo: {
          trackingNumber: trackingNumber,
        },
      },
    ],
    includeDetailedScans: true,
  };

  const trackingInfo = await axios.post(
    fedexEndpoint + "/track/v1/trackingnumbers",
    payload,
    axiosConfig
  );

  return trackingInfo.data;
};

export const getTrackingNumberByOrderNumber = (orders, targetOrderNumber) => {
  const res = orders.find((order) => order.orderNumber === targetOrderNumber);
  if (res) {
    return res.trackingNumber;
  } else {
    return null;
  }
};
