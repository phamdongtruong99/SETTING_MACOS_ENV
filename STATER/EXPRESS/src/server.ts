import App from './app';
import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';
import PostsController from './controllers/posts/posts.controller';
import HomeController from './controllers/home/home.controller';
import cors from 'cors';
import MongoORM from './db/mongoORM';

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token'
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  preflightContinue: false
};

const app = new App({
  port: 5000,
  controllers: [new HomeController(), new PostsController()],
  databases: [MongoORM],
  middleWares: [
    cors(options),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware
  ]
});

app.listen();
