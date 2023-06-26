import db from "@/utils/db";
import postSchema from "@/Model/postSchema";
import { NextResponse } from "next/server";
// import { photos } from "@/app/Blog/photos";
export const GET = async (req,res) => {
  try {
    await db();
    // const{description,url,title,id,user}=req.body
    // await postSchema.deleteMany({})
    // await postSchema.insertMany(photos)
    const post=await postSchema.find()
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error,{status:500});
  } 
};  
