import winston, { format, transports } from "winston";
import { DateTime } from "luxon";

// const loggerLevel = ["info", "debug", "error", "warn"]

let alignColorsAndTime = winston.format.combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.label({
    label: "[LOGGER]",
  }),
  winston.format.timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  winston.format.printf(
    (info) => ` ${info.label} ${info.timestamp} ${info.level}: ${info.message}`
  )
);

export const getLoggerInstance = () => {
  const logger = winston.createLogger({
    level: "info",
    defaultMeta: { service: "sfbu_course-service" },
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          format((info) => {
            info.level = info.level.toUpperCase();
            return info;
          })(),
          winston.format.colorize(),
          alignColorsAndTime
        ),
      }),
    ],
  });

  return logger;
};
