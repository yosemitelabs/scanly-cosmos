import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: user_actions
span: 6
user_actions:
  - event_ref: Event.tobacco_invoice_ordered
    label: Create Tobacco Invoice
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val: 
      - operations_manager
      - admin
- section_type: asset_table
span: 6
label: Boxes
table_ref: AssetTable.tobacco_box_table
expanded: true
filters:
  - key_type: asset_prop
    val_type: literal
    prop_ref: Asset.tobacco_box.props.tobacco_box_status
    operation: not_equals
    val: "complete"
`;

export default function UserActionsFixture() {
  return (
    <CosmosLayout
      title="User Actions"
      componentName="user_actions"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
