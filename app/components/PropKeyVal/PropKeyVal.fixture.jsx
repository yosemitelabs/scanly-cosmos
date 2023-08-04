import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import PropKeyVal from "./PropKeyVal";

const code = `
  <PropKeyVal data={data} />
`;

const config = `
- section_type: prop_key_val
span: 12
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

// sample of data
const data = [
  { cutter: "Person 1", cuts_weight_lbs: 0.2 },
  { cutter: "Person 2", cuts_weight_lbs: 0.35 },
  { cutter: "Person 2", cuts_weight_lbs: 0.24 },
  { cutter: "Person 1", cuts_weight_lbs: 0.23 },
];

export default function PropKeyValFixture() {
  return (
    <CosmosLayout
      title="PropKeyVal"
      componentName="prop_key_val"
      code={code}
      config={config}
    >
      <Box>
        <PropKeyVal data={data} />
      </Box>
    </CosmosLayout>
  );
}
