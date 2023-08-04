import { Box, Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

interface CodeScannerProps {}

const CodeScanner: React.FC<CodeScannerProps> = ({}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [error, setError] = useState("");

  return (
    <>
      <Button onClick={open} color="indigo">
        Scan
      </Button>
      <Modal
        size={300}
        opened={opened}
        onClose={close}
        title="QR Scanner"
        centered
        styles={{
          header: { borderBottom: "1px solid #E9ECEF" },
          title: { fontWeight: 700 },
          body: { padding: "24px !important" },
        }}
        keepMounted
      >
        <Box
          sx={{
            svg: {
              path: {
                stroke: "#4c6ef5 !important",
              },
            },
          }}
        >
          <QrScanner
            onDecode={(result) => console.log(result)}
            onError={(error) => setError(error?.message)}
          />
          {error && (
            <Text color="red" id="global-reader-error">
              {error}
            </Text>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default CodeScanner;
