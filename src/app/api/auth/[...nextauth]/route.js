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
      clientId:process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id:'credentials',
      name:"Credentials",
      async authorize(credentials,req,res){
        console.log("credentials",credentials)
        const {email,password}=credentials
        await db();
        try{
            if(!email || !password){
              console.log("All field are require")
            }
          const user=await userSchema.findOne({email:email})
          if(user){ 
            const checkpassword=await bcrypt.compare(password,user.password)
            console.log("checkpassword",checkpassword)
            if(checkpassword){
              return user
            }else{
              
              // throw new Error("Wrong password")
            }
          }else{
            return
            // throw new Error("wrong credential")
          }
        }catch(e){

        }
      }
    })
  ],  pages: {
    error: "/dashboard/login",
  },
})
export {handler as GET,handler as POST}