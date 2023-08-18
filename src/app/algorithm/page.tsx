import { connectToDatabase } from "@/util/database";
import React from "react";
import Board from "./Board";
import { Post } from "../../types";

const page = async () => {
  let { db } = await connectToDatabase();
  let rows: Post[] = await db
    .collection("Post")
    .find()
    .toArray()
    .then((list: any) => {      
      return list.map((e: any) => {
        e._id = e._id.toString();
        return e
      });
    });

  return <Board list={rows} />;
};

export default page;
