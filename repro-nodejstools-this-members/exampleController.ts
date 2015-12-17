import express = require("express");

export class ExampleController {
    exampleProperty: string;

    constructor(propVal: string) {
        this.exampleProperty = propVal;
    }

    action = (req: express.Request, res: express.Response) => {
        res.json({ "value": this.exampleProperty });
    }
}
