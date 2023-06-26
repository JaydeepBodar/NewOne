import db from "@/utils/db";
import postSchema from "@/Model/postSchema";
import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await db();
    const data = await postSchema.findOne({ id: id });
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse("ERROR",{status:500});
  }
};
