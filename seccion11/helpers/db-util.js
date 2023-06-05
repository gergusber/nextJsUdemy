const { MongoClient } = require("mongodb");
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB = process.env.MONGODB_DB;

export const connectToDb = async () => {
  console.log(`loging into: mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterfrance.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`)
  return await MongoClient.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterfrance.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`);
}

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document)

  console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);

  return result;
}

export const findAllDocuments = async (client, collection, sort) => {
  const db = client.db();
  return await db.collection(collection).find().sort(sort).toArray();
}