// get incomming requests as post and also fetch requests

import { connectToDb, insertDocument, findAllDocuments } from "../../../helpers/db-util";


const handler = async (req, res) => {
  // const email = req.query.email;
  const eventId = req.query.eventId
  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    res.status(500).json({ message: 'Error to connect to the db' });
    return;
  }

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

    try {
      const insertedDocument = await insertDocument(client, 'comments', newComment)

      newComment.id = insertedDocument.insertedId;

      console.log(`${insertedDocument.insertedCount} documents were inserted with the _id: ${insertedDocument.insertedId}`);

      res.status(200).json({ message: 'Added Comment', comment: newComment })
    } catch (error) {
      res.status(500).json({ message: 'inserting data failed' })
    }
    finally {
      await client.close();
    }
  }


  if (req.method === 'GET') {
    try {
      const result = await findAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: result })
    } catch (error) {
      res.status(500).json({ message: 'Fetching data failed' })
    }
    finally {
      await client.close();
    }
  }

}

export default handler;