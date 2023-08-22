import { Task } from "@/types";
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
      console.log(req.body);
      break;
    case "PUT":
      break;
  }
};

export default handler;
