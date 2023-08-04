import { Prism } from "@mantine/prism";
import CosmosLayout from "app/components/CosmosLayout/CosmosLayout";
import { config } from "./kandd";

export default function RawConfigFixture() {
  return (
    <CosmosLayout
      title="Raw Config"
      componentName="raw_config"
      code={null}
      config={null}
    >
      <Prism colorScheme="dark" language="yaml">
        {config}
      </Prism>
    </CosmosLayout>
  );
}
