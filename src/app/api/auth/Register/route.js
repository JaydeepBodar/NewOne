import userSchema from '@/Model/userSchema'
import db from '@/utils/db'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import React from 'react'

export const POST = async(req,res) => {
 try{
    await db()
    const {name,email,password}=await req.json()
    const existinguser=await userSchema.findOne({email:email})
		if(!name || !email || !password){
			return new NextResponse("All field are required",{status:202})
		}
    if(existinguser){
        return new NextResponse('User Alreday Registered',{status:201})
    }else{
        const hashpasswod=await bcrypt.hash(password,5)
        const user=await userSchema.create({
            name:name,
            email:email,
            password:hashpasswod
        })
        console.log("user",user)
        return new NextResponse('Thanks for Register',{status:200})
    }
 }
 catch(e){
    return new NextResponse("Internal server Error",{status:500})
 }
}
