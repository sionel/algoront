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
  // const req = await request.json();
  console.log(request);

  // const task: Task = { title: req.body.title, isCheck: false };
  // const { db } = await connectToDatabase();
  // const result = await db.collection("tasks").insertOne(task);
  // const data = await res.json();
  redirect("http://localhost:3000/tasks");

  // return NextResponse.json({ req });
}
