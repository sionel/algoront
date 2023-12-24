import { Task } from "@/types";
import { Comment } from "@/types/database/comment";
import { collections, connectToDatabase } from "@/util/database";
import { Collection } from "mongodb";
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
  const commentsCollection = (collections.tasks as Collection)
  const result = await commentsCollection.insertOne(comment);
  
  if (result.acknowledged) {
    return NextResponse.json({ success: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
