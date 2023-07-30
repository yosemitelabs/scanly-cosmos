import { Box } from "@mantine/core";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";

const code = `
  code
`;

const config = `
- section_type: qr_code
span: 6
asset_label_prop_ref: Asset.tobacco_invoice.props.tobacco_invoice_label
- section_type: user_actions
span: 6
user_actions:
  - event_ref: Event.tobacco_box_created
    event_asset_ref: Event.tobacco_box_created.assets.tobacco_invoice
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val: 
          - operations_manager
          - admin
`;

export default function QrCodeFixture() {
  return (
    <CosmosLayout
      title="QR Code"
      componentName="qr_code"
      code={code}
      config={config}
    >
      <Box>content</Box>
    </CosmosLayout>
  );
}
