import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = null;

export default function CodeScannerFixture() {
  return (
    <CosmosLayout
      title="CodeScanner"
      componentName="code_scanner"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
