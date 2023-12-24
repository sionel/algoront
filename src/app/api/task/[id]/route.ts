import { Task } from "@/types";
import { collections, connectToDatabase } from "@/util/database";
import { Collection, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { isCheck } = await request.json();

  const tasksCollection = (collections.tasks as Collection)

  const result = await tasksCollection.updateOne(
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
  const tasksCollection = (collections.tasks as Collection)
  const result = await tasksCollection.deleteOne({ _id: new ObjectId(id) });
  if (result.acknowledged) {
    return NextResponse.json({ result: "success" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
