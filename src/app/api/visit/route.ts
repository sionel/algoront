import { getCollections, connectToDatabase } from "@/util/database";
import { Collection, ObjectId } from "mongodb";
import { redirect } from "next/navigation";
import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function PUT(request: Request) {
  try {
    const cookieStore = cookies();
    const visit = cookieStore.get("visit")?.value;
   
    if (!visit) {
      connectToDatabase();
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const tomorrowDate = new Date(currentDate);
      tomorrowDate.setDate(currentDate.getDate() + 1);
      const expiresValue = tomorrowDate.toUTCString();

      const headers = new Headers();
      headers.set(
        "Set-Cookie",
        `visit=true; Path=/; HttpOnly; Expires=${expiresValue}`
      );
      const { accessStats } = await getCollections();
      const query = { _id: new ObjectId("6587dba3c1343116ee680750") };

      const update = {
        $inc: {
          todayCount: 1,
          totalCount: 1,
        },
      };

      const result = await accessStats.updateOne(query, update);
      console.log(result);
      if (result.acknowledged) {
        // return NextResponse.json(result, { status: 200, headers: newHeaders });
        return NextResponse.json(result, { status: 200, headers });
      } else {
        return NextResponse.json({ error: "server error" }, { status: 500 });
      }
    }else {
      return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
