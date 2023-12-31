import { Progress } from "@mantine/core";
import React from "react";

interface CustomProgressProps {
  progressStyles: any;
  value: any;
}

const CustomProgress: React.FC<CustomProgressProps> = ({
  progressStyles,
  value,
}): any => {
  const getComponentColor = () => {
    // get closest value depending on config colors
    const closest = progressStyles?.colors?.reduce(function (
      prev: any,
      curr: any
    ) {
      return Math.abs(curr?.val - value) < Math.abs(prev?.val - value)
        ? curr
        : prev;
    });

    return closest?.color;
  };

  return (
    <Progress {...progressStyles} color={getComponentColor()} value={value} />
  );
};

export default CustomProgress;
