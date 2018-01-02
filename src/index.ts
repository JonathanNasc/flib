import * as dotenv from "dotenv";
import { Server } from "./server";
import { Maria } from './persistence/maria';

let startServer = async () => {
    dotenv.config();
    await Maria.connect(process.env.DB_URI);
    let port: number = process.env.port;
    await Server.bootstrap(port);
    console.log("Flib backend running on port " + port);
}

startServer();