import { Box } from "@mantine/core";
import React from "react";

interface MetricsProps {
  src: string;
  title: string;
}

const Metrics: React.FC<MetricsProps> = ({ src, title }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <iframe
        style={{ width: "100%", height: "400px" }}
        src={src}
        title={title}
      />
    </Box>
  );
};

export default Metrics;
