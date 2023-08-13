"use client";
import ReactMarkdown from "react-markdown";
type postType = {
  post: string;
};

export default function MarkDownPost({ post }: postType) {
  return <ReactMarkdown>{post}</ReactMarkdown>;
}
