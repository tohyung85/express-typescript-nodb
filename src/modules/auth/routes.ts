import { Router, Request, Response } from 'express';

class Routes {
  public routes : Router;

  constructor() {
    this.routes = Router();
    this.configRoutes();
  }

  private configRoutes() {
    this.routes.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET Auth route success!'
      });
    })
  }
}

export const routes = new Routes().routes;
