import React from "react";
import Comment from "./Comment";
import { ClientComment } from "@/types/comment";
interface CommentList {
  comments: ClientComment[];
}
const CommentList: React.FC<CommentList> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment comment={comment} key={index} />
      ))}
    </div>
  );
};

export default CommentList;
