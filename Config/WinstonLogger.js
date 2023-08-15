const { createLogger, transports, format } = require("winston");

const logFormat = format.printf(
    ({ label, level, timestamp, meta, message }) => {
        const req = meta ? meta.req.url : "";
        return `${label || "request"} ${level} ${timestamp} ${req} ${message}`;
    }
);

const routeLogger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            filename: "log/all.log",
        }),
        new transports.File({
            level: "warn",
            filename: "log/warning.log",
        }),
        new transports.File({
            level: "error",
            filename: "log/error.log",
        }),
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint(),
        logFormat
    ),
});

const errorLogger = createLogger({
    transports: [
        new transports.File({
            level: "error",
            filename: "log/internalerror.log",
        }),
    ],
    format: format.combine(
        format.label({ label: "[LOGGER]" }),
        format.json(),
        format.timestamp(),
        logFormat
    ),
});

module.exports.routeLoger = routeLogger;
module.exports.internalErrorLoger = errorLogger;
