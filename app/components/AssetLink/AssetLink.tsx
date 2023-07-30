import { Button } from "@mantine/core";
import { Icon3dCubeSphere } from "@tabler/icons-react";
import React from "react";

interface AssetLinkProps {
  label: string;
  scanlyRef: string;
}

const AssetLink: React.FC<AssetLinkProps> = ({ label, scanlyRef }) => {
  // update with Stephen once routing is in place
  return (
    <Button
      variant="outline"
      onClick={() => console.log("GO TO -> ", scanlyRef)}
      leftIcon={<Icon3dCubeSphere />}
    >
      {label}
    </Button>
  );
};

export default AssetLink;
