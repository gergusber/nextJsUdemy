const { MongoClient } = require("mongodb");
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB = process.env.MONGODB_DB;


const handler = async (req, res) => {
  const { email } = req.body;
  if (req.method === 'POST') {
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Bad request' });
      return;
    }

    console.log('Email in the api : ', email);
    const client = await MongoClient.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterfrance.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`); // creates the client 

    const db = client.db();

    const result = await db.collection('newsletter').insertOne({ email: email }) // inserts an email to the emails collections,.

    console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`);

    res.status(201).json({ message: 'sign up successfully ' })
    await client.close();
  }
  else {

    res.status(200).json({})
  }
}

export default handler;