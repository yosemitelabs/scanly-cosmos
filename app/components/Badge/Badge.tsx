import { Badge } from "@mantine/core";
import React from "react";

interface CustomBadgeProps {
  badgeConfig: any;
  value: any;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ badgeConfig, value }) => {
  const getComponentColor = () => {
    const colorIndex = badgeConfig.component_color?.findIndex(
      (value: any) => value.val === value
    );

    return badgeConfig.component_color?.[colorIndex].color;
  };

  return <Badge color={getComponentColor()}>{value}</Badge>;
};

export default CustomBadge;
