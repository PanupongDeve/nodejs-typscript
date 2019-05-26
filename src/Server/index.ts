import * as express from 'express';

import ServerInterface from '../interfaces/ServerInterface';
import Controller from '../Controller';
import GlobalMiddleware from '../GlobalMiddleware';

export class Server implements ServerInterface {
    private port = 3000 || Number(process.env.PORT);
    private app = express();

    private applyMiddleware() {
        const globalMiddleware = new GlobalMiddleware(this.app);
        globalMiddleware.apply();
    }

    private applyController() {
        const controller = new Controller(this.app);
        controller.apply();
    }

    runServer() {
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
