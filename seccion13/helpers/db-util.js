import { MongoClient } from "mongodb";
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB = process.env.MONGODB_DB;
const MONGODB_CLUSTER = process.env.MONGODB_CLUSTER;

export const connectToDb = async () => {
  console.log(`loging into: mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`)
  return await MongoClient.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`);
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

export const findDocument = async (client, collection, filter) => {
  const db = client.db();
  return await db.collection(collection).findOne(filter);
}


export const updateDocument = async (client, collection, filter, document) => {
  const db = client.db();

  const result = await db.collection(collection).updateOne(filter, { $set: document });

  console.log(`${result.insertedCount} documents were updated with the _id: ${result.insertedId}`);

  return result;
}