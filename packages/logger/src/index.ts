import { getWinstonTransport } from "@hyperdx/node-opentelemetry/build/src/logger";
import winston from "winston";

const timezoned = () => {
  return new Date().toLocaleString("zh-CN", {
    timeZone: "Asia/Shanghai",
  });
};

export const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
});

logger.add(getWinstonTransport("debug"));

const logFormat = winston.format.printf((info: any) => {
  const { level, message, timestamp, ...meta } = info;
  const metaString =
    meta && Object.keys(meta).length > 0 ? JSON.stringify(meta, null, 2) : "";

  return `${timestamp} [${level}]: ${message} ${metaString}`;
});

logger.add(
  new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({ format: timezoned }),
      winston.format.prettyPrint(),
      winston.format.colorize(),
      logFormat,
    ),
  }),
);
