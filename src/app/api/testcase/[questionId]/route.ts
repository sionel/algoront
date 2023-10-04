import { ApiTestcase, Task, Testcase } from "@/types";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { questionId } }: { params: { questionId: string } }
) {
  const { db } = await connectToDatabase();
  const testcasesCollection = await db.collection("testcases");

  const result = await testcasesCollection
    .find<ApiTestcase>({ questionId })
    .toArray();

  if (result) {
    const testcaseList = result.map((e) => {
      return convertApiDataToClientData<Testcase>(e);
    });
    return NextResponse.json(testcaseList, { status: 200 });
  } else {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
