import { Task } from "@/types";
import { connectToDatabase } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url)
  const index = Number(searchParams.get('index'))

  const { db } = await connectToDatabase();
  const testcasesCollection = await db.collection("testcases");
  const result = await testcasesCollection.findOne({ questionId: id, index });
  
  if (result) {
    return NextResponse.json({ result }, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
