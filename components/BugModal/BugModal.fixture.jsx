import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = null;

export default function BugModalFixture() {
  return (
    <CosmosLayout
      title="Bug Modal"
      componentName="bug_modal"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
