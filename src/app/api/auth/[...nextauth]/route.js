import userSchema from "@/Model/userSchema"
import db from "@/utils/db"
import NextAuth from "next-auth"
import bcrypt from 'bcrypt'
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import { NextResponse } from "next/server"
console.log("process.env.GOOGLE_ID",process.env.GOOGLE_ID)
const handler =NextAuth( {
  // Configure one or more authentication providers
  providers: [

    GoogleProvider({
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id:'credentials',
      name:"Credentials",
      async authorize(credential){
        await db();
        try{
          const user=await userSchema.findOne({email:credential.email})
          if(user){ 
            const checkpassword=await bcrypt.compare(credential.password,user.password)
            if(checkpassword){
              return user
            }else{
              return new NextResponse("Wrong password",{status:202})
            }
          }else{
            return new NextResponse("User not Found",{status:400})
          }
        }catch(e){

        }
      }
    })
    // ...add more providers here
  ],  pages: {
    error: "/dashboard/login",
  },
})
export {handler as GET,handler as POST}