import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import { uniqueId } from "lodash";
import EventCard from "./EventCard";

const code = `
  code
`;

const config = null;

const data = {
  id: `Batch ${uniqueId("SC-")}:`,
  amount: `${Math.floor(Math.random() * 101) + 1}kg`,
  package: `Tobacco leaves`,
  name: "Connie Raymond",
  description: `Tobacco receiving`,
  date: "June 23, 2023 | 10:00:00",
  notes: Math.floor(Math.random() * 10) % 2 === 0,
};

export default function EventCardFixture() {
  return (
    <CosmosLayout
      title="Event Card"
      componentName="event_card"
      code={code}
      config={config}
    >
      <EventCard data={data} />
    </CosmosLayout>
  );
}
