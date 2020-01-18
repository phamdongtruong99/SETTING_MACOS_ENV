import * as express from 'express';
import { Application } from 'express';
import logger from '../utils/logger';

class Express {
  public app: Application;
  public port: number;

  constructor(appInit: {
    port: number;
    databases: any;
    middleWares: any;
    controllers: any;
  }) {
    this.app = express();
    this.port = appInit.port;

    this.connectDatabase(appInit.databases);
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.handleError();
    // this.assets();
    // this.template();
  }

  private connectDatabase(databases: {
    forEach: (arg0: (databases: any) => void) => void;
  }): void {
    databases.forEach(database => {
      database.connect();
    });
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }): void {
    this.app.use(express.json());
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }): void {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  private assets(): void {
    this.app.use(express.static('public'));
    this.app.use(express.static('views'));
  }

  private handleError(): void {
    this.app.use((req, res, next) => {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    });

    this.app.use((error, req, res, next) => {
      res.status(error.status || 500).send({
        error: {
          status: error.status || 500,
          message: error.message || 'Internal Server Error'
        }
      });
    });
  }

  private template(): void {
    this.app.set('view engine', 'pug');
  }

  public listen(): void {
    this.app.listen(this.port, (err: string) => {
      if (err) {
        logger({ type: 'Error', message: `Server is Error ${err}` });
      }
      logger({ type: 'Info', message: `server is listening on ${this.port}` });
    });
  }
}

export default Express;
