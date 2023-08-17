import MarkDownPost from "@/components/MarkDownPost";
import React from "react";
interface ProblemDescriptionProps {
  post: string;
}
const ProblemDescription: React.FC<ProblemDescriptionProps> = ({ post }) => {
  return <MarkDownPost post={post} />;
};

export default ProblemDescription;
