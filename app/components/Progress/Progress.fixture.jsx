import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import CustomProgress from "./Progress";

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

const progressDetails = {
  column_label: "Progress sample",
  prop_ref: "Asset.tobacco_box.props.progress_sample",
  component_type: "progress",
  component_props: {
    color: [
      {
        color: "green",
        val: 100,
      },
      {
        color: "yellow",
        val: 60,
      },
    ],
  },
  asset: {
    prop_name: "progress_sample",
  },
};

export default function ProgressFixture() {
  return (
    <CosmosLayout
      title="Progress"
      componentName="progress"
      code={code}
      config={config}
    >
      <CustomProgress
        value={40}
        color={progressDetails?.component_props?.color}
      />
    </CosmosLayout>
  );
}
