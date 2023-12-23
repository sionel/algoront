import { Task } from "@/types";
import { Comment } from "@/types/database/comment";
import { connectToDatabase } from "@/util/database";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { questionId, username, password, text } = await request.json();

  const comment: Comment = {
    questionId,
    username,
    password,
    text,
  };
  const { db } = await connectToDatabase();
  const result = await db.collection("comments").insertOne(comment);
  if (result.acknowledged) {
    return NextResponse.json({ success: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
