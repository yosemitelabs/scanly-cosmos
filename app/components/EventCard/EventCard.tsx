import { Box, Card, Flex, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconNotes, IconRipple } from "@tabler/icons-react";
import NoteModal from "app/components/NoteModal/NoteModal";
import React from "react";

interface EventCardProps {
  data?: any;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        onClick={data?.notes ? open : undefined}
        sx={{
          background: "#FFFFFF",
          borderRadius: "8px",
          border: "1px solid #E9ECEF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
          cursor: data?.notes ? "pointer" : "initial",
        }}
        mb={12}
      >
        <Flex align="center">
          <Box mr={12}>
            <IconRipple />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Flex align="center" justify="space-between" sx={{ width: "100%" }}>
              <Text size={8} color="#A6A7AB">
                {data.name}
              </Text>
              <Text size={8} color="#A6A7AB">
                {data.date}
              </Text>
            </Flex>
            <Flex justify="space-between" align="center">
              <Text size={12} color="#2C2E33" sx={{ whiteSpace: "nowrap" }}>
                {data.id} {data.description}
              </Text>
              {data.notes && <IconNotes size={10} />}
            </Flex>
          </Box>
        </Flex>
      </Card>

      <NoteModal opened={opened} onClose={close} data={data} />
    </>
  );
};

export default EventCard;
