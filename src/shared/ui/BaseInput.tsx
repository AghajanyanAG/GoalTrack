import React from "react";
import { Input } from "theme-ui";

const BaseInput: React.FC = () => {
  return (
    <Input
      type="Search"
      placeholder="Search"
      sx={{
        width: "500px",
        px: 2,
        borderRadius: 20,
        border: "none",
        bg: "lightGray",
        color: "textDark",
        outline: "none",
      }}
    />
  );
};

export default BaseInput;
