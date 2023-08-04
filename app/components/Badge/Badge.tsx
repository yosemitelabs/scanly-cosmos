import { Badge } from "@mantine/core";
import React from "react";

interface CustomBadgeProps {
  value: any;
  badgeStyles: any;
}

const CustomBadge: React.FC<CustomBadgeProps> = ({ value, badgeStyles }) => {
  const getComponentColor = () => {
    const colorIndex = badgeStyles?.colors?.findIndex(
      (data: any) => data.val === value
    );

    return badgeStyles?.colors?.[colorIndex]?.color;
  };

  return (
    <Badge {...badgeStyles} color={getComponentColor()}>
      {value}
    </Badge>
  );
};

export default CustomBadge;
