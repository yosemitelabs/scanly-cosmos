import { Box } from "@mantine/core";
import ProgressCard from "./ProgressCard";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";

const code = `
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
`;

const config = `sections:
- section_type: progress_card
  span: 3
  component_value_ref: Asset.tobacco_box.props.tobacco_invoice;
  component_label: Throughput`;

export default function ProgressCardFixture() {
  return (
    <CosmosLayout
      title="Progress Card"
      componentName="progress_card"
      code={code}
      config={config}
    >
      <Box
        sx={{
          minWidth: "230px",
          maxWidth: "320px",
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
    </CosmosLayout>
  );
}
