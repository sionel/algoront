import React from "react";
import MarkDownPost from "../MarkDownPost";
interface DescriptionSectionProps {
  post: string;
}
const DescriptionSection: React.FC<DescriptionSectionProps> = ({ post }) => {
  return <MarkDownPost post={post} />;
};

export default DescriptionSection;
