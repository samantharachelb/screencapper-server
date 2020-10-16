const logger = require('@utils/log');
const slash = require('express-trailing-slash');
const StatsD = require('hot-shots');

import express from 'express';
import limit from 'express-rate-limit';

const app = express();

const dogstatsd = new StatsD({
    errorHandler: function(error: Error) {
        logger.error(`Socket errors caught here ${error}`);
    }
})

app.use(slash());
app.use(limit({
    message: { status: 429, message: "API Rate Limit Exceeded" },
    windowMs: 60 * 1000,
    max: 100
}))
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Forwarded-For, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    logger.info(`[Client: ${req.ip}] - ${req.method}:${req.url} ${res.statusCode}`);
    dogstatsd.increment('page.views');
    next();
})

app.set('trust proxy', '127.0.0.1');
app.enable('strict routing');

export { app };
