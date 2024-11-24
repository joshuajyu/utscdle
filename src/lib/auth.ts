// configuration for Auth.js
import NextAuth, { CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { getUserFromDb } from "@/utils/getUser";
import client from "@/utils/db";

class InvalidLoginError extends CredentialsSignin {
  code = "Invalid credentials!";
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email as string);

        if (
          !user ||
          !bcrypt.compareSync(credentials.password as string, user.password)
        ) {
          // No user found, so this is their first attempt to login
          throw new InvalidLoginError();
        }

        // return user object with their profile data
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.name,
        } as User;
      },
    }),
    Google,
  ],
  events: {
    async signIn(message) {
      console.log(message);
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 2592000,
  },
});
