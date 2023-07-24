import { Box } from "@mantine/core";
import CosmosLayout from "components/CosmosLayout/CosmosLayout";
import AssetLink from "./AssetLink";

const code = `
  <AssetLink
  label="Invoice"
  ref="Asset.tobacco_box.props.tobacco_invoice"
  />
`;

const config = `
- section_type: asset_link
span: 6
prop_ref: Asset.tobacco_box.props.tobacco_invoice
asset_label_prop_ref: Asset.tobacco_invoice.props.tobacco_invoice_label
link_label: Invoice
requires:
  - key_type: context_prop
    context_prop_name: role
    operation: in
    val_type: literal
    val: 
      - operations_manager
      - admin
`;

export default function AssetLinkFixture() {
  return (
    <CosmosLayout
      title="Asset Link"
      componentName="asset_link"
      code={code}
      config={config}
    >
      <Box>
        <AssetLink
          label="Invoice"
          scanlyRef="Asset.tobacco_box.props.tobacco_invoice"
        />
      </Box>
    </CosmosLayout>
  );
}
