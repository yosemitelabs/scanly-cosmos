import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";
import AssetTable from "./AssetTable";

const code = `
  <AssetTable elements={elements} />
`;

const config = `
- section_type: asset_table
span: 12
label: Tobacco Boxes
asset_list_prop_ref: Asset.tobacco_invoice.props.tobacco_boxes
table_ref: AssetTable.tobacco_box_table
expanded: true
- section_type: prop_table
span: 6
prop_refs:
  - Asset.tobacco_invoice.props.vendor
  - Asset.tobacco_invoice.props.customer
  - Asset.tobacco_invoice.props.invoice_number
  - Asset.tobacco_invoice.props.tobacco_boxes
  - Asset.tobacco_invoice.props.total_bad_leaf_lbs
  - Asset.tobacco_invoice.props.total_expected_lbs
  - Asset.tobacco_invoice.props.total_delivered_lbs
  - Asset.tobacco_invoice.props.total_expected_measured_variance_lbs
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val: 
      - admin
      - operations_manager
`;

// sample of elements
const elements = [
  { property: "box_number", value: "99", test: "1" },
  { property: "customer", value: "bandit", test: "1" },
  { property: "tobacco_type", value: "ooo", test: "1" },
  { property: "tobacco_box_status", value: "production", test: "1" },
];

export default function AssetTableFixture() {
  return (
    <CosmosLayout
      title="Asset Table"
      componentName="asset_table"
      code={code}
      config={config}
    >
      <AssetTable label="Boxes" elements={elements} />
    </CosmosLayout>
  );
}
