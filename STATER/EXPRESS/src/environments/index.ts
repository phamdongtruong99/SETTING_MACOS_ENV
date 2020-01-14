import * as dotenv from 'dotenv';
import accessEnv from './accessEnv';
dotenv.config();

// environment
export const NODE_ENV: string = accessEnv('NODE_ENV', 'development');

// author
export const AUTHOR: string = accessEnv('AUTHOR', 'Chnirt');

// bcrypt
export const BCRYPT_SALT: number = +accessEnv('BCRYPT_SALT', '10');
