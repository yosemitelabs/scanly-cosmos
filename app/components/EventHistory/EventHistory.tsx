import React from "react";
import LiveEventCard from "../EventCard/EventCard";
import { Box, Card, Flex, ScrollArea, Text } from "@mantine/core";

interface EventHistoryProps {
  data?: any;
}

const EventHistory: React.FC<EventHistoryProps> = ({ data }) => {
  const renderEvents = () => {
    return data.map((value: any, index: number) => (
      <LiveEventCard data={value} key={index} />
    ));
  };

  return (
    <Box>
      <Card p={16} sx={{ background: "#F8F9FA", borderRadius: "8px" }}>
        <Text size={16} weight={600} color="#2C2E33">
          Live events
        </Text>
        <Flex mt={16} direction="column">
          <ScrollArea h={460}>{renderEvents()}</ScrollArea>
        </Flex>
      </Card>
    </Box>
  );
};

export default EventHistory;
