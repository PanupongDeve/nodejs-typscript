import { Express } from 'express';

export default interface MiddlewareInterface {
  new (express: Express);
  apply(): void;
}
