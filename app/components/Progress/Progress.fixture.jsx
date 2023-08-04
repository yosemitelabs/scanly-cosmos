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
  - column_label: Progress Sample
    prop_ref: Asset.tobacco_box.props.progress_sample
    type: progress
    badge_style:
    size: lg
    colors:
      - color: green
        val: 100
      - color: yellow
        val: 60
---
`;

const progressDetails = {
  column_label: "Progress sample",
  prop_ref: "Asset.tobacco_box.props.progress_sample",
  type: "progress",
  progress_styles: {
    size: "lg",
    colors: [
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
        progressStyles={progressDetails?.progress_styles}
      />
    </CosmosLayout>
  );
}
