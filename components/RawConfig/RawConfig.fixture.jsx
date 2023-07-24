import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = null;

export default function RawConfigFixture() {
  return (
    <CosmosLayout
      title="Raw Config"
      componentName="raw_config"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
