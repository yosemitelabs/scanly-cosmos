import { Accordion, Button, Col, Grid } from "@mantine/core";
import React from "react";

interface UserActionsProps {
  userActions: any;
  label: string;
  isDefaultOpen?: boolean;
}

const UserActions: React.FC<UserActionsProps> = ({
  userActions,
  label,
  isDefaultOpen,
}) => {
  const renderActions = () => {
    return userActions.map((value: any) => (
      <Col xs={2} md={2} lg={3} key={value?.label}>
        <Button
          color="indigo"
          onClick={() => console.log("GO TO -> ", value?.scanlyEventRef)}
          sx={{ flex: 1, width: "100%" }}
        >
          {value?.label}
        </Button>
      </Col>
    ));
  };

  return (
    <Accordion
      defaultValue={isDefaultOpen ? "actions" : ""}
      styles={{
        item: { border: "none", background: "#F8F9FA" },
        content: { background: "#FFF", paddingTop: "24px" },
      }}
    >
      <Accordion.Item value="actions">
        <Accordion.Control>{label}</Accordion.Control>
        <Accordion.Panel>
          <Grid gutter={12}>{renderActions()}</Grid>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default UserActions;
