
import { connectToDb, insertDocument, findAllDocuments } from "../../../helpers/db-util";


const handler = async (req, res) => {
  const { email } = req.body;
  if (req.method === 'POST') {
    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Bad request' });
      return;
    }
    let client = null
    try {
      client = await connectToDb();
    } catch (error) {
      res.status(500).json({ message: 'Error to connect to the db' });
      return;
    }

    try {
      const insertedDocument = await insertDocument(client, 'newsletter', { email: email })
      console.log(`${insertedDocument.insertedCount} documents were inserted with the _id: ${insertedDocument.insertedId}`);

      res.status(201).json({ message: 'sign up successfully ' })
    } catch (error) {
      res.status(500).json({ message: 'inserting data failed' })
    }
    finally {
      await client.close();
    }
  }
  else {

    res.status(200).json({})
  }
}

export default handler;