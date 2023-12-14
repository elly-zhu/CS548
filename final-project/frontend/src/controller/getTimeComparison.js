import { DateTime } from "luxon";

const getTimeInfo = (destDateString, timezone) => {
  // Parse the provided date string
  const parsedDate = DateTime.fromISO(destDateString, {
    zone: timezone,
  });

  let result = "";

  // Determine whether it's morning, afternoon, evening, or midnight there
  const hour = parsedDate.hour;
  if (hour >= 5 && hour < 12) {
    result += "It's morning there";
  } else if (hour >= 12 && hour < 17) {
    result += "It's afternoon there";
  } else if (hour >= 17 && hour < 23) {
    result += "It's evening there";
  } else {
    result += "It's midnight there";
  }

  // Get the current local time
  const currentLocalTime = DateTime.local();

  const daysDifference = parsedDate.day - currentLocalTime.day;
  // Compare the parsed date with the current local time
  if (daysDifference < 0) {
    result += `, and the date is in the past by ${daysDifference} day`;
  } else if (daysDifference > 0) {
    result += `, and the date is in the future by ${daysDifference} day`;
  } else {
    result += ", and the date is the same as the current local time.";
  }

  return result;
};

export default getTimeInfo;
