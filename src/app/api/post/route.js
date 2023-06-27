import db from "@/utils/db";
import postSchema from "@/Model/postSchema";
import { NextResponse } from "next/server";
// import { photos } from "@/app/Blog/photos";
export const POST = async (req, res) => {
  console.log("data")
  try {
    await db();
    const { title, description, url, user } = await req.json();
      const Blog=await postSchema.create({
        title:title,
        description:description,
        url:url,
        user:user
      })
      console.log("Blog",Blog)
      return new NextResponse("Blog Added successfully",{status:200})
  } catch(e) {
    return new NextResponse("internal server error", { status: 500 });
  }
};
export const GET = async (req, res) => {
  try {
    await db();
    // const{description,url,title,id,user}=req.body
    // await postSchema.deleteMany({})
    // await postSchema.insertMany(photos)
    const post = await postSchema.find();
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

