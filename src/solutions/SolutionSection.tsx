import React from "react";
import Baek1931 from "./baek1931/Baek1931";
import { Box } from "@mui/material";

const SolutionSection = ({ questionId }: { questionId: string }) => {
  const getSolutionById = () => {
    switch (questionId) {
      case "baek_1931":
        return <Baek1931 />;
      default:
        return <Baek1931 />;
    }
  };

  return (
    <Box mb={10}>
      <h2>풀이법</h2>
      {getSolutionById()}
    </Box>
  );
};

export default SolutionSection;
