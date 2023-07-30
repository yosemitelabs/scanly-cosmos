import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: event_history
span: 12
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val: 
      - admin
`;

export default function EventListFixture() {
  return (
    <CosmosLayout
      title="Event List"
      componentName="event_list"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
