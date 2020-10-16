import shitPant from "@utils/shitPant";

export class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Validation Error';
        shitPant(message);
    }
}

export class PreflightCheckError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Preflight Check Error';
        shitPant(message);
    }
}

export class UsingWindowsError extends Error {
    constructor(message = '') {
        super(message);
        this.name = 'Using a shit OS Error';
        shitPant(message);
    }
}



