import 'reflect-metadata';
import { ConnectionOptions } from 'typeorm';
import {
  MONGO_URL,
  MYSQL_HOST_DEV,
  MYSQL_PORT_DEV,
  MYSQL_USER_DEV,
  MYSQL_PASSWORD_DEV,
  MYSQL_DB_NAME_DEV,
  MYSQL_HOST_TEST,
  MYSQL_PORT_TEST,
  MYSQL_USER_TEST,
  MYSQL_PASSWORD_TEST,
  MYSQL_DB_NAME_TEST,
  MYSQL_HOST_PROD,
  MYSQL_PORT_PROD,
  MYSQL_USER_PROD,
  MYSQL_PASSWORD_PROD,
  MYSQL_DB_NAME_PROD
} from '@environments';

export const mongoConfig = {
  mongoURL: MONGO_URL
};

interface MysqlConfig {
  [key: string]: ConnectionOptions;
}

const baseConfig: MysqlConfig = {
  type: 'mysql',
  entities: ['../entities/*.ts'],
  synchronize: true,
  logging: true
};

export const mysqlConfig: MysqlConfig = {
  devlopment: {
    ...baseConfig,
    host: MYSQL_HOST_DEV,
    port: MYSQL_PORT_DEV,
    username: MYSQL_USER_DEV,
    password: MYSQL_PASSWORD_DEV,
    database: MYSQL_DB_NAME_DEV
  },
  test: {
    ...baseConfig,
    host: MYSQL_HOST_TEST,
    port: MYSQL_PORT_TEST,
    username: MYSQL_USER_TEST,
    password: MYSQL_PASSWORD_TEST,
    database: MYSQL_DB_NAME_TEST
  },
  production: {
    ...baseConfig,
    host: MYSQL_HOST_PROD,
    port: MYSQL_PORT_PROD,
    username: MYSQL_USER_PROD,
    password: MYSQL_PASSWORD_PROD,
    database: MYSQL_DB_NAME_PROD
  }
};
