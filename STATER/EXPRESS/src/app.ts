import * as express from 'express';
import { Application } from 'express';
import logger from './utils/logger';

class App {
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
    // this.assets();
    // this.template();
  }

  private connectDatabase(databases: {
    forEach: (arg0: (databases: any) => void) => void;
  }) {
    databases.forEach(database => {
      database.connect();
    });
  }

  private middlewares(middleWares: {
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    this.app.use(express.json());
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  private assets() {
    this.app.use(express.static('public'));
    this.app.use(express.static('views'));
  }

  private template() {
    this.app.set('view engine', 'pug');
  }

  public listen() {
    this.app.listen(this.port, (err: string) => {
      if (err) {
        logger({ type: 'Error', message: `Server is Error ${err}` });
      }
      logger({ type: 'Info', message: `server is listening on ${this.port}` });
    });
  }
}

export default App;
