// import { Task } from "@/types";
// import { connectToDatabase } from "@/util/database";
// import { NextApiRequest, NextApiResponse } from "next";
// export type ResponseError = {
//   message: string;
// };
// const handler = async (
//   req: NextApiRequest,
//   res: NextApiResponse<Task | ResponseError>
// ) => {
//   switch (req.method) {
//     case "POST":
//       const task: Task = { title: req.body.title, isCheck: false };
//       const { db } = await connectToDatabase();
//       const result = await db.collection("tasks").insertOne(task);
//       if (result.acknowledged) {
//         res.writeHead(302, { Location: "/tasks" }).end();
//       } else {
//         res.status(500).json({ message: "Internal Server Error" });
//       }
//     case "PUT":
//       break;
//   }
// };

// export default handler;

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
