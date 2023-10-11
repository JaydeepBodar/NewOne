import userSchema from "@/Model/userSchema";
import db from "@/utils/db";
import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
console.log("first")
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      version: "2.0", 
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    jwt:async ({token,user})=>{
      token === user
      return token
    },
    session:async({session,token})=>{
      console.log("sessionsessionsession",session)
      console.log("objectsessionsession",token)
      session.user === token
      return session
    } 
  }, 
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
