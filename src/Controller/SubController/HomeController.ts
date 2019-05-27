import {getRepository} from "typeorm";
import { Router, Request, Response, NextFunction } from 'express';

import SubControllerInterface from '../../interfaces/SubControllerInterface';

import {User} from "../../Services/TypeOrm/entity/User";

export default class HomeController implements SubControllerInterface {
    private prefix: string;
    private router: Router;

    constructor(prefix: string) {
        this.prefix = prefix;
        this.router = Router();
        this.router.get(this.prefix, this.welcome);
    }

    private async welcome(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userRepository = getRepository(User);
        const newUser = await userRepository.create({
            firstName: "panupong",
            lastName: "Chamsomboon",
            isActive: true
        });
        await userRepository.save(newUser);
        const user = await userRepository.find();
        console.log(user);
        // Write response
        res.json(user);
    }

    getRouter() {
        return this.router;
    }
}
