import React from "react";
import CommentForm from "./CommentForm";
import { Box } from "@mui/material";
import { ApiComment, ClientComment } from "@/types/comment";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import CommentList from "./CommentList";

const CommentSection = async ({ questionId }: { questionId: string }) => {
  let { db } = await connectToDatabase();
  let comments: ClientComment[] = await db
    .collection<ApiComment>("comments")
    .find({ questionId })
    .toArray()
    .then((list) => list.map((comment) => convertApiDataToClientData(comment)));

  return (
    <Box>
      <h2>코멘트</h2>
      <CommentForm />
      <CommentList comments={comments} />
    </Box>
  );
};

export default CommentSection;
