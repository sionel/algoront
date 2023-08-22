import { Task } from "@/types";
import { connectToDatabase } from "@/util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
export type ResponseError = {
  message: string;
};
const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Task | ResponseError>
) => {
  const { db } = await connectToDatabase();
  const taskCollection = await db.collection("Task");
  let result: any;
  const id = req.query.id as string;
  switch (req.method) {
    case "DELETE":
      result = await taskCollection.deleteOne({ _id: new ObjectId(id) });
      console.log(result);
      break;
    case "PUT":
      const { isCheck } = req.body;
      result = await taskCollection.updateOne(
        { _id: new ObjectId(id) }, // Filter by _id
        {
          $set: {
            isCheck: isCheck,
          },
        }
      );
      console.log(result);
      break;
  }
  if (result.acknowledged) {
    res.status(200)
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
