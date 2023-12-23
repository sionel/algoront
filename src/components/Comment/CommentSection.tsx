import React from "react";
import CommentForm from "./CommentForm";
import { Container } from "@mui/material";
import { ClientComment } from "@/types/database/comment";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import CommentList from "./CommentList";

const CommentSection = ({ comments }: { comments: ClientComment[] }) => {

  return (
    <Container>
      <h2>코멘트</h2>
      <CommentForm />
      <CommentList comments={comments} />
    </Container>
  );
};

export default CommentSection;
