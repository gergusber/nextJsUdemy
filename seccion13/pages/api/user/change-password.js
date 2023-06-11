//api/user/change-password

import { getSession } from 'next-auth/client';
import { hashedPassword, comparePassword } from '../../../helpers/auth'
import { connectToDb, updateDocument,findDocument } from "../../../helpers/db-util";


const handler = async (req, res) => {
  if (req.method !== 'PATCH')
    return;

  const session = await getSession({ req: req });
  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const email = session.user.email;
  const { oldPassword, newPassword } = req.body;

  let client;
  try {
    client = await connectToDb();
  } catch (error) {
    return res.status(500).json({ message: "Could not connect to the database" })
  }

  try {
    const user = await findDocument(client, "users", { email });

    if (!user) {
      res.status(422).json({ message: "User not found" })
      client.close();
      return;
    }


    const isValid = await comparePassword(oldPassword, user.password);
    if(!isValid) {
      res.status(403).json({ message: "Invalid password" })
      client.close();
      return;
    }

    const newPasswordHashed = await hashedPassword(newPassword);

    const updatedDocument = await updateDocument(client, "users", { email }, { password: newPasswordHashed });

    user.id = updatedDocument._id;

    client.close();

    res.status(200).json({ message: 'password updated', user });
  } catch (error) {
    
  }

}

export default handler