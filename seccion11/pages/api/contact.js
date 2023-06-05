// ROUTE /api/contact
import { connectToDb } from "../../helpers/db-util";
const handler = async (req, res) => {

  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    console.log(email, name, message)

    if (!email || !name || !message || !name.trim().length || !message.trim().length) {
      res.status(422).json({ message: 'All fields are required' });
      return;

    }
    if (!email.includes(`@`)) {

      res.status(400).json({ message: 'Email is invalid' });
      return;
    }


    //send message to bd
    const newMessage = {
      email, name, message
    }
    let mongoClient;

    try {
      mongoClient = await connectToDb();

    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    const db = mongoClient.db();
    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId;

    } catch (error) {
      res.status(500).json({ message: 'Storing data failed' });
      return;
    }
    finally {
      mongoClient.close();
    }

    res.status(201).json({ message: 'Message sent', message: newMessage });
  }
}

export default handler;