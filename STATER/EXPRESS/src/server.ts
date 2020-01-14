import Express from 'providers/Express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import loggerMiddleware from 'middleware/logger';
import corsMiddleware from 'middleware/cors.middleware';
import PostController from 'modules/post/post.controller';
import MongoORM from 'db/mongoORM';

require('dotenv').config();

const app = new Express({
  port: process.env.PORT || 5000,
  controllers: [new PostsController()],
  databases: [MongoORM],
  middleWares: [
    corsMiddleware,
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cookieParser(),
    loggerMiddleware
  ]
});

app.listen();
