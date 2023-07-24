import { Accordion, Button, Flex } from "@mantine/core";
import React from "react";

interface UserActionsProps {
  userActions: any;
  label: string;
}

const UserActions: React.FC<UserActionsProps> = ({ userActions, label }) => {
  const renderActions = () => {
    return userActions.map((value: any) => (
      <Button
        color="indigo"
        key={value?.label}
        onClick={() => console.log("GO TO -> ", value?.scanlyEventRef)}
        sx={{ flex: 1 }}
      >
        {value?.label}
      </Button>
    ));
  };

  return (
    <Accordion
      defaultValue="actions"
      styles={{
        item: { border: "none", background: "#F8F9FA" },
        content: { background: "#FFF", paddingTop: "24px" },
      }}
    >
      <Accordion.Item value="customization">
        <Accordion.Control>{label}</Accordion.Control>
        <Accordion.Panel>
          <Flex wrap="wrap" gap={12}>
            {renderActions()}
          </Flex>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default UserActions;
