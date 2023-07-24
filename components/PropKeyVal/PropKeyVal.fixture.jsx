import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: prop_key_val
span: 6
headers:
  - Cutter
  - Cuts weight lbs
label: Cuts (lbs) by worker
prop_ref: Asset.tobacco_box.props.cuts_by_worker
key_asset_label_prop_ref: Asset.worker.props.worker_name
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val: 
      - data_collector
      - supervisor
      - operations_manager
      - admin
`;

export default function PropKeyValFixture() {
  return (
    <CosmosLayout
      title="PropKeyVal"
      componentName="prop_key_val"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
