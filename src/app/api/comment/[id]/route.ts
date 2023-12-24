import { Task } from "@/types";
import { Comment } from "@/types/database/comment";
import { collections, connectToDatabase } from "@/util/database";
import { Collection, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const commentsCollection = (collections.tasks as Collection)
  const result = await commentsCollection.deleteOne({_id: new ObjectId(id)})

  if (result.acknowledged) {
    return NextResponse.json({ success: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
