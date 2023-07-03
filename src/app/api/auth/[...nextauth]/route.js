import userSchema from "@/Model/userSchema";
import db from "@/utils/db";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";
console.log("process.env.GOOGLE_ID", process.env.GOOGLE_ID);
console.log("urldata", process.env.API);
console.log("process.env.GOOGLE_SECRET", process.env.GOOGLE_SECRET);
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials, req, res) {
        const { email, password } = credentials;
        await db();
          if (!email || !password) {
            throw new Error("All field are require");
          }
          const user = await userSchema.findOne({ email: email });
          if (user) {
            const checkpassword = await bcrypt.compare(password, user.password);
            console.log("checkpassword", checkpassword);
            if (checkpassword) {
              return user;
            } else {
              throw new Error("Wrong password",{statusCode:400});
            }
          } else {
            throw new Error("User not Found!");
          }
  
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.SECERET
});
export { handler as GET, handler as POST };
