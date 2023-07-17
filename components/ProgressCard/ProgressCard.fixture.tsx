import { Box } from "@mantine/core";
import ProgressCard from "./ProgressCard";

export default () => (
  <Box
    mt={100}
    sx={{
      minWidth: "230px",
      maxWidth: "320px",
      margin: "130px auto 40px auto",
      position: "relative",
    }}
  >
    <ProgressCard
      title="Throughput"
      value="80%"
      size={100}
      sections={[
        { value: 30, color: "yellow" },
        { value: 40, color: "orange" },
        { value: 20, color: "green" },
      ]}
    />
  </Box>
);
