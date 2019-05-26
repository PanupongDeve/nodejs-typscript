import { Express } from 'express';

import ControllerInterface from '../interfaces/ControllerInterface';

import { HomeController } from './SubController';

export default class Controller implements ControllerInterface {
    private app: Express;

    constructor(express: Express) {
        this.app = express;
    }

    apply() {
        const homeController = new HomeController('');

        this.app.use(homeController.getRouter());
    }
}