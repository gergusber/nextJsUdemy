
import { connectToDb, insertDocument,findDocument } from "../../../helpers/db-util";
import { hashPassword } from '../../../helpers/auth'
const handler = async (req, res) => {

  if (req.method !== 'POST')
    return;

  const  { email, password }  = req.body;
  console.log('email', email, 'password', password);
  if (!email || !email.includes("@") || !password || password.trim().length < 7) {
    return res.status(422).json({ message: "You must provide email and password and password should also be at 7 characters long." })
  }

  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    return res.status(500).json({ message: "Could not connect to the database" })
  }

  try {
    const checkExistence = await findDocument(client, "users", { email });

    if (checkExistence) {
      res.status(422).json({ message: "User does exist" })
      return;
    }

    const hashedPassword = await hashPassword(password);

    const user = {
      email,
      password: hashedPassword,
    };

    const insertedDocument = await insertDocument(client, "users", user);

    user.id = insertedDocument._id;
    console.log(user);

    res.status(201).json({ message: 'created user' })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
    return;
  }
  finally {
    client.close();
  }
}



export default handler;