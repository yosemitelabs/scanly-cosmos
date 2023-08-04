import { Card, Table } from "@mantine/core";
import { startCase } from "lodash";
import React from "react";

interface PropKeyValProps {
  data: any;
}

const PropKeyVal: React.FC<PropKeyValProps> = ({ data }) => {
  const rows = data.map((element: any, index: number) => (
    <tr key={index}>
      {Object.keys(element)?.map((value) => (
        <td key={value}>{element[value]}</td>
      ))}
    </tr>
  ));

  const headers = Object.keys(data[0]).map((value: any) => (
    <th key={value}>{startCase(value)}</th>
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

export default PropKeyVal;
