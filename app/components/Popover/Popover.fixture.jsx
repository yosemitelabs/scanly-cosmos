import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `config`;

export default function PopoverFixture() {
  return (
    <CosmosLayout
      title="Popover"
      componentName="popover"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
