import { Express, Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as moment from 'moment';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
const cookieSession = require('cookie-session');

import MiddlewareInterface from '../interfaces/MiddlewareInterface';

export default class GlobalMiddleware implements MiddlewareInterface {
    private app: Express;
    private day: number = 24 * 60 * 60 * 1000;

    constructor(express: Express) {
        this.app = express;
    }

    apply() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(
            cookieSession({
                name: 'session',
                keys: ['cat typing'],
                maxAge: this.day,
            }),
        );
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(compression());
        this.app.use(this.showLogs);
    }

    showLogs(req: Request, res: Response, next: NextFunction) {
        console.log(
            'new connecting to (' + req.method + ') ' + req.path + ' : ' + moment().format('DD/MM/YYYY hh:mm:ss'),
        );
        next();
    }
}
