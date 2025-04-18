import React, { ReactNode } from "react";
import { Button } from "theme-ui";

const ToggleButton: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Button
    sx={{
      width: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      bg: "backgroundDark",
      fontSize: 2,
      fontWeight: "bold",
      py: 2,
      borderRadius: 20,
      transition: "0.3s",
      "&:hover": {
        cursor: "pointer",
      },
    }}
  >
    {children}
  </Button>
);

export default ToggleButton;
