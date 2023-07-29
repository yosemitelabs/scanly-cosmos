import { Modal } from "@mantine/core";
import React from "react";

interface NoteModalProps {
  opened: boolean;
  onClose: () => void;
  data: any;
}

const NoteModal: React.FC<NoteModalProps> = ({ opened, onClose, data }) => {
  if (!data) {
    return null;
  }

  return (
    <Modal
      size="100%"
      opened={opened}
      onClose={onClose}
      title={data?.name}
      centered
      styles={{
        header: { borderBottom: "1px solid #E9ECEF" },
        title: { fontWeight: 700 },
      }}
    >
      notes here
    </Modal>
  );
};

export default NoteModal;
