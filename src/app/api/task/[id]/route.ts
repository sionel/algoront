import { Task } from "@/types";
import { connectToDatabase } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { isCheck } = await request.json();

  const { db } = await connectToDatabase();
  const taskCollection = await db.collection("tasks");
  const result = await taskCollection.updateOne(
    { _id: new ObjectId(id) }, // Filter by _id
    {
      $set: {
        isCheck: isCheck,
      },
    }
  );

  if (result.acknowledged) {
    return NextResponse.json({ result: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
export async function DELETE(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { db } = await connectToDatabase();
  const taskCollection = await db.collection("tasks");
  const result = await taskCollection.deleteOne({ _id: new ObjectId(id) });
  if (result.acknowledged) {
    return NextResponse.json({ result: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
