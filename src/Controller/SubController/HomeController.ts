import { Router, Request, Response, NextFunction } from 'express';

import SubControllerInterface from '../../interfaces/SubControllerInterface';

export default class HomeController implements SubControllerInterface {
    private prefix: string;
    private router: Router;

    constructor(prefix: string) {
        this.prefix = prefix;
        this.router = Router();
        this.router.get(this.prefix, this.welcome);
    }

    private async welcome(req: Request, res: Response, next: NextFunction): Promise<void> {
        req.session.views = (req.session.views || 0) + 1;

        // Write response
        res.send(req.session.views + ' views');
    }

    getRouter() {
        return this.router;
    }
}
