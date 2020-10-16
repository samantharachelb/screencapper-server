const logger = require('@utils/log');

export default function shitPant(reason = '', exitCode = 1) {
    logger.error("Something unexpectedly occurred and I have shit my pants as a result.")
    if (reason) {
        logger.error(reason)
    }

    process.exit(exitCode);
}
