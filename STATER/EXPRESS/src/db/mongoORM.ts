import * as mongoose from 'mongoose';
import logger from '../utils/logger';

export default class MongoORM {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
      });
      logger({ type: 'Notify', message: 'Connected To Mongo' });
    } catch (err) {
      logger({ type: 'Error', message: `Fail To Connect To Mongo ${err}` });
    }
  }
}
