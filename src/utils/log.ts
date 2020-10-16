const moment = require('moment');
const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, printf, colorize } = format;


function getLogLevel() {
    if (process.env.NODE_ENV === 'prod') {
        return "info";
    }
    return "debug";
}

const logger = createLogger({
    format: combine(
        format((info: Record<string, string>) => {
            info.level = info.level.toUpperCase();
            return info;
        })(),
        printf((info: Record<string, string>) => {
            return `${moment().format('YYYY-MM-DD THH:mm:ss.SSSZZ')} [${info.level}`
        })
    ),
    transports: [
        new transports.Console({
            level: getLogLevel(),
            format: combine(
                format((info: Record<string, string>) => {
                    info.level = info.level.toUpperCase();
                    return info;
                })(),
                colorize(),
                printf((info: Record<string, string>) => {
                    return `${moment().format('YYYY-MM-DD THH:mm:ss.SSSZZ')} [${info.level}]: ${info.message}`;
                })
            )
        })
    ],
    exitOnError: true
})

module.exports = logger;

