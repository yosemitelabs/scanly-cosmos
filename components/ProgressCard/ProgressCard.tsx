import { Badge, Box, Card, Flex, RingProgress, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { RingProgressProps } from "@mantine/core";
import React from "react";

interface ProgressCardProps extends RingProgressProps {
  title: string;
  value: string;
  percent?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  value,
  percent,
  ...rest
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#FFFFFF",
        border: "1px solid #E9ECEF",
        borderRadius: "8px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
        height: "120px",
      }}
      p={24}
    >
      <Box>
        <Flex align="center">
          <Text
            sx={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#2C2E33",
              lineHeight: "135%",
            }}
          >
            {value}
          </Text>
          {percent && (
            <Badge ml={8} size="lg" color="green">
              {percent} <IconArrowUpRight size={16} />
            </Badge>
          )}
        </Flex>
        <Text
          sx={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#909296",
            lineHeight: "155%",
          }}
        >
          {title}
        </Text>
      </Box>
      <Box ml="md">
        <RingProgress {...rest} />
      </Box>
    </Card>
  );
};

export default ProgressCard;
