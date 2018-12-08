import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';

import Router from './router';

class App {
  public app: express.Application;
  private router: Router;

  constructor() {
    this.app = express();
    this.router = new Router();
    this.config();
  }

  private config() : void {
    dotenv.config();

    this.app.use(morgan('short'));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.router.setupRoutes(this.app);
  }
}

export default new App().app;