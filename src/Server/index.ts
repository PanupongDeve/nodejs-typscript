import * as express from 'express';

import ServerInterface from '../interfaces/ServerInterface';
import Controller from '../Controller';
import GlobalMiddleware from '../GlobalMiddleware';
import { MongooseHelper } from '../Services/Mongoose';
import {
    ServerConfig
} from '../config';

export class Server implements ServerInterface {
    private port = ServerConfig.port;
    private app = express();

    private applyDatabase() {
        const mongooseHelper = new MongooseHelper();
        mongooseHelper.connect();
    }

    private applyMiddleware() {
        const globalMiddleware = new GlobalMiddleware(this.app);
        globalMiddleware.apply();
    }

    private applyController() {
        const controller = new Controller(this.app);
        controller.apply();
    }

    runServer() {
        this.applyDatabase();
        this.applyMiddleware();
        this.applyController();
        this.app.listen(
            this.port,
            null,
            null,
            (): void => {
                try {
                    console.log(`server is listening on ${this.port}`);
                } catch (error) {
                    console.log(error);
                }
            },
        );
    }
}
