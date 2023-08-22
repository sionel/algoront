import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import React from "react";
import Board from "./Board";
import { ApiPost, ClientPost } from "../../types";

const page = async () => {
  let { db } = await connectToDatabase();
  let posts: ClientPost[] = await db
    .collection<ApiPost>("posts")
    .find()
    .toArray()
    .then((list) => list.map((post) => convertApiDataToClientData(post)));

  return <Board posts={posts} />;
};

export default page;
