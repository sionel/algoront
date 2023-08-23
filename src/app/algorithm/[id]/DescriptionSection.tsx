import MarkDownPost from "@/components/MarkDownPost";
import React from "react";
interface DescriptionSectionProps {
  post: string;
}
const DescriptionSection: React.FC<DescriptionSectionProps> = ({ post }) => {
  return <MarkDownPost post={post} />;
};

export default DescriptionSection;
