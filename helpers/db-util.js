import { MongoClient } from "mongodb";

const dbConnection = async () => {
  const client = await MongoClient.connect(process.env.MONGO_STRING);
  return client;
};

export default dbConnection;
