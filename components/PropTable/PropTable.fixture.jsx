import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: prop_table
span: 12
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

export default function PropTableFixture() {
  return (
    <CosmosLayout
      title="PropTable"
      componentName="prop_table"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
