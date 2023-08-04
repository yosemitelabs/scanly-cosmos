import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import AssetTable from "./AssetTable";

const code = `
  <AssetTable elements={elements} />
`;

const config = `
---
- section_type: asset_table
span: 12
label: Tobacco Boxes
asset_list_prop_ref: Asset.tobacco_invoice.props.tobacco_boxes
table_ref: AssetTable.tobacco_box_table
expanded: true
---
#region AssetTable tobacco_box_table
schema_name: AssetTable
table_name: tobacco_box_table
asset_ref: Asset.tobacco_box
label: Tobacco Box
columns:
  - column_label: Customer
    prop_ref: Asset.tobacco_box.props.customer
  - column_label: Invoice
    prop_ref: Asset.tobacco_box.props.invoice_number
  - column_label: Box number
    prop_ref: Asset.tobacco_box.props.box_number
  - column_label: Status
    prop_ref: Asset.tobacco_box.props.tobacco_box_status
    type: badge
    [component_type_name]_style
    asset_link_style
    progress_style
    badge_style
      size: xl
      colors:
        - color: green
          val: complete
        - color: yellow
          val: ongoing
  - column_label: Delivered weight
    prop_ref: Asset.tobacco_box.props.delivered_weight_lbs
sort_props:
  - prop_ref: Asset.tobacco_box.props.invoice_number
  - prop_ref: Asset.tobacco_box.props.box_number
row_colors:
  - filters:
    - key_type: asset_prop
      prop_ref: Asset.tobacco_box.props.tobacco_box_status
      operation: equals
      val_type: literal
      val: complete
    - key_type: asset_prop
      prop_ref: Asset.tobacco_box.props.cuts_yield_pct
      operation: gt
      val_type: literal
      val: .5
    color: green
  - filters:
    - key_type: asset_prop
      prop_ref: Asset.tobacco_box.props.tobacco_box_status
      operation: equals
      val_type: literal
      val: complete
    - key_type: asset_prop
      prop_ref: Asset.tobacco_box.props.cuts_yield_pct
      operation: gt
      val_type: literal
      val: .4
    color: yellow
  - filters:
    - key_type: asset_prop
      prop_ref: Asset.tobacco_box.props.tobacco_box_status
      operation: equals
      val_type: literal
      val: complete
    color: red
filters:
  - key_type: asset_prop
    prop_ref: Asset.tobacco_box.props.customer
    operation: equals
    val_type: context_prop_name_val
    context_prop_name_val: customer
---
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
      componentName="assest_table"
      code={code}
      config={config}
    >
      <AssetTable label="Boxes" elements={elements} />
    </CosmosLayout>
  );
}
