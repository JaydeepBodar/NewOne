import React from 'react'
import subScribeModel from '@/Model/subScribeModel'
import { NextResponse } from 'next/server'
import db from '@/utils/db'
export const POST = async(req,res) => {
        try{
            await db()
            const{name,message,email}=await req.json()

            if(!name || !email || !message){
                return new NextResponse("All fill required",{status:400})
            }
            const existUser=await subScribeModel.findOne({email:email})
            if(existUser){
                return new NextResponse("User Alreday Subscribe",{status:200})  
            }else{
                const User=await subScribeModel.create({
                    name:name,
                    message:message,
                    email:email
                })
                console.log("User",User)
                return new NextResponse("Thanks for Subscribe",{status:201})
            }
        }catch(error){
            return new NextResponse(error.digest)
        }
}
