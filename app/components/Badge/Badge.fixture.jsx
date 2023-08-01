import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import Badge from "./Badge";

const code = `
  <Badge value={propValue} badgeDetails={badgeDetails} />
`;

const config = `
---
schema_name: CustomBadge
table_name: tobacco_box_table
asset_ref: Asset.tobacco_box
label: Tobacco Box
columns:
  - column_label: Status
    prop_ref: Asset.tobacco_box.props.tobacco_box_status
    component_type: badge
    component_color:
      - color: green
        val: complete
      - color: ongoing
        val: yellow
---
`;

const badgeDetails = {
  column_label: "Status",
  prop_ref: "Asset.tobacco_box.props.tobacco_box_status",
  component_type: "badge",
  component_color: [
    {
      color: "green",
      val: "complete",
    },
    {
      color: "yellow",
      val: "ongoing",
    },
  ],
};

export default function CustomBadgeFixture() {
  return (
    <CosmosLayout
      title="Badge"
      componentName="badge"
      code={code}
      config={config}
    >
      <Badge value="complete" badgeConfig={badgeDetails} />
    </CosmosLayout>
  );
}
