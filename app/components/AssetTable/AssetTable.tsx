import { Accordion, Badge, Box, Progress, Table, Text } from "@mantine/core";
import React from "react";
import { uniqueId, sample } from "lodash";

interface AssetTableProps {
  elements?: any;
  label: string;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const sweatStatus = ["sweating", "aging", "available"];

const getColor = (value: number, isMantine: boolean) => {
  if (value < 20) {
    return isMantine ? "red" : "red";
  }
  if (value < 70) {
    return isMantine ? "orange" : "orange";
  }
  if (value < 101) {
    return isMantine ? "green" : "#40C057";
  }

  return isMantine ? "green" : "#40C057";
};

const casesTableData = Array.from(
  { length: Math.floor(Math.random() * 100) + 1 },
  (_) => ({
    id: `Case ${uniqueId("SC-")}`,
    weight: `${Math.floor(Math.random() * 101) + 1}kg`,
    class: "Wrapper",
    location: `Warehouse 1`,
    title: `${alphabet[Math.floor(Math.random() * alphabet.length)]}${
      alphabet[Math.floor(Math.random() * alphabet.length)]
    }`,
    price: "$ 1,113.90",
    status: sample(sweatStatus),
    sweatTime: Math.floor(Math.random() * 10),
    aging: Math.floor(Math.random() * 10),
  })
);

const AssetTable: React.FC<AssetTableProps> = ({ label }) => {
  const rows = casesTableData.map((element: any, index: any) => {
    return (
      <tr
        key={index}
        style={{
          background: "white",
        }}
      >
        <td style={{ whiteSpace: "nowrap" }}>{element.id}</td>
        <td style={{ whiteSpace: "nowrap" }}>{element.weight}</td>
        <td style={{ whiteSpace: "nowrap" }}>{element.class}</td>
        <td style={{ whiteSpace: "nowrap" }}>{element.location}</td>
        <td style={{ whiteSpace: "nowrap" }}>
          <Box>
            <Text mb={4}>{element.sweatTime} / 10 months</Text>
            <Progress
              value={element.sweatTime * 10}
              color={getColor(element.sweatTime * 10, true)}
            />
          </Box>
        </td>
        <td style={{ whiteSpace: "nowrap" }}>
          <Box>
            <Text mb={4}>{element.aging} years</Text>
            <Progress
              value={element.sweatTime * 10}
              color={getColor(element.sweatTime * 10, true)}
            />
          </Box>
        </td>
        <td style={{ whiteSpace: "nowrap" }}>{element.price}</td>
        <td style={{ whiteSpace: "nowrap" }}>
          <Badge color="yellow">{element.status}</Badge>
        </td>
      </tr>
    );
  });

  return (
    <Accordion
      defaultValue={label}
      styles={{
        item: { border: "none", background: "#F8F9FA" },
        content: {
          background: "#FFF",
          paddingTop: "16px",
          borderRadius: "8px",
          overflowX: "auto",
        },
        panel: {
          background: "#FFFFFF",
          border: "1px solid #E9ECEF",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
          overflow: "hidden",
        },
      }}
    >
      <Accordion.Item value={label}>
        <Accordion.Control>{label}</Accordion.Control>
        <Accordion.Panel>
          <Table>
            <thead>
              <tr>
                <th>Case #</th>
                <th>Weight</th>
                <th>Class</th>
                <th>Location</th>
                <th style={{ whiteSpace: "nowrap" }}>Sweat time</th>
                <th>Aging</th>
                <th style={{ whiteSpace: "nowrap" }}>Est. price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AssetTable;
