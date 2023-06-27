import db from "@/utils/db";
import postSchema from "@/Model/postSchema";
import { NextResponse } from "next/server";
import { ObjectId } from "mongoose";
export const GET = async (request, { params }) => {
  const { id } = params;
  console.log("mongodb",id)
  try {
    await db();
    const data = await postSchema.findOne({ _id:id });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("ERROR",{status:500});
  }
};
