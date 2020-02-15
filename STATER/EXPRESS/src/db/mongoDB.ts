import * as mongoose from 'mongoose';
export default class MongoORM {
  static async connect() {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
      });
      console.info(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
      console.error(`Fail To Connect To Mongo ${err}`);
      process.exit();
    }
  }
}
