import { ApiTestcase, Task, Testcase } from "@/types";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const index = Number(searchParams.get("index"));

  const { db } = await connectToDatabase();
  const testcasesCollection = await db.collection("testcases");

  const result = await testcasesCollection
    .find<ApiTestcase>({ questionId: id })
    .toArray();

  if (result) {
    const testcaseList = result.map((e) => {
      e.case = JSON.stringify(e.case);
      return convertApiDataToClientData<Testcase>(e);
    });
    return NextResponse.json(testcaseList, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
