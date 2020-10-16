import { app } from '@src/app';
import {Preflight} from "@src/Preflight";
const logger = require('@utils/log');

export abstract class Main {

    static start() {
        Preflight.run();
        let server = app.listen(3000, () => {
            logger.info(`ScreenCapper is now listening on port: 3000`);
        });
    }

}

Main.start();
