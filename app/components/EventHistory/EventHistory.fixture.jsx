import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import EventHistory from "./EventHistory";
import { sample, uniqueId } from "lodash";

const code = `
  // data = asset_ref events
<EventHistory data={productionEvents} />
`;

const config = `
#region view product_sku_view
schema_name: View
view_name: product_sku_view
asset_ref: Asset.product_sku
path: "/"
label: Product SKU
sections:
  - section_type: event_history
    span: 12
    requires:
      - key_type: context_prop
        context_prop_name: role
        operation: in
        val_type: literal
        val:
          - hr
          - admin
---
#endregion
`;

const inventory = ["Tobacco leaves", "Pouches", "Cases", "Oil", "Canisters"];
const names = [
  "Connie Raymond",
  "Clinton Kemp",
  "Meredith Knapp",
  "Elliott Ewing",
  "Heath Walton",
];
const description = [
  "Tobacco receiving",
  "Removing veins",
  "Cutting",
  "Pouching",
  "Case",
];

const productionEvents = Array.from(
  { length: Math.floor(Math.random() * 100) + 1 },
  (_) => ({
    id: `Batch ${uniqueId("SC-")}:`,
    amount: `${Math.floor(Math.random() * 101) + 1}kg`,
    package: `${sample(inventory)}`,
    name: sample(names),
    description: `${sample(description)}`,
    date: "June 23, 2023 | 10:00:00",
    notes: Math.floor(Math.random() * 10) % 2 === 0,
  })
);

export default function EventHistoryFixture() {
  return (
    <CosmosLayout
      title="Event History"
      componentName="event_history"
      code={code}
      config={config}
    >
      <EventHistory data={productionEvents} />
    </CosmosLayout>
  );
}
