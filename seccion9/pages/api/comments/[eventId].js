// get incomming requests as post and also fetch requests
const { MongoClient } = require("mongodb");
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_DB = process.env.MONGODB_DB;

const handler = async (req, res) => {
  // const email = req.query.email;
  const eventId = req.query.eventId
  console.log('Get request to backend');
  console.log(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterfrance.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`)
  const client = await MongoClient.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@clusterfrance.4ryh4fh.mongodb.net/${MONGODB_DB}?retryWrites=true&w=majority`); // creates the client 

  if (req.method === 'POST') {

    const { email, name, text } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Bad request, email not valid' });
      return;
    }

    if (!name || !name.trim() === '') {
      res.status(422).json({ message: 'Bad request, Name not valid' });
      return;
    }

    if (!text || !text.trim() === '') {
      res.status(422).json({ message: 'Bad request, Text not valid' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    }

    console.log('Email in the api : ', email);

    const db = client.db();

    const result = await db.collection('comments').insertOne(newComment) // inserts an email to the emails collections,.
    newComment.id = result.insertedId;
    console.log('Comment in the api : ', newComment);

    res.status(200).json({ message: 'Added Comment', comment: newComment })
  }


  if (req.method === 'GET') {

    const db = client.db(); 
    const result = await db.collection('comments').find().sort({ _id: -1 }).toArray(); 

    res.status(200).json({ comments: result })
  }

  await client.close();
}

export default handler;