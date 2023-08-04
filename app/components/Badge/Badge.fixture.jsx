import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import Badge from "./Badge";

const code = `
  // this is living inside the AssetTable.tsx file
  <Badge value={propValue} badgeDetails={badgeDetails} />
`;

const config = `
---
# this component is used in a table!
schema_name: CustomBadge
table_name: tobacco_box_table
asset_ref: Asset.tobacco_box
label: Tobacco Box
columns:
  - column_label: Status
  prop_ref: Asset.tobacco_box.props.tobacco_box_status
  type: badge
  badge_style:
    size: xl
    colors:
      - color: green
        val: complete
      - color: yellow
        val: ongoing
---
`;

const badgeDetails = {
  column_label: "Status",
  prop_ref: "Asset.tobacco_box.props.tobacco_box_status",
  type: "badge",
  badge_styles: {
    size: "xl",
    colors: [
      {
        color: "green",
        val: "complete",
      },
      {
        color: "yellow",
        val: "ongoing",
      },
    ],
  },
};

export default function CustomBadgeFixture() {
  return (
    <CosmosLayout
      title="Badge"
      componentName="badge"
      code={code}
      config={config}
    >
      <Badge
        value="complete"
        badgeConfig={badgeDetails}
        badgeStyles={badgeDetails.badge_styles}
      />
    </CosmosLayout>
  );
}
