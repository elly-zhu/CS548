import axios from "axios";

/****
 * World Time API
 * https://worldtimeapi.org/pages/examples
 */
const getWorldTimeByTimezone = async (timezone) => {
  try {
    const response = await axios.get(
      `http://worldtimeapi.org/api/timezone/${timezone}`
    );

    if (response.status === 200) {
      return response.data.datetime;
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    // Handle errors, log them, or throw further if needed
    console.error("Error fetching world time:", error.message);
    throw error; // You can choose to handle the error or rethrow it
  }
};

export default getWorldTimeByTimezone;
