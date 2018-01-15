import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as path from "path";
import * as dotenv from "dotenv";
import * as express from "express";
import * as http from "http";

import { roomRouter } from './room/roomRouter';

export class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public static async bootstrap(port = 3000) {
        new Server().app.listen(port);
    }
    
    private config() {        
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes() {
        this.app.use('/room', roomRouter);
    }

}
