import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
import * as dotenv from "dotenv";
import * as express from "express";
import * as http from "http";

import { roomRouter } from './room/roomRouter';
import { errorHandler } from './errors/errorHandler';

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.configureRoutes();
        this.app.use(errorHandler);
    }

    public static async bootstrap(port = 3000) {
        new Server().app.listen(port);
    }

    private configureRoutes() {
        this.app.use('/room', roomRouter);
    }

}
