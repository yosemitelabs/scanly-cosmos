import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import PropTable from "./PropTable";

const code = `
  <PropTable elements={elements} />
`;

const config = `
- section_type: prop_table
span: 12
prop_refs:
  - Asset.tobacco_invoice.props.box_number
  - Asset.tobacco_invoice.props.customer
  - Asset.tobacco_invoice.props.tobacco_type
  - Asset.tobacco_invoice.props.tobacco_box_status
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
const data = [
  { property: "box_number", value: "99" },
  { property: "customer", value: "bandit" },
  { property: "tobacco_type", value: "ooo" },
  { property: "tobacco_box_status", value: "production" },
];

export default function PropTableFixture() {
  return (
    <CosmosLayout
      title="PropTable"
      componentName="prop_table"
      code={code}
      config={config}
    >
      <Box>
        <PropTable data={data} />
      </Box>
    </CosmosLayout>
  );
}
