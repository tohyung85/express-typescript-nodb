import { Application, Request, Response } from 'express';

import { routes as authRoutes } from './modules/auth/routes';

export default class Router {
  public setupRoutes(app : Application): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request success!'
        });
      });

    app.use('/auth', authRoutes);
  }

}