import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { connectToDb, findDocument } from "../../../helpers/db-util"
import { comparePassword } from "../../../helpers/auth";

export default NextAuth({
  // Configure one or more authentication providers
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {

        console.log('credentials in sign in', credentials)
        let client;
        try {
          client = await connectToDb();
        } catch (error) {
          throw new Error("Could not connect to the database");
        }

        let user

        try {
          user = await findDocument(client, "users", { email: credentials.email });
          console.log('user', user)

          if (!user) {
            throw new Error("User does not exist");
          }

        } catch (error) {
          throw new Error("Error finding user");
        }
        finally {
          client.close();
        }



        const isValid = await comparePassword(credentials.password, user.password);
        if (!isValid) {
          client.close();
          throw new Error("Invalid password");
        }

        client.close();
        return { email: user.email };
      }
    })
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})