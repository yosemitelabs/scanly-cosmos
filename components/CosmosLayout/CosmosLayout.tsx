import { Badge, Box, Col, Divider, Flex, Grid, Text } from "@mantine/core";
import { Prism } from "@mantine/prism";
import React from "react";

interface CosmosLayoutProps {
  code: string;
  config: string | null;
  children: React.ReactNode;
  title: string;
  componentName: string;
}

const CosmosLayout: React.FC<CosmosLayoutProps> = ({
  children,
  code,
  config,
  title,
  componentName,
}) => {
  return (
    <Box p={24}>
      <Flex justify="space-between">
        <Text sx={{ fontSize: "24px", fontWeight: 600 }} component="h1">
          {title}
        </Text>
        <Badge size="xl" sx={{ textTransform: "lowercase" }}>
          {componentName}
        </Badge>
      </Flex>
      <Box>{children}</Box>
      <Divider sx={{ margin: "40px 0 !important" }} />
      <Grid>
        {config && (
          <Col span={12}>
            <Text component="h2">Scanly Config Sample</Text>
            <Prism colorScheme="dark" language="yaml">
              {config}
            </Prism>
          </Col>
        )}
        <Col span={12}>
          <Text component="h2">Code</Text>
          <Prism colorScheme="dark" language="tsx">
            {code}
          </Prism>
        </Col>
      </Grid>
    </Box>
  );
};

export default CosmosLayout;
