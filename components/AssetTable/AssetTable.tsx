import { Accordion, Table } from "@mantine/core";
import React from "react";

interface AssetTableProps {
  elements: any;
  label: string;
}

const AssetTable: React.FC<AssetTableProps> = ({ elements, label }) => {
  const rows = elements.map((element: any, index: number) => (
    <tr key={index}>
      <td>{element.property}</td>
      <td>{element.value}</td>
      <td>{element.test}</td>
    </tr>
  ));

  const headers = Object.keys(elements[0]).map((value: any) => (
    <th key={value}>{value}</th>
  ));

  return (
    <Accordion
      defaultValue={label}
      styles={{
        item: { border: "none", background: "#F8F9FA" },
        content: {
          background: "#FFF",
          paddingTop: "16px",
          borderRadius: "8px",
        },
        panel: {
          background: "#FFFFFF",
          border: "1px solid #E9ECEF",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Accordion.Item value={label}>
        <Accordion.Control>{label}</Accordion.Control>
        <Accordion.Panel>
          <Table verticalSpacing="lg">
            <thead>
              <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AssetTable;
