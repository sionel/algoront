import { ApiTestcase, Task, Testcase } from "@/types";
import { convertApiDataToClientData, collections } from "@/util/database";
import { Collection } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params: { questionId } }: { params: { questionId: string } }
) {
  try {
    const result = await (collections.testcases as Collection)
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
  } catch (error) {
    return NextResponse.json({ error: "db error" }, { status: 500 });
  }
}
