import { Task } from "@/types";
import { connectToDatabase } from "@/util/database";
import { NextApiRequest, NextApiResponse } from "next";
export type ResponseError = {
  message: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Task | ResponseError>
) => {
  switch (req.method) {
    case "POST":
      const task: Task = { title: req.body.title, isCheck: false };
      const { db } = await connectToDatabase();
      const result = await db
        .collection("visits")
        .updateOne({}, { $inc: { count: 1 } });

      if (result.acknowledged) {
        res.writeHead(302, { Location: "/tasks" }).end();
      } else {
        res.status(500).json({ message: "Internal Server Error" });
      }
  }
};

export default handler;
