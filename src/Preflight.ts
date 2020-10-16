const winston = require('winston');
const {transports, format} = winston;
const logger = require('@utils/log');
import {PreflightCheckError, UsingWindowsError} from "@utils/ErrorHandling";
import path from 'path';
import fs from 'fs';

export abstract class Preflight {
    static logDir = path.join(process.cwd(), "logs/");
    static logFile = path.join(Preflight.logDir, "screencapper.log");
    static oldLogFile = path.join(Preflight.logDir, "screencapper.log.last");

    static logCheck(): void {
        logger.info("Checking for any old log files");
        if (fs.existsSync(this.logDir)) {
            try {
                if (fs.existsSync(this.logFile)) {
                    logger.info("Found old log files. Moving them now...");
                    fs.unlink(this.oldLogFile, error => {
                        if (error && error.code !== 'ENOENT') {
                            throw new PreflightCheckError(error.toString());
                        }
                    });
                    fs.renameSync(this.logFile, this.oldLogFile);
                }
            } catch (error) {
                throw new PreflightCheckError(error.toString());
            }
        } else {
            try {
                fs.mkdirSync(this.logDir)
            } catch (error) {
                throw new PreflightCheckError(error.toString());
            }
        }

        const logFileTransport = new transports.File({
            filename: this.logFile,
            level: 'debug'
        })

        logger.add(logFileTransport);
    }

    static checkOS() {
        logger.info("Checking Host OS...")
        const platform = process.platform
        if (platform === "win32") {
            throw new UsingWindowsError('Windows is a pile of adware disguised as an OS and will not be supported now or ever.');
        }
    }

    static run() {
        this.logCheck();
        this.checkOS()
    }
}
