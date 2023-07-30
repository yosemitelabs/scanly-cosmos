import { Box } from "@mantine/core";
import type { V2_MetaFunction } from "@remix-run/node";
import AssetTable from "app/components/AssetTable/AssetTableNew";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Scanly Components" },
    { name: "description", content: "These are the components of scan.ly" },
  ];
};

export default function Index() {
  return (
    <Box
      p={40}
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <AssetTable label="Boxes" />
    </Box>
  );
}
