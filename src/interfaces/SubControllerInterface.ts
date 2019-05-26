import { Router } from 'express';

export default interface SubControllerInterface {
  getRouter(): Router;
}
