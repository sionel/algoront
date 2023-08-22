import { Task } from "@/types";
import { connectToDatabase } from "@/util/database";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  // console.log(formData.get('title'));

  const task: Task = { title: formData.get("title") as string, isCheck: false };
  const { db } = await connectToDatabase();
  const result = await db.collection("tasks").insertOne(task);
  if (result.acknowledged) {
    return NextResponse.redirect("http://localhost:3000/tasks", 303);
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
