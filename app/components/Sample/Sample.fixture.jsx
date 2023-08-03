import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = null;

export default function SampleFixture() {
  return (
    <CosmosLayout
      title="Sample"
      componentName="sample"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
