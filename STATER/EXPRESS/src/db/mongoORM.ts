import * as mongoose from 'mongoose';
export default class MongoORM {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
      });
      console.info('Connected To Mongo');
    } catch (err) {
      console.error(`Fail To Connect To Mongo ${err}`);
    }
  }
}
