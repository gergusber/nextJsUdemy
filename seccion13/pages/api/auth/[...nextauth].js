import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { connectToDb } from "../../../helpers/db-util"
import { comparePassword } from "../../../helpers/auth";

export default NextAuth({
  // Configure one or more authentication providers
  session: {
    jwt: true,
    maxAge : 30 * 24 * 60 * 60
  },
  providers: [
    Providers.Credentials({
      credentials: {
        authorize: async (credentials) => {
          let client;
          try {
            client = await connectToDb();
          } catch (error) {
            throw new Error("Could not connect to the database");
          }

          let user
         
          try {
            user = await findDocument(client, "users", { email: credentials.email });
          } catch (error) {
            throw new Error("Error finding user");
          }
          finally {
            client.close();
          }

          if (!user) {
            client.close();
            throw new Error("User does not exist");
          }

          const isValid = await comparePassword(credentials.password, user.password);
          if (!isValid) {
            client.close();
            throw new Error("Invalid password");
          }

          client.close();
          return { email: user.email };
        }
      }
    })
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})