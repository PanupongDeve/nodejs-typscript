import { Router, Request, Response, NextFunction } from 'express';

import SubControllerInterfac from '../../interfaces/SubControllerInterface';

export default class HomeController implements SubControllerInterfac {
    private prefix: string;
    private router: Router;

    constructor(prefix: string) {
        this.prefix = prefix;
        this.router = Router();
        this.router.get(this.prefix, this.welcome);
    }

    private async welcome(req: Request, res: Response, next: NextFunction): Promise<void> {
        const data = "Hello World";
        res.send(data);
    }

    getRouter() {
        return this.router;
    }
}