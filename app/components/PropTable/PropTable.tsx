import { Card, Table } from "@mantine/core";
import React from "react";

interface PropTableProps {
  elements: any;
}

const PropTable: React.FC<PropTableProps> = ({ elements }) => {
  const rows = elements.map((element: any, index: number) => (
    <tr key={index}>
      <td>{element.property}</td>
      <td>{element.value}</td>
    </tr>
  ));

  const headers = Object.keys(elements[0]).map((value: any) => (
    <th key={value}> {value}</th>
  ));

  return (
    <Card
      sx={{
        background: "#FFFFFF",
        border: "1px solid #E9ECEF",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
      }}
      p={0}
    >
      <Table verticalSpacing="lg">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};

export default PropTable;
