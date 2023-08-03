import { Badge } from "@mantine/core";
import React from "react";

interface CustomBadgeProps {
  color: any;
  value: any;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ color, value }) => {
  const getComponentColor = () => {
    const colorIndex = color?.findIndex((data: any) => data.val === value);

    return color?.[colorIndex]?.color;
  };

  return <Badge color={getComponentColor()}>{value}</Badge>;
};

export default CustomBadge;
