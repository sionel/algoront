import { Task } from "@/types";
import { collections, connectToDatabase } from "@/util/database";
import { Collection } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const task: Task = { title: formData.get("title") as string, isCheck: false };
  
  const tasksCollection = (collections.tasks as Collection)
  const result = await tasksCollection.insertOne(task);
  
  if (result.acknowledged) {
    return NextResponse.redirect("http://localhost:3000/tasks", 303);
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
