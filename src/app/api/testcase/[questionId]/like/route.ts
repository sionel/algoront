import { ApiTestcase, Task, Testcase } from "@/types";
import {
  collections,
  connectToDatabase,
  convertApiDataToClientData,
} from "@/util/database";
import { Collection, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params: { questionId } }: { params: { questionId: string } }
) {
  try {
    const formData = await request.formData();
    const id = formData.get("id") as string;

    const { db } = await connectToDatabase();
    const testcasesCollection = collections.testcases as Collection;

    const query = { _id: new ObjectId(id) }; // 문서를 찾기 위한 조건
    const update = {
      $inc: {
        like: 1,
      },
    };

    const result = await testcasesCollection.updateOne(query, update);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
